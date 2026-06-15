# Guardar las recetas en tu Google Drive (automático)

Con esto, **apenas entra un pedido con receta** (foto o PDF), el sistema sube
el archivo **solo a tu Google Drive** y en la base de Supabase queda **únicamente
el enlace**. Así no se llena el almacenamiento de la nube, y desde el panel de
gestión ves cada receta con un botón **“Ver receta (Drive)”**.

> Mientras NO completes estos pasos, todo sigue funcionando igual (la receta se
> guarda como hasta ahora). El guardado en Drive se activa recién cuando cargás
> las claves de Google en Supabase (Paso 4).

Es la parte más técnica. Son 5 pasos, ~20 minutos, todo gratis. Te guío.

---

## Paso 1 — Crear el proyecto y activar Drive

1. Entrá a **https://console.cloud.google.com/** (con tu cuenta de Gmail).
2. Arriba, en el selector de proyectos, **New Project** → nombre `Farmacia Nieto` → **Create**.
3. Asegurate de tener ese proyecto seleccionado arriba.
4. En el buscador de arriba escribí **“Google Drive API”** → entrá → **Enable / Habilitar**.

---

## Paso 2 — Pantalla de consentimiento (OAuth)

1. Menú ☰ → **APIs & Services** → **OAuth consent screen**.
2. **User type:** **External** → **Create**.
3. Completá lo mínimo:
   - **App name:** `Farmacia Nieto`
   - **User support email:** tu Gmail
   - **Developer contact:** tu Gmail
   - **Save and continue**.
4. **Scopes:** **Add or remove scopes** → en el buscador escribí `drive.file` →
   tildá **`.../auth/drive.file`** (dice “See, edit, create, and delete only the
   specific Google Drive files you use with this app”) → **Update** → **Save and continue**.
5. **Test users:** seguí (Save and continue) hasta el final.
6. **MUY IMPORTANTE:** volvé al resumen del OAuth consent screen y tocá
   **“Publish app” / “Publicar aplicación”** → confirmá (queda *In production*).
   > Esto hace que la conexión **no se venza** a los 7 días. Como el permiso
   > `drive.file` es “de bajo riesgo”, **no necesita verificación de Google** ni
   > muestra advertencias. Publicar es seguro.

---

## Paso 3 — Crear las credenciales (Client ID y Secret)

1. **APIs & Services** → **Credentials** → **Create credentials** → **OAuth client ID**.
2. **Application type:** **Web application**.
3. En **Authorized redirect URIs** → **Add URI** → pegá exactamente:
   ```
   https://developers.google.com/oauthplayground
   ```
4. **Create**. Te muestra **Client ID** y **Client secret**. Copiá los dos.

---

## Paso 4 — Conseguir el “refresh token” (con el OAuth Playground)

1. Entrá a **https://developers.google.com/oauthplayground**
2. Arriba a la derecha tocá el **engranaje ⚙** → tildá **“Use your own OAuth credentials”**
   → pegá tu **Client ID** y tu **Client secret** del Paso 3 → cerrá el engranaje.
3. A la izquierda, abajo de la lista, hay un casillero **“Input your own scopes”**.
   Pegá ahí:
   ```
   https://www.googleapis.com/auth/drive.file
   ```
   y tocá **Authorize APIs**.
4. Iniciá sesión con **tu cuenta de Gmail** (la misma de la carpeta) y aceptá los permisos.
5. Volvés al Playground. Tocá **“Exchange authorization code for tokens”**.
6. Te aparece un **Refresh token** (un texto largo que empieza con `1//`). **Copialo.**
   > Si no aparece el refresh token, volvé a tocar el engranaje, confirmá tus
   > credenciales, y repetí “Authorize APIs” eligiendo de nuevo tu cuenta.

---

## Paso 5 — Cargar todo en Supabase

### a) Agregar las columnas a la base
En Supabase → **SQL Editor** → pegá y **Run**:

```sql
alter table pedidos add column if not exists receta_drive_url text;
alter table pedidos add column if not exists receta_drive_id  text;
```

### b) Cargar los secretos
En **Edge Functions** → **Secrets** → agregá estos **cuatro** (Name → Value):

| Name | Value |
|---|---|
| `GOOGLE_CLIENT_ID` | el Client ID del Paso 3 |
| `GOOGLE_CLIENT_SECRET` | el Client secret del Paso 3 |
| `GOOGLE_REFRESH_TOKEN` | el refresh token del Paso 4 (empieza con `1//`) |
| `DRIVE_FOLDER_ID` | `1H0JO3RvGRK6RCjpB9ixCvL5mHCTJLs3m` |

> El `DRIVE_FOLDER_ID` es la parte final del link de tu carpeta de Drive
> (`.../folders/ESTO`). Ya lo dejé puesto arriba con el de la carpeta que pasaste.

### c) Volver a desplegar la función
La función `crear-pedido` tiene **código nuevo** (el que sube a Drive). Tenés que
actualizarla: abrí la función → **Code** (o el editor) → reemplazá todo por la
versión nueva (te la paso por el chat / está en
`supabase/functions/crear-pedido/index.ts`) → **Deploy**.

---

## Probar que funciona

1. Entrá a la web y mandá una consulta de prueba **con una foto o PDF de receta**.
2. Tiene que:
   - aparecer en el **panel** con el botón **“Ver receta (Drive)”**, y
   - aparecer el archivo **dentro de tu carpeta de Drive**.
3. Al tocar **“Ver receta (Drive)”** se abre el archivo en una pestaña nueva.

> Si la receta **no** sube a Drive, no se pierde: el sistema la guarda como antes
> (dentro de la base) para no perder el dato. Revisá los **Logs** de la función
> `crear-pedido` para ver el motivo y me lo pasás.

---

## Preguntas frecuentes

- **¿Las recetas viejas se mueven solas?** No. Esto aplica a los pedidos **nuevos**.
  Las que ya estaban guardadas siguen viéndose igual.
- **¿Y las que cargo a mano desde el panel?** Esas se siguen guardando en Supabase
  (no en Drive). Drive es para lo que manda la gente desde la web.
- **¿Es seguro?** El archivo queda en **tu** Drive (privado). En la base solo
  queda el enlace; para abrirlo hay que tener acceso a tu cuenta de Google.
