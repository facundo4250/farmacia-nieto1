Styled dropdown for choosing one option — specialty, dosage form, branch.

```jsx
<Select label="Especialidad" placeholder="Elegí una opción"
  options={['Dermocosmética','Homeopatía','Fitoterapia','Florales']} />
```

Accepts `options` as strings or `{value,label}` objects, or raw `<option>` children. Same label/hint/error API as Input.
