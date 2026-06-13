import React from 'react';

/* Farmacia Nieto — Card: the base surface. Soft radius, warm low shadow. */
const CSS = `
.fn-card{
  background: var(--surface-card); border-radius: var(--radius-lg);
  border: var(--border-hairline) solid var(--line-200);
  box-shadow: var(--shadow-sm); overflow: hidden;
  font-family: var(--font-sans); color: var(--ink-600);
  display: flex; flex-direction: column;
  transition: box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-out), border-color var(--dur-base);
}
.fn-card--interactive{ cursor: pointer; }
.fn-card--interactive:hover{ box-shadow: var(--shadow-lg); transform: translateY(-3px); border-color: var(--green-200); }
.fn-card--flat{ box-shadow: none; }
.fn-card--mint{ background: var(--mint-100); border-color: var(--mint-200); }
.fn-card--sage{ background: var(--green-500); border-color: transparent; color: var(--cream-50); }
.fn-card--forest{ background: var(--green-900); border-color: transparent; color: var(--cream-100); }
.fn-card--cream{ background: var(--cream-200); border-color: var(--cream-300); }
.fn-card__media{ display: block; width: 100%; }
.fn-card__media img{ width: 100%; height: 100%; object-fit: cover; display: block; }
.fn-card__body{ padding: var(--pad, 20px); display: flex; flex-direction: column; gap: 8px; }
.fn-card__body--lg{ padding: 28px; }
.fn-card__title{ font-family: var(--font-serif); font-weight: 600; font-size: var(--text-lg); color: inherit; margin: 0; line-height: 1.2; }
.fn-card--cream .fn-card__title, .fn-card--mint .fn-card__title{ color: var(--green-900); }
.fn-card__footer{ padding: 14px 20px; border-top: var(--border-hairline) solid var(--line-200); display: flex; align-items: center; gap: 10px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-card-css')) {
  const s = document.createElement('style'); s.id = 'fn-card-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Card({ variant = 'default', interactive = false, flat = false, media, title, footer, padding = 'md', className = '', children, ...rest }) {
  const variantCls = variant !== 'default' ? `fn-card--${variant}` : '';
  return (
    <div className={['fn-card', variantCls, interactive ? 'fn-card--interactive' : '', flat ? 'fn-card--flat' : '', className].filter(Boolean).join(' ')} {...rest}>
      {media && <div className="fn-card__media">{media}</div>}
      <div className={['fn-card__body', padding === 'lg' ? 'fn-card__body--lg' : ''].filter(Boolean).join(' ')}>
        {title && <h3 className="fn-card__title">{title}</h3>}
        {children}
      </div>
      {footer && <div className="fn-card__footer">{footer}</div>}
    </div>
  );
}
