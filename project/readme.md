# Farmacia Nieto — Design System

Brand & UI design system for **Farmacia Nieto**, a compounding pharmacy (*farmacia de preparados magistrales*) in Bahía Blanca, Argentina, family-run **since 1996** under the technical direction of pharmacist **Patricia Victoria Nieto**.

> *Elaboración magistral: tu camino hacia el bienestar.*
> *Cuidamos de ti de manera personalizada.*

Farmacia Nieto hand-makes personalized formulations across eight areas: **Medicina Ortomolecular, Dermocosmética, Homeopatía, Alopatía, Fitoterapia, Florales, Probióticos, Hormonas Bioidénticas.** The brand voice is warm, close, and human — a neighbourhood botica that treats each patient individually.

---

## Sources

This system was built from the brand materials the owner provided (no codebase or Figma was attached):

- **Logo** — `assets/logo-nieto.png` (the green mortar & pestle with a yellow flower, leaves and sparkles over the cream wordmark). Original upload: `uploads/pasted-1781303552846-0.png`.
- **Brand flyer** — `assets/brand-flyer-reference.png`, an "Acerca de nosotros / Elaboración Magistral" sage-green poster. Original upload: `uploads/pasted-1781303542181-0.png`. Source of the voice, the specialty list, contact details and the decorative line-art motif vocabulary.
- Derived assets: `assets/emblem-nieto.png` (mark without wordmark) and `assets/patricia-nieto.png` (portrait, cropped from the flyer).

Contact on file: WhatsApp **(+54) 291 432-7031** · **farmacia_nieto@hotmail.com** · Instagram **@farmacia.nieto**.

> ⚠️ **Fonts are substitutions.** The original logo/flyer fonts were not supplied as files, so the system uses the nearest Google Fonts: **Sacramento** (the "farmacia" script), **Cormorant Garamond** (elegant serif display), **Quicksand** (rounded UI/body). If you have the real brand fonts, send them and we'll swap them in — see *Visual Foundations → Type*.

---

## Content fundamentals

How Farmacia Nieto writes.

- **Language:** Argentine Spanish, **voseo / tú-cercano** — *"Pedí tu fórmula", "Contanos qué necesitás", "Cuidamos de ti"*. Always informal and personal, never *usted*-distant or corporate.
- **Tone:** warm, caring, reassuring, artisanal. The pharmacy is a person, not an institution. Emphasis on *personalized*, *hecho a mano*, *a tu medida*, *bienestar*.
- **Person:** speaks as **"nosotros"** (the family/team) to **"vos / ti"** (the patient). *"Trabajamos para ofrecerte… siempre pensando en cuidar tu salud."*
- **Casing:** Sentence case for body and most headings. Reserve ALL-CAPS for the tracked "NIETO" wordmark and small eyebrow labels. No SHOUTING.
- **Punctuation:** calm. Occasional warm exclamation (*"¡Cuidamos de ti de manera personalizada!"*) but never urgency or sales pressure.
- **Emoji:** **not used.** Warmth comes from words and the botanical imagery, not emoji.
- **Vocabulary to favour:** bienestar, fórmula, a medida, personalizado, artesanal, calidad, atención, equipo, salud, cuidado, asesoramiento.
- **Avoid:** clinical jargon, exaggerated promises, "adquiera nuestros productos", growth-hacky urgency, discount-blast tone.

**Examples**
- CTA: *"Pedí tu fórmula"* · *"Consultanos por tu fórmula"* · *"Agendá tu consulta"*
- Reassurance: *"Te avisamos por WhatsApp cuando esté lista."*
- About: *"Bajo la dirección técnica de Patricia Victoria Nieto… siempre pensando en cuidar tu salud y bienestar."*

---

## Visual foundations

### Color
A botanical, apothecary palette sampled directly from the logo and flyer. Defined in `tokens/colors.css`.

- **Greens (core):** forest `#1E4D2B` (the wordmark, primary actions), pine `#225B30`, mortar `#4E7A45`, **sage `#6F8F6C`** (the flyer background / feature blocks), soft sage `#8AA985`, mint-sage `#9BC3AE` (the "NIETO" tint), pale tints down to `#EFF5EC`.
- **Mint (cool surface):** `#E1F2F1` — the logo lockup box; used for calm panels.
- **Cream / paper (warm neutral):** `#F8ECD4` (signature paper), page `#FBF5E9`, card `#FEFCF6`. Cream is the default canvas, not white.
- **Gold / honey (accent):** the flower — petal `#F2C94C`, honey `#DDB438`, amber `#B8881F`. Used sparingly for warmth, highlights, step numbers, "Nuevo".
- **Wood:** pestle `#A06A3C`, dark `#6F551A`. Earthy support tone.
- **Neutrals:** warm green-tinted inks (`#20291F` → `#7D8A79`) and sage hairlines (`#D3DCCB`). No pure cold grey, no pure black.
- **Status:** success = the mortar green; warning = honey; danger = a warm terracotta `#B4503E` (harmonizes with wood — not a clinical red); info = a muted mint-teal `#4A7D86`.

Semantic aliases (`--brand-primary`, `--surface-sage`, `--text-body`, …) sit on top of the base scale — always reach for those in components.

### Type
Three families, defined in `tokens/typography.css` (loaded from Google Fonts).

