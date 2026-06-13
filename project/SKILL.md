---
name: farmacia-nieto-design
description: Use this skill to generate well-branded interfaces and assets for Farmacia Nieto (a compounding pharmacy — preparados magistrales — from Bahía Blanca, Argentina, since 1996), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, brand assets, reusable UI components, and full UI kits for prototyping.
user-invocable: true
---

# Farmacia Nieto — Design Skill

Read `readme.md` in this skill first — it is the full brand & design guide (sources, content voice, color, type, spacing, iconography, and a file index). Then explore the other files as needed.

## What's here
- `styles.css` + `tokens/` — the design tokens (colors, typography, spacing, base). Link `styles.css` to inherit every CSS custom property (`--brand-primary`, `--surface-sage`, `--font-serif`, …).
- `assets/` — the logo, the mortar emblem, a portrait of Patricia Nieto, and the brand flyer reference. Copy these into your output; do not redraw them.
- `components/` — reusable React primitives (Button, Card, Badge, Tag, Input, Select, Tabs, Alert, …). In a compiled consuming project they live on `window.FarmaciaNietoDesignSystem_3d24ed`; each has a `.prompt.md` with usage.
- `ui_kits/` — full interactive screens: `web/` (marketing site) and `portal/` (patient mobile app). Good starting points to clone and adapt.
- `slides/` — 1280×720 branded slide templates (Title, Specialties, Quote, Contact).
- `guidelines/` — small specimen cards for color, type, spacing and brand.

## How to work
- **Visual artifacts** (slides, mocks, social posts, throwaway prototypes): copy the assets you need out of `assets/`, link `styles.css` (or inline the token values), and produce static HTML the user can open. Reuse the patterns in `slides/` and `ui_kits/`.
- **Production code:** read the component `.prompt.md` files and the token CSS, then build with the real primitives and tokens.

## Brand in one breath
Compounding pharmacy, family-run since 1996. Warm, close, human Argentine-Spanish voice (voseo, *"Pedí tu fórmula"*, *"Cuidamos de ti de manera personalizada"*). Botanical apothecary palette: forest & sage greens, warm cream paper, honey-gold floral accent, wood. Script + elegant serif + rounded sans. Soft radii, low warm-tinted shadows, calm motion, Lucide line icons. No emoji, no clinical coldness, no urgency.

> ⚠️ Fonts (Sacramento / Cormorant Garamond / Quicksand) are Google-Fonts substitutions for the originals — see `readme.md`.

If the user invokes this skill without specifics, ask what they want to build or design, ask a few focused questions, then act as an expert Farmacia Nieto designer — outputting HTML artifacts or production code as the task needs.
