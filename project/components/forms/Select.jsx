import React from 'react';

/* Farmacia Nieto — Select. Native select styled to match the field shell. */
const FIELD_CSS = `
.fn-field{ display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.fn-field__label{ font-size: var(--text-sm); font-weight: 600; color: var(--green-900); }
.fn-field__req{ color: var(--gold-700); margin-left: 2px; }
.fn-input{
  width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--ink-700); background: var(--cream-50);
  border: var(--border-thin) solid var(--line-300); border-radius: var(--radius-md);
  padding: 0.7rem 0.95rem;
  transition: border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-base);
}
.fn-input:hover{ border-color: var(--green-300); }
.fn-input:focus{ outline: none; border-color: var(--green-500); box-shadow: 0 0 0 3px var(--ring); background: var(--white); }
.fn-field--error .fn-input{ border-color: var(--danger); }
.fn-field__hint{ font-size: var(--text-xs); color: var(--ink-400); }
.fn-field--error .fn-field__hint{ color: var(--danger); font-weight: 500; }
`;
const SEL_CSS = `
.fn-select-wrap{ position: relative; }
.fn-select{ appearance: none; -webkit-appearance: none; padding-right: 2.6rem; cursor: pointer; }
.fn-select-wrap::after{
  content: ""; position: absolute; right: 16px; top: 50%; width: 9px; height: 9px;
  border-right: 2px solid var(--green-600); border-bottom: 2px solid var(--green-600);
  transform: translateY(-65%) rotate(45deg); pointer-events: none; border-radius: 1px;
}
`;
if (typeof document !== 'undefined') {
  if (!document.getElementById('fn-field-css')) { const s = document.createElement('style'); s.id = 'fn-field-css'; s.textContent = FIELD_CSS; document.head.appendChild(s); }
  if (!document.getElementById('fn-select-css')) { const s = document.createElement('style'); s.id = 'fn-select-css'; s.textContent = SEL_CSS; document.head.appendChild(s); }
}

export function Select({ label, hint, error, required = false, placeholder, options = [], id, className = '', children, ...rest }) {
  const fid = id || (label ? 'fn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const msg = error || hint;
  return (
    <div className={['fn-field', error ? 'fn-field--error' : '', className].filter(Boolean).join(' ')}>
      {label && <label className="fn-field__label" htmlFor={fid}>{label}{required && <span className="fn-field__req">*</span>}</label>}
      <div className="fn-select-wrap">
        <select id={fid} className="fn-input fn-select" {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
          {children}
        </select>
      </div>
      {msg && <span className="fn-field__hint">{msg}</span>}
    </div>
  );
}
