# UI Kit — Sitio web (marketing)

One-page marketing site for Farmacia Nieto. A warm, botanical, trust-building landing that mirrors the brand flyer's voice.

## Files
- `index.html` — entry point. Loads `styles.css`, the compiled `_ds_bundle.js`, Lucide (CDN icons), then `sections.jsx`, and renders `<NietoSite/>`.
- `sections.jsx` — all sections + the app, exported to `window`:
  - `Header` — sticky nav + emblem wordmark + "Pedí tu fórmula" CTA
  - `Hero` — eyebrow, serif headline, stats, logo lockup
  - `Specialties` — the eight specialty cards
  - `About` — Patricia Nieto, on a sage block
  - `Process` — three-step "tu fórmula" timeline
  - `Contact` — contact channels + working request form (submits to a success Alert)
  - `Footer` — emblem, contact, social
  - `NietoSite` — composes everything with smooth-scroll nav

## Notes
- Built entirely from design-system primitives (`Button`, `Card`, `Tag`, `Input`, `Select`, `Textarea`, `Alert`, `Avatar`, `Divider`, `IconButton`).
- Icons via Lucide CDN through the local `Icon` helper.
- The contact form is a front-end mock — submitting just shows the thank-you state.
- Marked as a Starting Point (section "Sitio web").
