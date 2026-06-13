import React from 'react';

/* Farmacia Nieto — Badge: small status/count pill. */
const CSS = `
.fn-badge{
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-sans); font-weight: 600; font-size: var(--text-xs);
  line-height: 1; padding: 0.32em 0.7em; border-radius: var(--radius-pill);
  letter-spacing: .01em; white-space: nowrap;
}
.fn-badge__dot{ width: 6px; height: 6px; border-radius: 50%; background: currentColor; opacity: .85; }
.fn-badge--neutral{ background: var(--green-100); color: var(--green-800); }
.fn-badge--success{ background: var(--success-soft); color: var(--green-800); }
.fn-badge--warning{ background: var(--warning-soft); color: var(--gold-700); }
.fn-badge--danger{ background: var(--danger-soft); color: var(--danger); }
.fn-badge--info{ background: var(--info-soft); color: var(--info); }
.fn-badge--gold{ background: var(--gold-100); color: var(--wood-700); }
.fn-badge--solid{ background: var(--brand-primary); color: var(--cream-50); }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-badge-css')) {
  const s = document.createElement('style'); s.id = 'fn-badge-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Badge({ variant = 'neutral', dot = false, className = '', children, ...rest }) {
  return (
    <span className={['fn-badge', `fn-badge--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {dot && <span className="fn-badge__dot"></span>}
      {children}
    </span>
  );
}
