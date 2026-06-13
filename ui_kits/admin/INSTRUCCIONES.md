# Farmacia Nieto — Panel de pedidos: guía de instalación

Esta guía te lleva de cero a tener:

- La **página web** con el formulario "Pedí tu fórmula" enviando pedidos reales.
- El **panel de pedidos** (`ui_kits/admin/index.html`) en tu PC con Windows 11, donde ves los pedidos que llegan de la web, les cambiás el estado (Nuevo → En preparación → Listo → Entregado) y también **cargás pedidos a mano**.
- En cada pedido podés agregar el **monto del preparado**, una **fecha aproximada de entrega** (opcional) y una **foto de la receta** (subir un archivo o sacar la foto con la cámara). El panel muestra el **total** de los pedidos que estás viendo.
- Como todo se guarda en la nube, el panel se puede abrir en **varias computadoras de la farmacia a la vez** y todas ven los mismos pedidos (se actualiza solo cada 30 segundos, o con el botón "Actualizar").

No hace falta instalar ningún programa: el panel se abre con el navegador (Edge o Chrome) que ya viene con Windows 11. Podés crear un acceso directo en el escritorio para abrirlo como si fuera un programa más.

---

## Probar ya mismo (sin configurar nada)

1. Abrí la carpeta del proyecto en tu PC.
2. Hacé doble clic en `ui_kits/admin/index.html` → se abre el panel en **modo de prueba**.
3. Tocá el botón dorado **"Cargar pedido"** y probá crear, buscar y cambiar estados.

En modo de prueba los pedidos se guardan **solo en esa computadora** (y el formulario de la web solo "llega" al panel si abrís ambos en la misma PC). Para que funcione de verdad por internet, seguí los pasos de abajo.

---

## Conectar la nube (gratis) — unos 15 minutos, se hace una sola vez

Usamos **Supabase**, un servicio con plan gratuito más que suficiente para una farmacia.

### Paso 1 — Crear la cuenta y el proyecto

1. Entrá a <https://supabase.com> y creá una cuenta gratuita (podés usar tu Gmail).
2. Tocá **"New project"**:
   - **Name**: `farmacia-nieto`
   - **Database password**: inventá una contraseña y **guardala** (no la vas a necesitar a diario, pero no la pierdas).
   - **Region**: elegí `South America (São Paulo)` (la más cercana a Bahía Blanca).
3. Esperá 1–2 minutos a que el proyecto se cree.

### Paso 2 — Crear la tabla de pedidos

1. En el menú de la izquierda, entrá a **SQL Editor**.
2. Pegá TODO este bloque y tocá **Run**:

```sql
create table pedidos (
  id uuid primary key default gen_random_uuid(),
  creado timestamptz not null default now(),
  nombre text not null,
  telefono text not null,
  especialidad text,
  detalle text,
  estado text not null default 'nuevo',
  origen text not null default 'web',
  precio numeric,          -- monto del preparado (lo carga la empleada)
  entrega date,            -- fecha aproximada de entrega (opcional)
  receta_img text,         -- foto de la receta (ruta en el Storage)
  nro_retiro bigint,       -- número de retiro (lo asigna la empleada al señar)
  sena numeric,            -- monto de la seña
  pago_metodo text         -- forma de pago de la seña (Efectivo / Transferencia)
);

alter table pedidos enable row level security;

-- Cualquiera puede ENVIAR un pedido desde la web (pero no leer los de otros)
create policy "la web puede crear pedidos"
  on pedidos for insert to anon
  with check (origen = 'web' and estado = 'nuevo');

-- Solo el personal con usuario y contraseña puede ver y gestionar
create policy "el personal puede leer"
  on pedidos for select to authenticated using (true);
create policy "el personal puede editar"
  on pedidos for update to authenticated using (true) with check (true);
create policy "el personal puede cargar a mano"
  on pedidos for insert to authenticated with check (true);
create policy "el personal puede borrar"
  on pedidos for delete to authenticated using (true);
```

Si dice **Success**, listo.

> **¿Ya habías creado la tabla antes (sin precio/entrega/foto)?** No la borres. Pegá y ejecutá solo esto para agregarle las columnas nuevas:
>
> ```sql
> alter table pedidos add column if not exists precio numeric;
> alter table pedidos add column if not exists entrega date;
> alter table pedidos add column if not exists receta_img text;
> alter table pedidos add column if not exists nro_retiro bigint;
> alter table pedidos add column if not exists sena numeric;
> alter table pedidos add column if not exists pago_metodo text;
> ```

