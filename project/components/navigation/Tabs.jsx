import React from 'react';

/* Farmacia Nieto — Tabs: underline-style segmented navigation. */
const CSS = `
.fn-tabs{ display: inline-flex; gap: 4px; border-bottom: var(--border-thin) solid var(--line-200); font-family: var(--font-sans); }
.fn-tab{
  position: relative; appearance: none; border: none; background: none; cursor: pointer;
  font-family: var(--font-sans); font-weight: 600; font-size: var(--text-sm);
  color: var(--ink-400); padding: 10px 16px 13px; border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  transition: color var(--dur-fast) var(--ease-soft), background var(--dur-fast);
}
.fn-tab:hover{ color: var(--green-800); background: var(--green-50); }
.fn-tab__count{ margin-left: 7px; font-size: 11px; background: var(--green-100); color: var(--green-800); padding: 1px 7px; border-radius: var(--radius-pill); }
.fn-tab--active{ color: var(--green-900); }
.fn-tab--active::after{
  content: ""; position: absolute; left: 12px; right: 12px; bottom: -1.5px; height: 3px;
  background: var(--green-700); border-radius: 3px 3px 0 0;
}
.fn-tab--active .fn-tab__count{ background: var(--gold-300); color: var(--wood-700); }
.fn-tabs--pill{ border: none; background: var(--green-100); padding: 4px; border-radius: var(--radius-pill); gap: 2px; }
.fn-tabs--pill .fn-tab{ border-radius: var(--radius-pill); padding: 8px 18px; }
.fn-tabs--pill .fn-tab:hover{ background: transparent; color: var(--green-800); }
.fn-tabs--pill .fn-tab--active{ background: var(--cream-50); color: var(--green-900); box-shadow: var(--shadow-xs); }
.fn-tabs--pill .fn-tab--active::after{ display: none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-tabs-css')) {
  const s = document.createElement('style'); s.id = 'fn-tabs-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tabs({ tabs = [], value, defaultValue, onChange, variant = 'underline', className = '', ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].id ?? tabs[0])));
  const active = isControlled ? value : internal;

  const select = (id) => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };

  return (
    <div className={['fn-tabs', variant === 'pill' ? 'fn-tabs--pill' : '', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {tabs.map((t) => {
        const id = t.id ?? t;
        const label = t.label ?? t;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            className={['fn-tab', active === id ? 'fn-tab--active' : ''].filter(Boolean).join(' ')}
            onClick={() => select(id)}
          >
            {label}
            {t.count != null && <span className="fn-tab__count">{t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
