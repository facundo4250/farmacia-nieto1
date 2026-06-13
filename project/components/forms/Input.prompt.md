Labelled text field used throughout forms (contact, formula request, login).

```jsx
<Input label="Nombre y apellido" placeholder="Patricia Nieto" required />
<Input label="Email" type="email" icon={<MailIcon/>} hint="Te escribimos por aquí" />
<Input label="Teléfono" error="Ingresá un número válido" />
```

Pass `icon` for a leading glyph, `hint` for help text, `error` to show the red invalid state. Pairs with Textarea and Select, which share the same field shell.