### Paso 2b — Carpeta segura para las fotos de las recetas

Las fotos de las recetas se guardan en un espacio aparte (el "Storage" de Supabase), **privado**: solo se ven con una sesión iniciada y mediante un enlace temporal, nunca quedan públicas en internet (son datos sensibles).

En el **SQL Editor**, pegá este bloque y tocá **Run**:

```sql
-- Carpeta privada para las recetas
insert into storage.buckets (id, name, public)
values ('recetas', 'recetas', false)
on conflict (id) do nothing;

-- Solo el personal con sesión puede subir y ver las recetas
create policy "personal sube recetas"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'recetas');
create policy "personal ve recetas"
  on storage.objects for select to authenticated
  using (bucket_id = 'recetas');
```

### Paso 3 — Crear tu usuario para entrar al panel

1. En el menú de la izquierda: **Authentication → Users → Add user → Create new user**.
2. Poné tu email y una contraseña (estos son los datos con los que vas a entrar al panel todos los días).
3. Marcá la opción **"Auto Confirm User"** si aparece, y creá el usuario.

Podés crear un usuario por cada persona del equipo que gestione pedidos.

### Paso 4 — Copiar las dos claves al proyecto

1. En Supabase: **Project Settings (engranaje) → API**.
2. Copiá:
   - **Project URL** (algo como `https://abcdefgh.supabase.co`)
   - **anon public** key (un texto largo)
3. Abrí el archivo `ui_kits/config.js` con el Bloc de notas y reemplazá los valores de ejemplo:

```js
window.FN_CONFIG = {
  SUPABASE_URL: 'https://abcdefgh.supabase.co',   // ← tu Project URL
  SUPABASE_ANON_KEY: 'eyJhbGciOi…',               // ← tu clave anon public
};
```

4. Guardá el archivo. **Listo** — la web y el panel ya quedan conectados.

> La clave "anon public" está pensada para ir en páginas web públicas; los permisos de verdad los controlan las reglas del Paso 2. Nunca pongas en estos archivos la clave "service_role".

### Paso 5 — Probar que funciona

1. Abrí `ui_kits/web/index.html`, completá el formulario "Pedí tu fórmula" y envialo.
2. Abrí `ui_kits/admin/index.html` → te va a pedir el email y contraseña del Paso 3.
3. El pedido que mandaste tiene que aparecer arriba de todo, en estado **Nuevo**. 🎉

---

## Acceso directo en el escritorio (para que se sienta como un programa)

1. Abrí el panel en **Microsoft Edge**.
2. Menú `…` (arriba a la derecha) → **Aplicaciones → Instalar este sitio como una aplicación**.
3. Ponele "Pedidos Farmacia Nieto" → te crea un ícono en el escritorio y se abre en su propia ventana, sin barra del navegador.

(En Chrome es igual: menú `⋮` → "Transmitir, guardar y compartir" → "Instalar página como aplicación".)

---

## Publicar la página web (para que los clientes la usen)

Para que los pacientes manden pedidos desde sus casas, la página tiene que estar en internet. La opción más simple y gratis:

1. Creá una cuenta en <https://www.netlify.com> (gratis).
2. Arrastrá la carpeta del proyecto completa a Netlify ("Deploy manually").
3. Te da un link tipo `farmacia-nieto.netlify.app` — ese es el que compartís por WhatsApp o Instagram.

El **panel** lo podés seguir abriendo desde el archivo en tu PC, o también desde el mismo hosting (queda en `/ui_kits/admin/`) — como pide usuario y contraseña, nadie más puede entrar.

---

## Preguntas frecuentes

**¿Cuánto cuesta?** Nada. El plan gratuito de Supabase y de Netlify alcanza de sobra para el volumen de una farmacia.

**¿Los ve alguien más?** No. Los pedidos solo los ve quien tenga un usuario creado en el Paso 3.

**¿Funciona en el celular?** Sí, el panel se puede abrir desde el navegador del celular con el mismo link y la misma cuenta.

**¿Y si quiero recibir un aviso por cada pedido nuevo?** Se puede agregar (email o WhatsApp automático por cada pedido). Pedíselo al programador o a Claude como siguiente paso.
