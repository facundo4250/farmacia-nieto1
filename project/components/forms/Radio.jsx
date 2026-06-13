import React from 'react';

/* Farmacia Nieto — Radio with custom dot. */
const CSS = `
.fn-radio{ display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; color: var(--ink-600); font-size: var(--text-base); line-height: 1.45; }
.fn-radio input{ position: absolute; opacity: 0; width: 0; height: 0; }
.fn-radio__dot{
  flex: none; width: 21px; height: 21px; margin-top: 1px; border-radius: var(--radius-pill);
  border: var(--border-thin) solid var(--green-300); background: var(--cream-50);
  display: inline-flex; align-items: center; justify-content: center;
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.fn-radio__dot::after{ content: ""; width: 10px; height: 10px; border-radius: 50%; background: var(--brand-primary); transform: scale(0); transition: transform var(--dur-fast) var(--ease-out); }
.fn-radio:hover .fn-radio__dot{ border-color: var(--green-500); }
.fn-radio input:checked + .fn-radio__dot{ border-color: var(--brand-primary); }
.fn-radio input:checked + .fn-radio__dot::after{ transform: scale(1); }
.fn-radio input:focus-visible + .fn-radio__dot{ box-shadow: 0 0 0 3px var(--ring); }
.fn-radio--disabled{ cursor: not-allowed; opacity: .6; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-radio-css')) {
  const s = document.createElement('style'); s.id = 'fn-radio-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Radio({ label, name, value, checked, defaultChecked, disabled = false, className = '', children, ...rest }) {
  return (
    <label className={['fn-radio', disabled ? 'fn-radio--disabled' : '', className].filter(Boolean).join(' ')}>
      <input type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span className="fn-radio__dot"></span>
      {(label || children) && <span>{label || children}</span>}
    </label>
  );
}
