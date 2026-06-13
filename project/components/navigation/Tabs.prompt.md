Tab navigation for switching views — order states, account sections.

```jsx
<Tabs tabs={[
  {id:'activos', label:'En preparación', count:2},
  {id:'listos', label:'Listos', count:1},
  {id:'historial', label:'Historial'},
]} defaultValue="activos" onChange={setView} />

<Tabs variant="pill" tabs={['Mensual','Anual']} />
```

`underline` (default) or `pill`. Items can be strings or `{id,label,count}`.