- **`--font-script` · Sacramento** — the *"farmacia"* flourish. **Accent only**, large, never for body or buttons.
- **`--font-serif` · Cormorant Garamond** — elegant, high-contrast display serif for headlines and quotes. The "NIETO" treatment is this serif in uppercase with `--tracking-wider`.
- **`--font-sans` · Quicksand** — warm, geometric-rounded sans for all body text, labels, and UI. Matches the flyer's rounded body type.

Scale runs `--text-2xs` (11px) → `--text-5xl` (88px). Headlines balance (`text-wrap: balance`); body is pretty-wrapped at `--leading-relaxed` (1.7).

### Spacing, radius, elevation — `tokens/spacing.css`
- **Spacing:** 4px base (`--space-1` … `--space-16`). Generous, calm rhythm.
- **Radius:** soft and apothecary — cards `--radius-lg` (18px), feature panels/logo boxes `--radius-xl` (26px)+, pills for buttons/badges/tags. Nothing sharp.
- **Shadows:** low, soft, **warm green-tinted** (`rgba(30,77,43,…)`), never hard or grey. A dedicated `--shadow-gold` glow for accent moments.
- **Borders:** 1–1.5px sage hairlines (`--line-300`), not heavy.

### Backgrounds, texture & imagery
- Backgrounds are **flat warm fields** — cream paper, sage blocks, deep-forest sections, mint panels. One soft radial wash is used on the hero; otherwise no busy gradients.
- **No purple/blue tech gradients, no glassmorphism-for-its-own-sake.** Calm, organic, paper-like.
- Imagery is **warm and botanical** (the mortar emblem, leaves, the honey flower, the lab/portrait). The flyer's scattered **thin line-art** motifs (mortar, flask, jar, sprig, caduceus, DNA, test tube, molecule) are reproduced with Lucide outline icons at low opacity for decoration.
- The logo always sits in a **mint or cream rounded box** with breathing room (see `guidelines/brand-logo.html`).

### Motion & states
- **Easing:** calm settle — `--ease-out` `cubic-bezier(0.22,1,0.36,1)`. Durations 140/220/380ms.
- **Hover:** surfaces lift gently (`translateY(-3px)` + a softer-to-stronger shadow); buttons darken one step and deepen their shadow; ghost/soft fills wash to a pale sage.
- **Press:** subtle `scale` down (`0.985`–`0.92`) — a tactile squeeze, not a bounce.
- **Focus:** a 3px sage ring (`--ring`). Never removed.
- No infinite/looping decorative animation. Fades and soft lifts only.

### Cards
Paper card on a sage hairline with a low warm shadow and an 18px radius; hover lifts. Colour variants: `default` (paper), `mint`, `sage`, `forest`, `cream`. See the **Surfaces** component card.

---

## Iconography

- **UI icons:** **[Lucide](https://lucide.dev)** (outline, ~1.7–1.8px stroke, rounded caps), loaded from CDN. It matches the flyer's thin, friendly line-art register closely. Used via a small local `Icon`/`NietoIcon` helper in each UI kit, and via `data-lucide` + `lucide.createIcons()` in the slide templates.
  - **This is a substitution** — the flyer's decorative glyphs were bespoke line drawings, not a named icon font. Lucide is the closest open set; flag if you need the exact originals.
- **Brand glyphs:** the **mortar emblem** (`assets/emblem-nieto.png`) is the hero mark — use it for avatars, favicons, stamps, decorative corners. Botanical accents (leaf, flower, sparkles) echo the logo.
- **Emoji / unicode icons:** **not used.**
- Recommended Lucide names in use: `flask-conical`, `flask-round`, `leaf`, `flower-2`, `droplet`, `pill`, `sparkles`, `microscope`, `activity`, `heart`, `heart-handshake`, `phone`, `mail`, `instagram`, `message-circle`, `clock`, `package-check`, `file-text`, `map-pin`, `upload`, `check`, `bell`.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.
- `assets/` — `logo-nieto.png`, `emblem-nieto.png`, `patricia-nieto.png`, `brand-flyer-reference.png`.

**Components** (`window.FarmaciaNietoDesignSystem_3d24ed.*`)
- `components/forms/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch
- `components/feedback/` — Badge, Tag, Alert, Tooltip
- `components/surfaces/` — Card, Avatar, Divider
- `components/navigation/` — Tabs

Each directory ships `<Name>.jsx` + `.d.ts` + `.prompt.md`, and a `@dsCard` demo HTML.

**Foundation cards** (`guidelines/`) — Colors (4), Type (4), Spacing (3), Brand (4): greens, surfaces, accent, neutrals; script, display, body, scale; spacing, radius, shadow; logo, emblem, voice, specialties.

**UI kits**
- `ui_kits/web/` — marketing site (Home one-pager). Starting point.
- `ui_kits/portal/` — patient mobile app (request + tracking). Starting point.

**Slides** (`slides/`) — Title, Specialties, Quote, Contact (1280×720 brand templates).

---

### Using the system
Consumers link `styles.css` and load the compiled `_ds_bundle.js`, then read components from `window.FarmaciaNietoDesignSystem_3d24ed`. The bundle, manifest and adherence config are **generated automatically** — don't edit them by hand.
