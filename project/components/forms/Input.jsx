import React from 'react';

/* Farmacia Nieto — Input (text field) with optional label, hint, error, icon. */
const CSS = `
.fn-field{ display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.fn-field__label{ font-size: var(--text-sm); font-weight: 600; color: var(--green-900); }
.fn-field__req{ color: var(--gold-700); margin-left: 2px; }
.fn-field__wrap{ position: relative; display: flex; align-items: center; }
.fn-field__icon{ position: absolute; left: 14px; display: flex; color: var(--ink-400); pointer-events: none; }
.fn-field__icon svg{ width: 18px; height: 18px; }
.fn-input{
  width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--ink-700); background: var(--cream-50);
  border: var(--border-thin) solid var(--line-300);
  border-radius: var(--radius-md);
  padding: 0.7rem 0.95rem;
  transition: border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-base);
}
.fn-input::placeholder{ color: var(--ink-300); }
.fn-input:hover{ border-color: var(--green-300); }
.fn-input:focus{ outline: none; border-color: var(--green-500); box-shadow: 0 0 0 3px var(--ring); background: var(--white); }
.fn-input--has-icon{ padding-left: 2.6rem; }
.fn-input:disabled{ opacity: .55; cursor: not-allowed; background: var(--cream-200); }
.fn-field--error .fn-input{ border-color: var(--danger); }
.fn-field--error .fn-input:focus{ box-shadow: 0 0 0 3px color-mix(in oklab, var(--danger) 30%, transparent); }
.fn-field__hint{ font-size: var(--text-xs); color: var(--ink-400); }
.fn-field--error .fn-field__hint{ color: var(--danger); font-weight: 500; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-field-css')) {
  const s = document.createElement('style'); s.id = 'fn-field-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Input({
  label,
  hint,
  error,
  required = false,
  icon,
  id,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'fn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const msg = error || hint;
  return (
    <div className={['fn-field', error ? 'fn-field--error' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="fn-field__label" htmlFor={fid}>
          {label}{required && <span className="fn-field__req">*</span>}
        </label>
      )}
      <div className="fn-field__wrap">
        {icon && <span className="fn-field__icon">{icon}</span>}
        <input id={fid} className={['fn-input', icon ? 'fn-input--has-icon' : ''].filter(Boolean).join(' ')} {...rest} />
      </div>
      {msg && <span className="fn-field__hint">{msg}</span>}
    </div>
  );
}
