# Captcha invisible (antibots) — Farmacia Nieto

Esto agrega un **captcha invisible** al formulario de la web. Para una persona
normal **no se nota nada** (no hay que tildar “no soy un robot”), pero frena los
bots y las automatizaciones que mandan pedidos falsos. Con el captcha activo, ya
**no hace falta** el límite de “1 consulta cada 24 h” (se apaga solo).

> Mientras no completes estos pasos, la web **sigue funcionando igual** que
> ahora, con el límite de 24 h como protección. El captcha recién se activa
> cuando llenás las dos claves en `config.js` (último paso).

Son 4 pasos. Tardás unos 15 minutos. Todo gratis.

---

## Paso 1 — Crear el captcha en Cloudflare (gratis)

1. Entrá a **https://dash.cloudflare.com/sign-up** y creá una cuenta (o iniciá sesión).
2. En el menú de la izquierda buscá **Turnstile** y entrá.
3. Tocá **Add widget / Agregar widget**.
4. Completá:
   - **Widget name:** `Farmacia Nieto`
   - **Hostname / Dominio:** agregá estos dos:
     - `facundo4250.github.io`
     - `localhost` (para probar desde tu computadora)
   - **Widget Mode / Modo:** elegí **Managed (Recomendado)**.
5. Tocá **Create / Crear**.
6. Cloudflare te muestra **dos claves**. Anotá las dos:
   - **Site Key** (clave pública, empieza con `0x...`) → va en la web.
   - **Secret Key** (clave secreta) → va en Supabase. **No la compartas con nadie.**

---

## Paso 2 — Crear la función en Supabase

Esta función es la que revisa el captcha y recién ahí guarda el pedido.

1. Entrá a tu proyecto en **https://supabase.com/dashboard**.
2. Menú izquierdo → **Edge Functions** → **Deploy a new function** →
   **Via editor** (crear en el navegador).
3. Nombre de la función (tiene que ser exactamente): **`crear-pedido`**
4. **IMPORTANTE:** buscá la opción **“Verify JWT” / “Enforce JWT”** y dejala
   **DESACTIVADA (off)** para esta función. (El captcha es nuestra protección,
   no hace falta el token de usuario.)
5. Borrá el código de ejemplo y pegá **todo** el contenido del archivo
   `supabase/functions/crear-pedido/index.ts` de este proyecto.
6. Tocá **Deploy / Desplegar**.

### Cargar la clave secreta del captcha

1. Dentro de **Edge Functions**, entrá a **Secrets** (o
   *Project Settings → Edge Functions → Secrets*).
2. Agregá un secreto nuevo:
   - **Name:** `TURNSTILE_SECRET`
   - **Value:** pegá la **Secret Key** de Cloudflare (la del Paso 1).
3. Guardá.

> Las otras dos claves que usa la función (`SUPABASE_URL` y
> `SUPABASE_SERVICE_ROLE_KEY`) **ya las pone Supabase solo**. No tenés que hacer nada.

---

## Paso 3 — Que solo la función pueda guardar pedidos (recomendado)

Esto es lo que hace que el captcha **realmente** proteja: cerramos la puerta
para que nadie pueda mandar pedidos salteándose el captcha.

En Supabase → **SQL Editor** → pegá y ejecutá:

```sql
-- Quita el permiso de "cualquiera puede insertar" desde la web.
-- A partir de ahora, los pedidos entran SOLO por la función crear-pedido.
drop policy if exists "la web puede crear pedidos" on public.pedidos;
```

> ¿No sabés cómo se llama tu política? En **Authentication → Policies →
> tabla `pedidos`**, borrá la que permite **INSERT** al rol **anon/public**.
> La función sigue guardando igual porque usa una clave especial.

> Si algún día querés **apagar** el captcha y volver a como estaba, hay que
> volver a crear esa política de INSERT. (Está en `ui_kits/admin/INSTRUCCIONES.md`.)

---

## Paso 4 — Conectar la web con las claves

Abrí el archivo **`ui_kits/config.js`** y completá las dos líneas:

```js
  TURNSTILE_SITE_KEY: '0x...........',   // la Site Key del Paso 1
  CREAR_PEDIDO_URL: 'https://lajtqymtkerkfmwhiiju.supabase.co/functions/v1/crear-pedido',
```

Guardá, subí los cambios (git) y listo. ✅

---

## Cómo saber si quedó funcionando

- Entrá a la web, mandá una consulta de prueba → tiene que llegar al panel.
- Si ves el mensaje *“Estamos verificando que no seas un robot…”*, esperá
  un par de segundos y volvé a tocar **Enviar** (el captcha tarda un instante
  la primera vez).
- Si algo falla, **vaciá las dos claves** en `config.js` y la web vuelve al
  modo anterior (con límite de 24 h) sin romperse.

---

## Resumen de para qué sirve cada clave

| Clave | Dónde va | Pública/Secreta |
|---|---|---|
| **Site Key** (Cloudflare) | `config.js` (la web) | Pública (puede verse) |
| **Secret Key** (Cloudflare) | Secreto `TURNSTILE_SECRET` en Supabase | **Secreta** |
| **URL de la función** | `config.js` (la web) | Pública |
