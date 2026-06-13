Pill-shaped action button — use for any primary or secondary call to action across Nieto surfaces.

```jsx
<Button variant="primary" size="md" onClick={pedir}>Pedí tu fórmula</Button>
<Button variant="accent" iconLeft={<PlusIcon/>}>Agendar consulta</Button>
<Button variant="outline">Ver más</Button>
```

Variants: `primary` (forest green, default CTA), `secondary` (sage), `accent` (honey-gold, for warm highlights), `outline` (green border on paper), `ghost` (text-only). Sizes: `sm` / `md` / `lg`. Set `fullWidth` inside forms/cards. Pass `href` to render an `<a>`. Slots `iconLeft` / `iconRight` accept any icon node (Lucide recommended).
