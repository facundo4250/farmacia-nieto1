import React from 'react';

/* Farmacia Nieto — Divider: hairline or labelled separator, with optional botanical mark. */
const CSS = `
.fn-divider{ display: flex; align-items: center; gap: 14px; width: 100%; color: var(--ink-400); }
.fn-divider::before, .fn-divider::after{ content: ""; height: 1px; background: var(--line-300); flex: 1; }
.fn-divider--plain::after{ display: none; }
.fn-divider--plain::before{ flex: 1; }
.fn-divider__label{ font-family: var(--font-sans); font-size: var(--text-xs); font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--green-600); white-space: nowrap; }
.fn-divider__mark{ width: 7px; height: 7px; border-radius: 50%; background: var(--gold-500); box-shadow: 0 0 0 4px var(--gold-100); }
.fn-divider--vertical{ width: 1px; height: 100%; min-height: 20px; background: var(--line-300); flex: none; }
.fn-divider--vertical::before, .fn-divider--vertical::after{ display: none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-divider-css')) {
  const s = document.createElement('style'); s.id = 'fn-divider-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Divider({ label, mark = false, orientation = 'horizontal', className = '', ...rest }) {
  if (orientation === 'vertical') {
    return <span className={['fn-divider--vertical', className].filter(Boolean).join(' ')} {...rest}></span>;
  }
  return (
    <div className={['fn-divider', className].filter(Boolean).join(' ')} role="separator" {...rest}>
      {mark && !label && <span className="fn-divider__mark"></span>}
      {label && <span className="fn-divider__label">{label}</span>}
    </div>
  );
}
