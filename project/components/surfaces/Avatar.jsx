import React from 'react';

/* Farmacia Nieto — Avatar: image, initials, or the brand emblem. */
const CSS = `
.fn-avatar{
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill); overflow: hidden; flex: none;
  font-family: var(--font-sans); font-weight: 700; color: var(--green-900);
  background: var(--green-200);
  border: var(--border-thin) solid var(--cream-50);
  box-shadow: var(--shadow-xs);
}
.fn-avatar img{ width: 100%; height: 100%; object-fit: cover; }
.fn-avatar--xs{ width: 28px; height: 28px; font-size: 11px; }
.fn-avatar--sm{ width: 36px; height: 36px; font-size: 13px; }
.fn-avatar--md{ width: 46px; height: 46px; font-size: 16px; }
.fn-avatar--lg{ width: 64px; height: 64px; font-size: 22px; }
.fn-avatar--xl{ width: 88px; height: 88px; font-size: 30px; }
.fn-avatar--mint{ background: var(--mint-100); }
.fn-avatar--gold{ background: var(--gold-300); color: var(--wood-700); }
.fn-avatar--forest{ background: var(--green-900); color: var(--cream-100); }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-avatar-css')) {
  const s = document.createElement('style'); s.id = 'fn-avatar-css'; s.textContent = CSS; document.head.appendChild(s);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((p) => p[0] || '').join('').toUpperCase();
}

export function Avatar({ src, alt = '', name, size = 'md', tone = 'sage', className = '', children, ...rest }) {
  const toneCls = tone !== 'sage' ? `fn-avatar--${tone}` : '';
  return (
    <span className={['fn-avatar', `fn-avatar--${size}`, toneCls, className].filter(Boolean).join(' ')} {...rest}>
      {src ? <img src={src} alt={alt} /> : (children || (name ? initials(name) : null))}
    </span>
  );
}
