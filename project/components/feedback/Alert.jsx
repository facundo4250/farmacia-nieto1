import React from 'react';

/* Farmacia Nieto — Alert / callout banner. */
const CSS = `
.fn-alert{
  display: flex; gap: 13px; align-items: flex-start;
  font-family: var(--font-sans); border-radius: var(--radius-lg);
  padding: 15px 17px; border: var(--border-thin) solid transparent;
  background: var(--green-50);
}
.fn-alert__icon{ flex: none; display: flex; margin-top: 1px; }
.fn-alert__icon svg{ width: 20px; height: 20px; }
.fn-alert__body{ flex: 1; min-width: 0; }
.fn-alert__title{ font-weight: 700; font-size: var(--text-sm); color: var(--ink-900); margin: 0 0 3px; }
.fn-alert__text{ font-size: var(--text-sm); line-height: 1.55; color: var(--ink-600); margin: 0; }
.fn-alert--info{ background: var(--info-soft); border-color: color-mix(in oklab, var(--info) 22%, transparent); }
.fn-alert--info .fn-alert__icon{ color: var(--info); }
.fn-alert--success{ background: var(--success-soft); border-color: color-mix(in oklab, var(--success) 28%, transparent); }
.fn-alert--success .fn-alert__icon{ color: var(--green-600); }
.fn-alert--warning{ background: var(--warning-soft); border-color: color-mix(in oklab, var(--warning) 30%, transparent); }
.fn-alert--warning .fn-alert__icon{ color: var(--gold-700); }
.fn-alert--danger{ background: var(--danger-soft); border-color: color-mix(in oklab, var(--danger) 28%, transparent); }
.fn-alert--danger .fn-alert__icon{ color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-alert-css')) {
  const s = document.createElement('style'); s.id = 'fn-alert-css'; s.textContent = CSS; document.head.appendChild(s);
}

const ICONS = {
  info: <path d="M12 16v-5M12 8h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />,
  success: <path d="M9 12.5l2 2 4-4.5M12 21a9 9 0 100-18 9 9 0 000 18z" />,
  warning: <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.4 3.9a2 2 0 00-3.4 0z" />,
  danger: <path d="M12 8v4M12 16h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />,
};

export function Alert({ variant = 'info', title, icon, className = '', children, ...rest }) {
  return (
    <div className={['fn-alert', `fn-alert--${variant}`, className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="fn-alert__icon">
        {icon || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[variant]}</svg>}
      </span>
      <div className="fn-alert__body">
        {title && <p className="fn-alert__title">{title}</p>}
        {children && <p className="fn-alert__text">{children}</p>}
      </div>
    </div>
  );
}
