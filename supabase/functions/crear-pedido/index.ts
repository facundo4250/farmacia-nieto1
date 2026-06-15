// ============================================================
// Farmacia Nieto — Función "crear-pedido"
//
// Recibe el pedido desde la web, verifica el captcha invisible
// (Cloudflare Turnstile) contra los servidores de Cloudflare y,
// solo si el captcha es válido, guarda el pedido en la base.
//
// Así un bot no puede mandar pedidos directo a la base: tiene que
// pasar primero por este filtro.
//
// Variables de entorno que usa (se cargan en Supabase):
//   TURNSTILE_SECRET           -> "Secret Key" de Cloudflare Turnstile
//   SUPABASE_URL               -> lo pone Supabase automáticamente
//   SUPABASE_SERVICE_ROLE_KEY  -> lo pone Supabase automáticamente
// ============================================================

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

// Deja solo los caracteres permitidos y recorta el largo (defensa extra,
// igual que en la web).
function limpiar(v: unknown, regex: RegExp, max: number): string {
  return String(v ?? "").replace(regex, "").trim().slice(0, max);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ ok: false, error: "método no permitido" }, 405);

  let body: any;
  try { body = await req.json(); } catch { return json({ ok: false, error: "datos inválidos" }, 400); }

  // 1) Verificar el captcha con Cloudflare
  const token = body.captchaToken;
  const secret = Deno.env.get("TURNSTILE_SECRET");
  if (!secret) return json({ ok: false, error: "captcha no configurado en el servidor" }, 500);
  if (!token) return json({ ok: false, error: "falta el captcha" }, 400);

  try {
    const form = new FormData();
    form.append("secret", secret);
    form.append("response", token);
    const ip = req.headers.get("CF-Connecting-IP") || req.headers.get("x-forwarded-for");
    if (ip) form.append("remoteip", ip.split(",")[0].trim());

    const verResp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const ver = await verResp.json();
    if (!ver.success) return json({ ok: false, error: "captcha no válido" }, 403);
  } catch {
    return json({ ok: false, error: "no se pudo verificar el captcha" }, 502);
  }

  // 2) Validar y limpiar los datos (lista blanca de campos y caracteres)
  const nombre = limpiar(body.nombre, /[^a-zA-ZÀ-ſ\s]/g, 120);
  const telefono = limpiar(body.telefono, /[^0-9+\-\s()]/g, 40);
  const especialidad = limpiar(body.especialidad, /[^a-zA-Z0-9À-ſ\s.,()/-]/g, 120);
  const detalle = limpiar(body.detalle, /[^a-zA-Z0-9À-ſ\s.,]/g, 1000);

  if (!nombre || telefono.replace(/\D/g, "").length < 6) {
    return json({ ok: false, error: "datos incompletos" }, 400);
  }

  // La receta puede venir como imagen (jpg/png) o PDF en formato data:URL.
  let receta_img: string | null = null;
  const r = typeof body.receta_img === "string" ? body.receta_img : "";
  const recetaOk = r && (
    r.startsWith("data:image/jpeg") || r.startsWith("data:image/png") ||
    r.startsWith("data:image/jpg") || r.startsWith("data:application/pdf")
  );
  if (recetaOk && r.length < 8_000_000) receta_img = r; // ~6 MB máx

  // 3) Guardar el pedido (con la clave de servicio, que no se expone en la web)
  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  const insResp = await fetch(`${SUPABASE_URL}/rest/v1/pedidos`, {
    method: "POST",
    headers: {
      "apikey": SERVICE_KEY,
      "Authorization": `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal",
    },
    body: JSON.stringify({
      nombre, telefono, especialidad, detalle, receta_img,
      origen: "web", estado: "nuevo",
    }),
  });

  if (!insResp.ok) {
    const txt = await insResp.text();
    return json({ ok: false, error: "no se pudo guardar el pedido" + (txt ? ": " + txt.slice(0, 200) : "") }, 500);
  }

  return json({ ok: true });
});
