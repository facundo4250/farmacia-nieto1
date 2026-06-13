import React from 'react';

/* Farmacia Nieto — Textarea. Reuses the .fn-field / .fn-input shell. */
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
.fn-input::placeholder{ color: var(--ink-300); }
.fn-input:hover{ border-color: var(--green-300); }
.fn-input:focus{ outline: none; border-color: var(--green-500); box-shadow: 0 0 0 3px var(--ring); background: var(--white); }
.fn-field--error .fn-input{ border-color: var(--danger); }
.fn-field__hint{ font-size: var(--text-xs); color: var(--ink-400); }
.fn-field--error .fn-field__hint{ color: var(--danger); font-weight: 500; }
`;
const TA_CSS = `
.fn-textarea{ resize: vertical; min-height: 108px; line-height: 1.6; font-family: var(--font-sans); }
`;
if (typeof document !== 'undefined') {
  if (!document.getElementById('fn-field-css')) { const s = document.createElement('style'); s.id = 'fn-field-css'; s.textContent = FIELD_CSS; document.head.appendChild(s); }
  if (!document.getElementById('fn-textarea-css')) { const s = document.createElement('style'); s.id = 'fn-textarea-css'; s.textContent = TA_CSS; document.head.appendChild(s); }
}

export function Textarea({ label, hint, error, required = false, id, className = '', rows = 4, ...rest }) {
  const fid = id || (label ? 'fn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const msg = error || hint;
  return (
    <div className={['fn-field', error ? 'fn-field--error' : '', className].filter(Boolean).join(' ')}>
      {label && <label className="fn-field__label" htmlFor={fid}>{label}{required && <span className="fn-field__req">*</span>}</label>}
      <textarea id={fid} rows={rows} className="fn-input fn-textarea" {...rest} />
      {msg && <span className="fn-field__hint">{msg}</span>}
    </div>
  );
}
