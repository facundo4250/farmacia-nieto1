// ============================================================
// Farmacia Nieto — Función "crear-pedido"
//
// 1) Recibe el pedido desde la web.
// 2) Verifica el captcha invisible (Cloudflare Turnstile).
// 3) Si hay receta (foto/PDF) y Google Drive está configurado,
//    la sube a TU carpeta de Drive y guarda en la base SOLO el
//    enlace (así no se llena el almacenamiento de la nube).
// 4) Guarda el pedido.
//
// Variables de entorno (se cargan en Supabase → Edge Functions → Secrets):
//   TURNSTILE_SECRET           -> "Secret Key" de Cloudflare Turnstile
//   GOOGLE_CLIENT_ID           -> (Drive) Client ID de Google
//   GOOGLE_CLIENT_SECRET       -> (Drive) Client secret de Google
//   GOOGLE_REFRESH_TOKEN       -> (Drive) refresh token de tu cuenta
//   DRIVE_FOLDER_ID            -> (Drive) ID de la carpeta donde guardar
//   SUPABASE_URL               -> lo pone Supabase automáticamente
//   SUPABASE_SERVICE_ROLE_KEY  -> lo pone Supabase automáticamente
//
// Si las variables de Google NO están cargadas, la receta se guarda
// como antes (dentro de la base). Apenas las cargás, pasa a Drive.
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

function limpiar(v: unknown, regex: RegExp, max: number): string {
  return String(v ?? "").replace(regex, "").trim().slice(0, max);
}

// ── Google Drive ────────────────────────────────────────────
function driveConfigurado(): boolean {
  return !!(Deno.env.get("GOOGLE_CLIENT_ID") &&
            Deno.env.get("GOOGLE_CLIENT_SECRET") &&
            Deno.env.get("GOOGLE_REFRESH_TOKEN") &&
            Deno.env.get("DRIVE_FOLDER_ID"));
}

async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    client_id: Deno.env.get("GOOGLE_CLIENT_ID")!,
    client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET")!,
    refresh_token: Deno.env.get("GOOGLE_REFRESH_TOKEN")!,
    grant_type: "refresh_token",
  });
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const d = await r.json();
  if (!d.access_token) throw new Error("token google: " + JSON.stringify(d).slice(0, 200));
  return d.access_token;
}

function dataUrlABytes(dataUrl: string): { mime: string; bytes: Uint8Array } {
  const m = dataUrl.match(/^data:([^;]+);base64,([\s\S]*)$/);
  if (!m) throw new Error("receta inválida");
  const bin = atob(m[2]);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return { mime: m[1], bytes };
}

async function subirADrive(dataUrl: string, etiqueta: string): Promise<{ id: string; link: string }> {
  const token = await getAccessToken();
  const folderId = Deno.env.get("DRIVE_FOLDER_ID")!;
  const { mime, bytes } = dataUrlABytes(dataUrl);
  const ext = mime.includes("pdf") ? "pdf" : (mime.includes("png") ? "png" : "jpg");
  const fecha = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  const nombre = `receta-${fecha}-${etiqueta}.${ext}`.replace(/[^a-zA-Z0-9._-]/g, "_");

  const boundary = "fnb" + Date.now();
  const enc = new TextEncoder();
  const meta = JSON.stringify({ name: nombre, parents: [folderId] });
  const pre = enc.encode(
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${meta}\r\n` +
    `--${boundary}\r\nContent-Type: ${mime}\r\n\r\n`,
  );
  const post = enc.encode(`\r\n--${boundary}--`);
  const cuerpo = new Uint8Array(pre.length + bytes.length + post.length);
  cuerpo.set(pre, 0);
  cuerpo.set(bytes, pre.length);
  cuerpo.set(post, pre.length + bytes.length);

  const r = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink",
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": `multipart/related; boundary=${boundary}` },
      body: cuerpo,
    },
  );
  const d = await r.json();
  if (!d.id) throw new Error("subida drive: " + JSON.stringify(d).slice(0, 200));
  return { id: d.id, link: d.webViewLink || `https://drive.google.com/file/d/${d.id}/view` };
}

// ── Función principal ───────────────────────────────────────
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
    const verResp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
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

  // 3) Si hay receta y Drive está configurado, la subimos a Drive
  //    y dejamos en la base SOLO el enlace (liberamos almacenamiento).
  let receta_drive_url: string | null = null;
  let receta_drive_id: string | null = null;
  if (receta_img && driveConfigurado()) {
    try {
      const sub = await subirADrive(receta_img, nombre || "pedido");
      receta_drive_url = sub.link;
      receta_drive_id = sub.id;
      receta_img = null; // no guardamos la imagen pesada en la nube
    } catch (e) {
      // Si Drive falla, NO perdemos la receta: queda guardada como antes.
      console.error("drive error:", e);
    }
  }

  // 4) Guardar el pedido (con la clave de servicio, que no se expone en la web)
  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  const row: Record<string, unknown> = {
    nombre, telefono, especialidad, detalle, receta_img,
    origen: "web", estado: "nuevo",
  };
  // Solo agregamos las columnas de Drive si de verdad subimos algo
  // (así, si todavía no creaste esas columnas, los pedidos siguen entrando).
  if (receta_drive_url) {
    row.receta_drive_url = receta_drive_url;
    row.receta_drive_id = receta_drive_id;
  }

  const insResp = await fetch(`${SUPABASE_URL}/rest/v1/pedidos`, {
    method: "POST",
    headers: {
      "apikey": SERVICE_KEY,
      "Authorization": `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!insResp.ok) {
    const txt = await insResp.text();
    return json({ ok: false, error: "no se pudo guardar el pedido" + (txt ? ": " + txt.slice(0, 200) : "") }, 500);
  }

  return json({ ok: true });
});
