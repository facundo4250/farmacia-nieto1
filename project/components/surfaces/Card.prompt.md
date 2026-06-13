The base surface for any content block — service cards, product tiles, order summaries.

```jsx
<Card title="Dermocosmética" interactive>
  <p>Cremas y serums formulados para tu piel.</p>
</Card>

<Card variant="sage" media={<img src="lab.jpg" alt=""/>} footer={<Button size="sm">Ver más</Button>}>
  Preparados a medida.
</Card>
```

Variants: `default` (paper), `mint`, `sage`, `forest`, `cream`. Use `interactive` for clickable tiles, `media` for a flush-top image, `footer` for actions.
