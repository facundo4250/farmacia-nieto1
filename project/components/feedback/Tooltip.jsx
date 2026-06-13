import React from 'react';

/* Farmacia Nieto — Tooltip: hover/focus bubble around a trigger. */
const CSS = `
.fn-tip{ position: relative; display: inline-flex; }
.fn-tip__bubble{
  position: absolute; z-index: 40; left: 50%; transform: translateX(-50%) translateY(4px);
  bottom: calc(100% + 9px); opacity: 0; pointer-events: none;
  background: var(--green-950); color: var(--cream-100);
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: 500;
  line-height: 1.4; padding: 7px 11px; border-radius: var(--radius-sm);
  white-space: nowrap; box-shadow: var(--shadow-md);
  transition: opacity var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-out);
}
.fn-tip__bubble::after{
  content: ""; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent; border-top-color: var(--green-950);
}
.fn-tip:hover .fn-tip__bubble, .fn-tip:focus-within .fn-tip__bubble{ opacity: 1; transform: translateX(-50%) translateY(0); }
.fn-tip--bottom .fn-tip__bubble{ bottom: auto; top: calc(100% + 9px); transform: translateX(-50%) translateY(-4px); }
.fn-tip--bottom .fn-tip__bubble::after{ top: auto; bottom: 100%; border-top-color: transparent; border-bottom-color: var(--green-950); }
.fn-tip--bottom:hover .fn-tip__bubble, .fn-tip--bottom:focus-within .fn-tip__bubble{ transform: translateX(-50%) translateY(0); }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-tip-css')) {
  const s = document.createElement('style'); s.id = 'fn-tip-css'; s.textContent = CSS; document.head.appendChild(s);
}

export function Tooltip({ content, placement = 'top', className = '', children, ...rest }) {
  return (
    <span className={['fn-tip', placement === 'bottom' ? 'fn-tip--bottom' : '', className].filter(Boolean).join(' ')} tabIndex={0} {...rest}>
      {children}
      <span className="fn-tip__bubble" role="tooltip">{content}</span>
    </span>
  );
}
