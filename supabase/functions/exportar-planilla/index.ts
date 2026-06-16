// ============================================================
// Farmacia Nieto — Función "exportar-planilla"
//
// Recibe la lista de pedidos desde el panel y la escribe en tu
// planilla de Google Sheets (reemplaza el contenido cada vez).
//
// Seguridad: solo responde si quien llama es un usuario logueado
// del panel (verifica el token de sesión contra Supabase Auth).
//
// Variables de entorno (Edge Functions → Secrets):
//   GOOGLE_CLIENT_ID           (ya cargado, de Drive)
//   GOOGLE_CLIENT_SECRET       (ya cargado, de Drive)
//   GOOGLE_REFRESH_TOKEN       (re-generado incluyendo el permiso de Sheets)
//   SUPABASE_URL / *_ANON_KEY / *_SERVICE_ROLE_KEY  (los pone Supabase)
//
// Importante: dejá "Verify JWT" en OFF para esta función (igual que
// crear-pedido); la validación del usuario la hace el propio código.
// ============================================================

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
}

// Confirma que quien llama es un usuario del panel con sesión iniciada.
async function usuarioValido(req: Request): Promise<boolean> {
  const auth = req.headers.get("Authorization") || "";
  const tokenU = auth.replace(/^Bearer\s+/i, "").trim();
  if (!tokenU) return false;
  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const apikey = Deno.env.get("SUPABASE_ANON_KEY") || Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  try {
    const r = await fetch(`${SUPABASE_URL}/auth/v1/user`, { headers: { apikey, Authorization: `Bearer ${tokenU}` } });
    if (!r.ok) return false;
    const u = await r.json();
    return !!(u && u.id);
  } catch { return false; }
}

async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    client_id: Deno.env.get("GOOGLE_CLIENT_ID")!,
    client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET")!,
    refresh_token: Deno.env.get("GOOGLE_REFRESH_TOKEN")!,
    grant_type: "refresh_token",
  });
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: params,
  });
  const d = await r.json();
  if (!d.access_token) throw new Error("token google: " + JSON.stringify(d).slice(0, 200));
  return d.access_token;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ ok: false, error: "método no permitido" }, 405);

  if (!(await usuarioValido(req))) return json({ ok: false, error: "necesitás iniciar sesión en el panel" }, 401);

  let body: any;
  try { body = await req.json(); } catch { return json({ ok: false, error: "datos inválidos" }, 400); }

  const sheetId = String(body.sheetId || "").trim();
  const rows = body.rows;
  const widths = Array.isArray(body.widths) ? body.widths : [];
  if (!sheetId) return json({ ok: false, error: "falta el ID de la planilla" }, 400);
  if (!Array.isArray(rows) || rows.length === 0) return json({ ok: false, error: "no hay datos para enviar" }, 400);

  let token: string;
  try { token = await getAccessToken(); }
  catch (e) { return json({ ok: false, error: "no se pudo conectar con Google: " + (e as Error).message }, 502); }

  const G = { Authorization: `Bearer ${token}` };
  try {
    // 1) Averiguar la primera hoja de la planilla (nombre + id interno)
    const metaR = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties(title,sheetId)`,
      { headers: G },
    );
    const meta = await metaR.json();
    if (!metaR.ok || !meta.sheets || !meta.sheets.length) {
      return json({ ok: false, error: "no se pudo abrir la planilla: " + JSON.stringify(meta).slice(0, 200) }, 502);
    }
    const hoja = meta.sheets[0].properties.title as string;
    const gid = meta.sheets[0].properties.sheetId as number;
    const rango = encodeURIComponent(`${hoja}!A:Z`);

    // 2) Limpiar lo que había
    await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${rango}:clear`, { method: "POST", headers: G });

    // 3) Escribir los datos nuevos desde A1
    const escR = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(`${hoja}!A1`)}?valueInputOption=RAW`,
      { method: "PUT", headers: { ...G, "Content-Type": "application/json" }, body: JSON.stringify({ values: rows }) },
    );
    const esc = await escR.json();
    if (!escR.ok || esc.error) {
      return json({ ok: false, error: "no se pudo escribir: " + JSON.stringify(esc).slice(0, 200) }, 502);
    }

    // 4) Darle formato lindo (no es crítico: si falla, los datos ya quedaron)
    try {
      const numCols = (rows[0] as unknown[]).length;
      const numRows = rows.length;
      const requests: unknown[] = [
        // Encabezado: negrita, blanco sobre verde, centrado y con ajuste de texto
        {
          repeatCell: {
            range: { sheetId: gid, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: numCols },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 0.118, green: 0.302, blue: 0.169 },
                horizontalAlignment: "CENTER", verticalAlignment: "MIDDLE", wrapStrategy: "WRAP",
                textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
              },
            },
            fields: "userEnteredFormat(backgroundColor,horizontalAlignment,verticalAlignment,wrapStrategy,textFormat)",
          },
        },
        // Congelar la primera fila
        {
          updateSheetProperties: {
            properties: { sheetId: gid, gridProperties: { frozenRowCount: 1 } },
            fields: "gridProperties.frozenRowCount",
          },
        },
        // Datos: ajuste de texto (que el texto largo se acomode) y alineado arriba
        {
          repeatCell: {
            range: { sheetId: gid, startRowIndex: 1, endRowIndex: numRows, startColumnIndex: 0, endColumnIndex: numCols },
            cell: { userEnteredFormat: { wrapStrategy: "WRAP", verticalAlignment: "TOP" } },
            fields: "userEnteredFormat(wrapStrategy,verticalAlignment)",
          },
        },
      ];
      // Anchos de columna (los mismos que usa el Excel)
      for (let i = 0; i < numCols; i++) {
        const w = Number(widths[i]) || 14;
        requests.push({
          updateDimensionProperties: {
            range: { sheetId: gid, dimension: "COLUMNS", startIndex: i, endIndex: i + 1 },
            properties: { pixelSize: Math.max(60, Math.round(w * 7) + 16) },
            fields: "pixelSize",
          },
        });
      }
      await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}:batchUpdate`, {
        method: "POST", headers: { ...G, "Content-Type": "application/json" }, body: JSON.stringify({ requests }),
      });
    } catch (_e) { /* el formato es opcional */ }

    return json({ ok: true, filas: Math.max(0, rows.length - 1) });
  } catch (e) {
    return json({ ok: false, error: "error con la planilla: " + (e as Error).message }, 500);
  }
});
