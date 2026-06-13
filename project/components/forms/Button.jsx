import React from 'react';

/* Farmacia Nieto — Button
   Self-contained: injects its own CSS (token-driven) once at load. */
const CSS = `
.fn-btn{
  --_bg: var(--brand-primary);
  --_fg: var(--cream-50);
  --_bd: transparent;
  font-family: var(--font-sans);
  font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.55em;
  border: var(--border-thin) solid var(--_bd);
  background: var(--_bg);
  color: var(--_fg);
  border-radius: var(--radius-pill);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  line-height: 1;
  transition: transform var(--dur-fast) var(--ease-out),
              background var(--dur-base) var(--ease-soft),
              box-shadow var(--dur-base) var(--ease-soft),
              border-color var(--dur-base) var(--ease-soft);
}
.fn-btn:focus-visible{ outline: none; box-shadow: 0 0 0 3px var(--ring); }
.fn-btn:active{ transform: translateY(1px) scale(0.985); }
.fn-btn[disabled], .fn-btn[aria-disabled="true"]{ opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }

/* sizes */
.fn-btn--sm{ font-size: var(--text-sm); padding: 0.5rem 0.95rem; }
.fn-btn--md{ font-size: var(--text-base); padding: 0.7rem 1.35rem; }
.fn-btn--lg{ font-size: var(--text-md); padding: 0.9rem 1.8rem; }
.fn-btn--block{ display: flex; width: 100%; }

/* variants */
.fn-btn--primary{ --_bg: var(--brand-primary); --_fg: var(--cream-50); box-shadow: var(--shadow-sm); }
.fn-btn--primary:hover{ --_bg: var(--brand-primary-hover); box-shadow: var(--shadow-md); }
.fn-btn--secondary{ --_bg: var(--green-500); --_fg: var(--cream-50); box-shadow: var(--shadow-xs); }
.fn-btn--secondary:hover{ --_bg: var(--green-600); box-shadow: var(--shadow-sm); }
.fn-btn--accent{ --_bg: var(--gold-500); --_fg: var(--wood-700); box-shadow: var(--shadow-xs); }
.fn-btn--accent:hover{ --_bg: var(--gold-400); box-shadow: var(--shadow-gold); }
.fn-btn--outline{ --_bg: transparent; --_fg: var(--green-900); --_bd: var(--green-300); }
.fn-btn--outline:hover{ --_bg: var(--green-50); --_bd: var(--green-500); }
.fn-btn--ghost{ --_bg: transparent; --_fg: var(--green-800); }
.fn-btn--ghost:hover{ --_bg: var(--green-100); }
.fn-btn--icon{ width: 7px; height: 7px; }
.fn-btn svg{ width: 1.15em; height: 1.15em; flex: none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-btn-css')) {
  const s = document.createElement('style'); s.id = 'fn-btn-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  href,
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'fn-btn',
    `fn-btn--${variant}`,
    `fn-btn--${size}`,
    fullWidth ? 'fn-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {iconLeft}
      {children && <span>{children}</span>}
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return <a className={cls} href={href} {...rest}>{content}</a>;
  }
  return (
    <button className={cls} type={type} disabled={disabled} aria-disabled={disabled || undefined} {...rest}>
      {content}
    </button>
  );
}
