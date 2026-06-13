import React from 'react';

/* Farmacia Nieto — IconButton: a square/round button holding a single icon. */
const CSS = `
.fn-iconbtn{
  --_bg: transparent; --_fg: var(--green-800); --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center;
  border: var(--border-thin) solid var(--_bd);
  background: var(--_bg); color: var(--_fg);
  cursor: pointer; border-radius: var(--radius-pill);
  transition: background var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-soft);
}
.fn-iconbtn:focus-visible{ outline: none; box-shadow: 0 0 0 3px var(--ring); }
.fn-iconbtn:active{ transform: scale(0.92); }
.fn-iconbtn[disabled]{ opacity: .4; cursor: not-allowed; }
.fn-iconbtn svg{ width: 1.2em; height: 1.2em; }
.fn-iconbtn--sm{ width: 34px; height: 34px; font-size: 15px; }
.fn-iconbtn--md{ width: 42px; height: 42px; font-size: 18px; }
.fn-iconbtn--lg{ width: 50px; height: 50px; font-size: 20px; }
.fn-iconbtn--square{ border-radius: var(--radius-md); }
.fn-iconbtn--solid{ --_bg: var(--brand-primary); --_fg: var(--cream-50); box-shadow: var(--shadow-sm); }
.fn-iconbtn--solid:hover{ --_bg: var(--brand-primary-hover); }
.fn-iconbtn--soft{ --_bg: var(--green-100); --_fg: var(--green-800); }
.fn-iconbtn--soft:hover{ --_bg: var(--green-200); }
.fn-iconbtn--ghost:hover{ --_bg: var(--green-100); }
.fn-iconbtn--outline{ --_bd: var(--green-300); }
.fn-iconbtn--outline:hover{ --_bg: var(--green-50); --_bd: var(--green-500); }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-iconbtn-css')) {
  const s = document.createElement('style'); s.id = 'fn-iconbtn-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function IconButton({
  variant = 'ghost',
  size = 'md',
  shape = 'round',
  label,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'fn-iconbtn',
    `fn-iconbtn--${variant}`,
    `fn-iconbtn--${size}`,
    shape === 'square' ? 'fn-iconbtn--square' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
