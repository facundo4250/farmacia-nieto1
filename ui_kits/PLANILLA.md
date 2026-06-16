# Botón "Actualizar Google Sheets" — volcar pedidos a tu planilla

Con esto, en el panel aparece un botón **“Actualizar Google Sheets”** que escribe
**todos los pedidos** en tu planilla de Google (la reemplaza, deja la copia al día).

Reutiliza la misma conexión con Google que armamos para Drive; solo hay que
**agregarle el permiso de Sheets** y **renovar el token**. Son ~8 minutos.

> La planilla ya está fijada en `config.js` (`GOOGLE_SHEET_ID`). Es esta:
> `1QMwvA0_kKBMBCgFF9osShOspH3d6DW50635pge2o5YU`

---

## Paso 1 — Agregar el permiso de Sheets

1. Entrá a **https://console.cloud.google.com/** → proyecto **Farmacia Nieto**.
2. Menú ☰ → **APIs y servicios** → **Biblioteca** → buscá **“Google Sheets API”** → **Habilitar**.
3. Volvé a **Google Auth Platform** → **Acceso a los datos** (*Data Access*) →
   **Agregar o quitar permisos** → abajo, en **“Agregar permisos manualmente”**,
   pegá:
   ```
   https://www.googleapis.com/auth/spreadsheets
   ```
   → **Agregar a la tabla** → **Actualizar** → **Guardar**.

> Este permiso es “sensible”. Como la app es tuya y de uso interno, al renovar el
> token (Paso 2) te va a aparecer un aviso *“Google no verificó esta app”*: tocás
> **Configuración avanzada → Ir a Farmacia Nieto (no seguro)**. Es normal y seguro.

---

## Paso 2 — Renovar el token (incluyendo Drive + Sheets)

Igual que la vez pasada, pero con **los dos permisos** juntos.

1. Entrá a **https://developers.google.com/oauthplayground**
2. Engranaje ⚙ → **“Use your own OAuth credentials”** → pegá tu **Client ID** y
   **Client secret** (los mismos de antes).
3. Izquierda → casillero **“Input your own scopes”** → pegá **los dos**, separados
   por un espacio:
   ```
   https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets
   ```
4. **Authorize APIs** → elegí tu Gmail → (si aparece el aviso, *Avanzado → continuar*) → **Permitir**.
5. **Step 2** → **“Exchange authorization code for tokens”** → copiá el nuevo
   **Refresh token** (`1//...`).

---

## Paso 3 — Actualizar el secreto en Supabase

1. Supabase → **Edge Functions** → **Secrets**.
2. Editá **`GOOGLE_REFRESH_TOKEN`** y pegá el **token nuevo** del Paso 2.
   (Reemplaza al anterior. Sigue sirviendo para Drive porque incluye los dos permisos.)

---

## Paso 4 — Crear la función `exportar-planilla`

1. Supabase → **Edge Functions** → **Deploy a new function** → **Via editor**.
2. Nombre exacto: **`exportar-planilla`**.
3. **Verify JWT: OFF** (igual que `crear-pedido`).
4. Pegá el contenido de `supabase/functions/exportar-planilla/index.ts`
   (te lo paso por el chat) → **Deploy**.

---

## Listo: cómo se usa

En el panel, arriba del **Resumen por día**, tocás **“Actualizar Google Sheets”**.
A los pocos segundos aparece *“✓ Planilla actualizada (N pedidos)”* y tu planilla
queda con todos los pedidos, en columnas, con los encabezados en español.

> Cada vez que lo toques, **reemplaza** el contenido de la primera hoja con los
> datos más recientes. Si querés guardar una foto de un momento, hacé una copia
> de la planilla (Archivo → Hacer una copia) antes de actualizar.

### Si algo falla
- *“necesitás iniciar sesión en el panel”* → entrá con tu usuario antes de exportar.
- *“no se pudo abrir la planilla”* → revisá que el `GOOGLE_SHEET_ID` sea el correcto
  y que la planilla sea de la misma cuenta de Google del token.
- *“no se pudo conectar con Google”* → el token no quedó bien; rehacé el Paso 2 y 3.
