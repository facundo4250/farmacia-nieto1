# UI Kit — Portal del paciente (app móvil)

A mobile app where patients request magistral formulas and follow their preparation. Shown inside a phone shell.

## Files
- `index.html` — entry point. Loads `styles.css`, `_ds_bundle.js`, Lucide, then `app.jsx`, and renders `<PortalApp/>`.
- `app.jsx` — the full interactive flow, exported to `window` as `PortalApp`:
  - `Login` — emblem splash + phone entry
  - `Home` — greeting, "Pedí tu fórmula" CTA, order list with tabs (En preparación / Listos / Historial)
  - `NewRequest` — specialty select, receta upload (mock), detail, retiro/envío
  - `Confirm` — success screen with order id
  - `Tracking` — status timeline (Recibida → En preparación → Lista → Entregada)
  - `Phone` / `Screen` — lightweight device shell + scroll region

## Notes
- Full click-through: ingresar → ver pedidos → pedir nueva fórmula → confirmación → seguimiento. Submitting a new request prepends a live order to the list.
- Built from design-system primitives (`Card`, `Badge`, `Tag`, `Tabs`, `Input`, `Select`, `Textarea`, `Radio`, `Alert`, `Avatar`, `Divider`, `IconButton`, `Button`).
- Icons via Lucide CDN. All data is seeded/mock.
- Marked as a Starting Point (section "Portal del paciente").
