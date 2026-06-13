import React from 'react';

/* Farmacia Nieto — Tag: outlined chip, optionally removable or selectable. */
const CSS = `
.fn-tag{
  display: inline-flex; align-items: center; gap: 7px;
  font-family: var(--font-sans); font-weight: 600; font-size: var(--text-sm);
  line-height: 1; padding: 0.45em 0.85em; border-radius: var(--radius-pill);
  background: var(--cream-50); color: var(--green-900);
  border: var(--border-thin) solid var(--green-200);
  transition: background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft);
}
.fn-tag__dot{ width: 7px; height: 7px; border-radius: 50%; background: var(--gold-500); flex: none; }
.fn-tag--clickable{ cursor: pointer; }
.fn-tag--clickable:hover{ border-color: var(--green-400); background: var(--green-50); }
.fn-tag--selected{ background: var(--green-900); border-color: var(--green-900); color: var(--cream-50); }
.fn-tag--selected .fn-tag__dot{ background: var(--gold-400); }
.fn-tag__x{
  display: inline-flex; align-items: center; justify-content: center;
  width: 16px; height: 16px; margin-right: -3px; border-radius: 50%;
  cursor: pointer; color: inherit; opacity: .6; border: none; background: none; padding: 0;
}
.fn-tag__x:hover{ opacity: 1; background: rgba(0,0,0,.08); }
.fn-tag__x svg{ width: 11px; height: 11px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-tag-css')) {
  const s = document.createElement('style'); s.id = 'fn-tag-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tag({ dot = false, selected = false, onRemove, onClick, className = '', children, ...rest }) {
  const clickable = !!onClick;
  return (
    <span
      className={['fn-tag', clickable ? 'fn-tag--clickable' : '', selected ? 'fn-tag--selected' : '', className].filter(Boolean).join(' ')}
      onClick={onClick}
      {...rest}
    >
      {dot && <span className="fn-tag__dot"></span>}
      {children}
      {onRemove && (
        <button className="fn-tag__x" aria-label="Quitar" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3l6 6M9 3l-6 6"/></svg>
        </button>
      )}
    </span>
  );
}
