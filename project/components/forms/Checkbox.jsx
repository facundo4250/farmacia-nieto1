import React from 'react';

/* Farmacia Nieto — Checkbox with custom box + check. */
const CSS = `
.fn-check{ display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; color: var(--ink-600); font-size: var(--text-base); line-height: 1.45; }
.fn-check input{ position: absolute; opacity: 0; width: 0; height: 0; }
.fn-check__box{
  flex: none; width: 21px; height: 21px; margin-top: 1px;
  border: var(--border-thin) solid var(--green-300); border-radius: 6px;
  background: var(--cream-50);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft);
}
.fn-check__box svg{ width: 13px; height: 13px; color: var(--cream-50); opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out); }
.fn-check:hover .fn-check__box{ border-color: var(--green-500); }
.fn-check input:checked + .fn-check__box{ background: var(--brand-primary); border-color: var(--brand-primary); }
.fn-check input:checked + .fn-check__box svg{ opacity: 1; transform: scale(1); }
.fn-check input:focus-visible + .fn-check__box{ box-shadow: 0 0 0 3px var(--ring); }
.fn-check input:disabled + .fn-check__box{ opacity: .45; }
.fn-check--disabled{ cursor: not-allowed; opacity: .6; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-check-css')) {
  const s = document.createElement('style'); s.id = 'fn-check-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Checkbox({ label, checked, defaultChecked, disabled = false, className = '', children, ...rest }) {
  return (
    <label className={['fn-check', disabled ? 'fn-check--disabled' : '', className].filter(Boolean).join(' ')}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span className="fn-check__box">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5l3.2 3.2L13 5"/></svg>
      </span>
      {(label || children) && <span>{label || children}</span>}
    </label>
  );
}
