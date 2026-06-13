import React from 'react';

/* Farmacia Nieto — Switch (toggle). */
const CSS = `
.fn-switch{ display: inline-flex; align-items: center; gap: 11px; font-family: var(--font-sans); cursor: pointer; color: var(--ink-600); font-size: var(--text-base); }
.fn-switch input{ position: absolute; opacity: 0; width: 0; height: 0; }
.fn-switch__track{
  flex: none; width: 44px; height: 25px; border-radius: var(--radius-pill);
  background: var(--line-300); position: relative;
  transition: background var(--dur-base) var(--ease-soft);
}
.fn-switch__track::after{
  content: ""; position: absolute; top: 3px; left: 3px; width: 19px; height: 19px;
  border-radius: 50%; background: var(--cream-50); box-shadow: var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-out);
}
.fn-switch input:checked + .fn-switch__track{ background: var(--brand-primary); }
.fn-switch input:checked + .fn-switch__track::after{ transform: translateX(19px); }
.fn-switch input:focus-visible + .fn-switch__track{ box-shadow: 0 0 0 3px var(--ring); }
.fn-switch--disabled{ cursor: not-allowed; opacity: .55; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-switch-css')) {
  const s = document.createElement('style'); s.id = 'fn-switch-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Switch({ label, checked, defaultChecked, disabled = false, className = '', children, ...rest }) {
  return (
    <label className={['fn-switch', disabled ? 'fn-switch--disabled' : '', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" checked={checked} defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span className="fn-switch__track"></span>
      {(label || children) && <span>{label || children}</span>}
    </label>
  );
}
