/* ============================================================
   Farmacia Nieto — Configuración de la nube (Supabase)

   Ya está conectado a tu proyecto de Supabase. La web y el panel
   guardan los pedidos en la nube y se ven en todas las computadoras.
   ============================================================ */

window.FN_CONFIG = {
  // Project URL de tu proyecto de Supabase:
  SUPABASE_URL: 'https://lajtqymtkerkfmwhiiju.supabase.co',

  // Clave pública (anon / publishable) — está pensada para ir en la web:
  SUPABASE_ANON_KEY: 'sb_publishable_zbgoYgAzOWQaY-o4whPfxQ_qIFVEhDc',

  // Contraseña para poder BORRAR pedidos en el panel.
  // Cambiala por una que sepan solo vos y las personas de confianza:
  BORRAR_CLAVE: 'nieto2024',

  // ── Captcha invisible (Cloudflare Turnstile) — antibots ──
  // Pegá acá la "Site Key" (clave pública) que te da Cloudflare Turnstile.
  // Mientras esté vacío, la web sigue funcionando sin captcha (con el
  // límite de 1 consulta cada 24 h como protección). Ver CAPTCHA.md.
  TURNSTILE_SITE_KEY: '',

  // URL de la función "crear-pedido" de Supabase (la que verifica el captcha
  // y guarda el pedido). Queda así:
  //   https://lajtqymtkerkfmwhiiju.supabase.co/functions/v1/crear-pedido
  // Dejala vacía hasta que hayas creado la función (ver CAPTCHA.md).
  CREAR_PEDIDO_URL: '',
};
