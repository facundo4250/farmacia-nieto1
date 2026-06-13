/* @ds-bundle: {"format":3,"namespace":"FarmaciaNietoDesignSystem_3d24ed","components":[{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Avatar","sourcePath":"components/surfaces/Avatar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Divider","sourcePath":"components/surfaces/Divider.jsx"}],"sourceHashes":{"components/feedback/Alert.jsx":"c8d1980e74ef","components/feedback/Badge.jsx":"d7ece8f12b6f","components/feedback/Tag.jsx":"7287d9e36fb8","components/feedback/Tooltip.jsx":"23f166231499","components/forms/Button.jsx":"d9177c2ffc3a","components/forms/Checkbox.jsx":"3c3c645d7b06","components/forms/IconButton.jsx":"080a5519dacb","components/forms/Input.jsx":"86cbf3fe0707","components/forms/Radio.jsx":"ff80f4a81aeb","components/forms/Select.jsx":"1a5b67928bb4","components/forms/Switch.jsx":"d442e97b64b7","components/forms/Textarea.jsx":"f262b758e05a","components/navigation/Tabs.jsx":"1c11d2a35fab","components/surfaces/Avatar.jsx":"dee988a9a4ab","components/surfaces/Card.jsx":"2402d0d4ce57","components/surfaces/Divider.jsx":"0da5624b7b8d","ui_kits/portal/app.jsx":"4b0af0aabd0c","ui_kits/web/sections.jsx":"c72ecc3f949e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FarmaciaNietoDesignSystem_3d24ed = window.FarmaciaNietoDesignSystem_3d24ed || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-alert-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-5M12 8h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M9 12.5l2 2 4-4.5M12 21a9 9 0 100-18 9 9 0 000 18z"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.4 3.9a2 2 0 00-3.4 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
  })
};
function Alert({
  variant = 'info',
  title,
  icon,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['fn-alert', `fn-alert--${variant}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "fn-alert__icon"
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[variant])), /*#__PURE__*/React.createElement("div", {
    className: "fn-alert__body"
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "fn-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "fn-alert__text"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  variant = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fn-badge', `fn-badge--${variant}`, className].filter(Boolean).join(' ')
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fn-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  dot = false,
  selected = false,
  onRemove,
  onClick,
  className = '',
  children,
  ...rest
}) {
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fn-tag', clickable ? 'fn-tag--clickable' : '', selected ? 'fn-tag--selected' : '', className].filter(Boolean).join(' '),
    onClick: onClick
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fn-tag__dot"
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "fn-tag__x",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l6 6M9 3l-6 6"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-tip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  content,
  placement = 'top',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fn-tip', placement === 'bottom' ? 'fn-tip--bottom' : '', className].filter(Boolean).join(' '),
    tabIndex: 0
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "fn-tip__bubble",
    role: "tooltip"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
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
  const cls = ['fn-btn', `fn-btn--${variant}`, `fn-btn--${size}`, fullWidth ? 'fn-btn--block' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Farmacia Nieto — Checkbox with custom box + check. */
const CSS = `
.fn-check{ display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; color: var(--ink-600); font-size: var(--text-base); line-height: 1.45; }
.fn-check input{ position: absolute; opacity: 0; width: 0; height: 0; }
.fn-check__box{
  flex: none; width: 21px; height: 21px; margin-top: 1px;
  border: var(--border-thin) solid var(--green-300); border-radius: 6px;
  background: var(--cream-50);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft);
}
.fn-check__box svg{ width: 13px; height: 13px; color: var(--cream-50); opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out); }
.fn-check:hover .fn-check__box{ border-color: var(--green-500); }
.fn-check input:checked + .fn-check__box{ background: var(--brand-primary); border-color: var(--brand-primary); }
.fn-check input:checked + .fn-check__box svg{ opacity: 1; transform: scale(1); }
.fn-check input:focus-visible + .fn-check__box{ box-shadow: 0 0 0 3px var(--ring); }
.fn-check input:disabled + .fn-check__box{ opacity: .45; }
.fn-check--disabled{ cursor: not-allowed; opacity: .6; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-check-css')) {
  const s = document.createElement('style');
  s.id = 'fn-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['fn-check', disabled ? 'fn-check--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fn-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.2 3.2L13 5"
  }))), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  shape = 'round',
  label,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['fn-iconbtn', `fn-iconbtn--${variant}`, `fn-iconbtn--${size}`, shape === 'square' ? 'fn-iconbtn--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Farmacia Nieto — Input (text field) with optional label, hint, error, icon. */
const CSS = `
.fn-field{ display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.fn-field__label{ font-size: var(--text-sm); font-weight: 600; color: var(--green-900); }
.fn-field__req{ color: var(--gold-700); margin-left: 2px; }
.fn-field__wrap{ position: relative; display: flex; align-items: center; }
.fn-field__icon{ position: absolute; left: 14px; display: flex; color: var(--ink-400); pointer-events: none; }
.fn-field__icon svg{ width: 18px; height: 18px; }
.fn-input{
  width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--ink-700); background: var(--cream-50);
  border: var(--border-thin) solid var(--line-300);
  border-radius: var(--radius-md);
  padding: 0.7rem 0.95rem;
  transition: border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-base);
}
.fn-input::placeholder{ color: var(--ink-300); }
.fn-input:hover{ border-color: var(--green-300); }
.fn-input:focus{ outline: none; border-color: var(--green-500); box-shadow: 0 0 0 3px var(--ring); background: var(--white); }
.fn-input--has-icon{ padding-left: 2.6rem; }
.fn-input:disabled{ opacity: .55; cursor: not-allowed; background: var(--cream-200); }
.fn-field--error .fn-input{ border-color: var(--danger); }
.fn-field--error .fn-input:focus{ box-shadow: 0 0 0 3px color-mix(in oklab, var(--danger) 30%, transparent); }
.fn-field__hint{ font-size: var(--text-xs); color: var(--ink-400); }
.fn-field--error .fn-field__hint{ color: var(--danger); font-weight: 500; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-field-css')) {
  const s = document.createElement('style');
  s.id = 'fn-field-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  icon,
  id,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'fn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: ['fn-field', error ? 'fn-field--error' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fn-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fn-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "fn-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "fn-field__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: ['fn-input', icon ? 'fn-input--has-icon' : ''].filter(Boolean).join(' ')
  }, rest))), msg && /*#__PURE__*/React.createElement("span", {
    className: "fn-field__hint"
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Farmacia Nieto — Radio with custom dot. */
const CSS = `
.fn-radio{ display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; color: var(--ink-600); font-size: var(--text-base); line-height: 1.45; }
.fn-radio input{ position: absolute; opacity: 0; width: 0; height: 0; }
.fn-radio__dot{
  flex: none; width: 21px; height: 21px; margin-top: 1px; border-radius: var(--radius-pill);
  border: var(--border-thin) solid var(--green-300); background: var(--cream-50);
  display: inline-flex; align-items: center; justify-content: center;
  transition: border-color var(--dur-fast) var(--ease-soft);
}
.fn-radio__dot::after{ content: ""; width: 10px; height: 10px; border-radius: 50%; background: var(--brand-primary); transform: scale(0); transition: transform var(--dur-fast) var(--ease-out); }
.fn-radio:hover .fn-radio__dot{ border-color: var(--green-500); }
.fn-radio input:checked + .fn-radio__dot{ border-color: var(--brand-primary); }
.fn-radio input:checked + .fn-radio__dot::after{ transform: scale(1); }
.fn-radio input:focus-visible + .fn-radio__dot{ box-shadow: 0 0 0 3px var(--ring); }
.fn-radio--disabled{ cursor: not-allowed; opacity: .6; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-radio-css')) {
  const s = document.createElement('style');
  s.id = 'fn-radio-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['fn-radio', disabled ? 'fn-radio--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fn-radio__dot"
  }), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Farmacia Nieto — Select. Native select styled to match the field shell. */
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
.fn-input:hover{ border-color: var(--green-300); }
.fn-input:focus{ outline: none; border-color: var(--green-500); box-shadow: 0 0 0 3px var(--ring); background: var(--white); }
.fn-field--error .fn-input{ border-color: var(--danger); }
.fn-field__hint{ font-size: var(--text-xs); color: var(--ink-400); }
.fn-field--error .fn-field__hint{ color: var(--danger); font-weight: 500; }
`;
const SEL_CSS = `
.fn-select-wrap{ position: relative; }
.fn-select{ appearance: none; -webkit-appearance: none; padding-right: 2.6rem; cursor: pointer; }
.fn-select-wrap::after{
  content: ""; position: absolute; right: 16px; top: 50%; width: 9px; height: 9px;
  border-right: 2px solid var(--green-600); border-bottom: 2px solid var(--green-600);
  transform: translateY(-65%) rotate(45deg); pointer-events: none; border-radius: 1px;
}
`;
if (typeof document !== 'undefined') {
  if (!document.getElementById('fn-field-css')) {
    const s = document.createElement('style');
    s.id = 'fn-field-css';
    s.textContent = FIELD_CSS;
    document.head.appendChild(s);
  }
  if (!document.getElementById('fn-select-css')) {
    const s = document.createElement('style');
    s.id = 'fn-select-css';
    s.textContent = SEL_CSS;
    document.head.appendChild(s);
  }
}
function Select({
  label,
  hint,
  error,
  required = false,
  placeholder,
  options = [],
  id,
  className = '',
  children,
  ...rest
}) {
  const fid = id || (label ? 'fn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: ['fn-field', error ? 'fn-field--error' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fn-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fn-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "fn-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "fn-input fn-select"
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }), children)), msg && /*#__PURE__*/React.createElement("span", {
    className: "fn-field__hint"
  }, msg));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Farmacia Nieto — Switch (toggle). */
const CSS = `
.fn-switch{ display: inline-flex; align-items: center; gap: 11px; font-family: var(--font-sans); cursor: pointer; color: var(--ink-600); font-size: var(--text-base); }
.fn-switch input{ position: absolute; opacity: 0; width: 0; height: 0; }
.fn-switch__track{
  flex: none; width: 44px; height: 25px; border-radius: var(--radius-pill);
  background: var(--line-300); position: relative;
  transition: background var(--dur-base) var(--ease-soft);
}
.fn-switch__track::after{
  content: ""; position: absolute; top: 3px; left: 3px; width: 19px; height: 19px;
  border-radius: 50%; background: var(--cream-50); box-shadow: var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-out);
}
.fn-switch input:checked + .fn-switch__track{ background: var(--brand-primary); }
.fn-switch input:checked + .fn-switch__track::after{ transform: translateX(19px); }
.fn-switch input:focus-visible + .fn-switch__track{ box-shadow: 0 0 0 3px var(--ring); }
.fn-switch--disabled{ cursor: not-allowed; opacity: .55; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-switch-css')) {
  const s = document.createElement('style');
  s.id = 'fn-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['fn-switch', disabled ? 'fn-switch--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fn-switch__track"
  }), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  if (!document.getElementById('fn-field-css')) {
    const s = document.createElement('style');
    s.id = 'fn-field-css';
    s.textContent = FIELD_CSS;
    document.head.appendChild(s);
  }
  if (!document.getElementById('fn-textarea-css')) {
    const s = document.createElement('style');
    s.id = 'fn-textarea-css';
    s.textContent = TA_CSS;
    document.head.appendChild(s);
  }
}
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  className = '',
  rows = 4,
  ...rest
}) {
  const fid = id || (label ? 'fn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: ['fn-field', error ? 'fn-field--error' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fn-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fn-field__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    className: "fn-input fn-textarea"
  }, rest)), msg && /*#__PURE__*/React.createElement("span", {
    className: "fn-field__hint"
  }, msg));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Farmacia Nieto — Tabs: underline-style segmented navigation. */
const CSS = `
.fn-tabs{ display: inline-flex; gap: 4px; border-bottom: var(--border-thin) solid var(--line-200); font-family: var(--font-sans); }
.fn-tab{
  position: relative; appearance: none; border: none; background: none; cursor: pointer;
  font-family: var(--font-sans); font-weight: 600; font-size: var(--text-sm);
  color: var(--ink-400); padding: 10px 16px 13px; border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  transition: color var(--dur-fast) var(--ease-soft), background var(--dur-fast);
}
.fn-tab:hover{ color: var(--green-800); background: var(--green-50); }
.fn-tab__count{ margin-left: 7px; font-size: 11px; background: var(--green-100); color: var(--green-800); padding: 1px 7px; border-radius: var(--radius-pill); }
.fn-tab--active{ color: var(--green-900); }
.fn-tab--active::after{
  content: ""; position: absolute; left: 12px; right: 12px; bottom: -1.5px; height: 3px;
  background: var(--green-700); border-radius: 3px 3px 0 0;
}
.fn-tab--active .fn-tab__count{ background: var(--gold-300); color: var(--wood-700); }
.fn-tabs--pill{ border: none; background: var(--green-100); padding: 4px; border-radius: var(--radius-pill); gap: 2px; }
.fn-tabs--pill .fn-tab{ border-radius: var(--radius-pill); padding: 8px 18px; }
.fn-tabs--pill .fn-tab:hover{ background: transparent; color: var(--green-800); }
.fn-tabs--pill .fn-tab--active{ background: var(--cream-50); color: var(--green-900); box-shadow: var(--shadow-xs); }
.fn-tabs--pill .fn-tab--active::after{ display: none; }
`;
if (typeof document !== 'undefined' && !document.getElementById('fn-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'fn-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].id ?? tabs[0])));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['fn-tabs', variant === 'pill' ? 'fn-tabs--pill' : '', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(t => {
    const id = t.id ?? t;
    const label = t.label ?? t;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active === id,
      className: ['fn-tab', active === id ? 'fn-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => select(id)
    }, label, t.count != null && /*#__PURE__*/React.createElement("span", {
      className: "fn-tab__count"
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0] || '').join('').toUpperCase();
}
function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  tone = 'sage',
  className = '',
  children,
  ...rest
}) {
  const toneCls = tone !== 'sage' ? `fn-avatar--${tone}` : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fn-avatar', `fn-avatar--${size}`, toneCls, className].filter(Boolean).join(' ')
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : children || (name ? initials(name) : null));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  variant = 'default',
  interactive = false,
  flat = false,
  media,
  title,
  footer,
  padding = 'md',
  className = '',
  children,
  ...rest
}) {
  const variantCls = variant !== 'default' ? `fn-card--${variant}` : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['fn-card', variantCls, interactive ? 'fn-card--interactive' : '', flat ? 'fn-card--flat' : '', className].filter(Boolean).join(' ')
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "fn-card__media"
  }, media), /*#__PURE__*/React.createElement("div", {
    className: ['fn-card__body', padding === 'lg' ? 'fn-card__body--lg' : ''].filter(Boolean).join(' ')
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "fn-card__title"
  }, title), children), footer && /*#__PURE__*/React.createElement("div", {
    className: "fn-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'fn-divider-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Divider({
  label,
  mark = false,
  orientation = 'horizontal',
  className = '',
  ...rest
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: ['fn-divider--vertical', className].filter(Boolean).join(' ')
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['fn-divider', className].filter(Boolean).join(' '),
    role: "separator"
  }, rest), mark && !label && /*#__PURE__*/React.createElement("span", {
    className: "fn-divider__mark"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "fn-divider__label"
  }, label));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Divider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/app.jsx
try { (() => {
/* Farmacia Nieto — Portal del paciente (mobile app).
   Interactive flow: ingresar → mis pedidos → pedir fórmula → seguimiento.
   Built on the design-system primitives + Lucide icons. */

const NS = window.FarmaciaNietoDesignSystem_3d24ed;
const {
  Button,
  Card,
  Badge,
  Tag,
  Input,
  Textarea,
  Select,
  Radio,
  Avatar,
  Divider,
  Alert,
  IconButton,
  Tabs
} = NS;
const ASSETS = '../../assets';
function Icon({
  name,
  size = 22,
  stroke = 1.8,
  color
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const lib = window.lucide;
    if (ref.current && lib && lib.icons && lib.icons[name]) {
      const el = lib.createElement(lib.icons[name]);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke-width', stroke);
      if (color) el.setAttribute('stroke', color);
      ref.current.innerHTML = '';
      ref.current.appendChild(el);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}
const SPECIALTIES = ['Dermocosmética', 'Homeopatía', 'Fitoterapia', 'Florales', 'Medicina Ortomolecular', 'Probióticos', 'Hormonas Bioidénticas', 'Alopatía'];
const STATUS = {
  recibida: {
    label: 'Recibida',
    variant: 'info',
    step: 0
  },
  preparacion: {
    label: 'En preparación',
    variant: 'warning',
    step: 1
  },
  lista: {
    label: 'Lista para retirar',
    variant: 'success',
    step: 2
  },
  entregada: {
    label: 'Entregada',
    variant: 'neutral',
    step: 3
  }
};
const TIMELINE = [['Recibida', 'Recibimos tu pedido', 'FileText'], ['En preparación', 'Tu fórmula se elabora en el laboratorio', 'FlaskConical'], ['Lista para retirar', 'Te avisamos por WhatsApp', 'PackageCheck'], ['Entregada', 'Disfrutá tu bienestar', 'Heart']];
const SEED = [{
  id: 'NT-1042',
  name: 'Crema con ácido hialurónico',
  spec: 'Dermocosmética',
  status: 'preparacion',
  date: '10 jun',
  eta: '12 jun'
}, {
  id: 'NT-1039',
  name: 'Gotas homeopáticas personalizadas',
  spec: 'Homeopatía',
  status: 'lista',
  date: '8 jun',
  eta: 'Hoy'
}, {
  id: 'NT-1021',
  name: 'Cápsulas de magnesio + B6',
  spec: 'Medicina Ortomolecular',
  status: 'entregada',
  date: '28 may',
  eta: '30 may'
}];

/* ---- Phone shell ------------------------------------------- */
function Phone({
  children,
  statusDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: 'var(--green-950)',
      borderRadius: 52,
      padding: 12,
      boxShadow: 'var(--shadow-xl)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--cream-100)',
      borderRadius: 42,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px',
      zIndex: 20,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      color: statusDark ? 'var(--cream-50)' : 'var(--green-900)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Signal",
    size: 15,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "Wifi",
    size: 15,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "BatteryFull",
    size: 17,
    color: "currentColor"
  }))), children));
}
function Screen({
  children,
  pad = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      paddingTop: 38,
      ...(pad ? {
        padding: '38px 20px 20px'
      } : {}),
      ...style
    }
  }, children);
}

/* ---- Login -------------------------------------------------- */
function Login({
  onEnter
}) {
  return /*#__PURE__*/React.createElement(Screen, {
    pad: false,
    style: {
      background: 'radial-gradient(120% 70% at 50% 0%, var(--mint-100), var(--green-500) 80%)',
      display: 'flex',
      flexDirection: 'column',
      padding: '38px 26px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-50)',
      borderRadius: 30,
      padding: 18,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/emblem-nieto.png`,
    alt: "",
    style: {
      width: 130,
      height: 112,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 46,
      color: 'var(--cream-50)',
      marginTop: 22,
      lineHeight: 0.9
    }
  }, "farmacia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--mint-100)'
    }
  }, "Nieto"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--cream-50)',
      fontSize: 15,
      lineHeight: 1.6,
      opacity: .95,
      marginTop: 18,
      maxWidth: 260
    }
  }, "Tu camino hacia el bienestar, en la palma de tu mano.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-50)',
      borderRadius: 26,
      padding: 22,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tu tel\xE9fono",
    placeholder: "291 \u2026",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Phone",
      size: 17
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onEnter,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Ingresar"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--ink-400)',
      margin: '14px 0 0'
    }
  }, "\xBFPrimera vez? Te creamos tu cuenta al ingresar.")));
}

/* ---- Order card -------------------------------------------- */
function OrderCard({
  order,
  onOpen
}) {
  const st = STATUS[order.status];
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    onClick: () => onOpen(order),
    padding: "md",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink-400)',
      letterSpacing: '.04em'
    }
  }, order.id), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--green-900)',
      margin: '2px 0 0',
      lineHeight: 1.2
    }
  }, order.name)), /*#__PURE__*/React.createElement(Badge, {
    variant: st.variant,
    dot: true
  }, st.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    dot: true
  }, order.spec), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12.5,
      color: 'var(--ink-400)',
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Clock",
    size: 14,
    color: "var(--ink-400)"
  }), " ", order.eta)));
}

/* ---- Home --------------------------------------------------- */
function Home({
  orders,
  onOpen,
  onNew
}) {
  const [tab, setTab] = React.useState('activos');
  const filtered = orders.filter(o => tab === 'activos' ? ['recibida', 'preparacion'].includes(o.status) : tab === 'listos' ? o.status === 'lista' : o.status === 'entregada');
  const counts = {
    activos: orders.filter(o => ['recibida', 'preparacion'].includes(o.status)).length,
    listos: orders.filter(o => o.status === 'lista').length
  };
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    tone: "forest",
    size: "md"
  }, "P"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-400)',
      fontWeight: 600
    }
  }, "\xA1Hola de nuevo!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--green-900)'
    }
  }, "Patricia")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notificaciones",
    variant: "soft"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 19
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "sage",
    padding: "md",
    interactive: true,
    onClick: onNew,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 16,
      background: 'rgba(255,255,255,.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "FlaskConical",
    size: 24,
    color: "var(--cream-50)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--cream-50)'
    }
  }, "Ped\xED tu f\xF3rmula"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--cream-50)',
      opacity: .9
    }
  }, "Sub\xED tu receta y la preparamos a medida")), /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight",
    size: 20,
    color: "var(--cream-50)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: 'activos',
      label: 'En preparación',
      count: counts.activos
    }, {
      id: 'listos',
      label: 'Listos',
      count: counts.listos
    }, {
      id: 'historial',
      label: 'Historial'
    }]
  })), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 20px',
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Inbox",
    size: 36,
    color: "var(--green-300)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 14
    }
  }, "No hay pedidos en esta secci\xF3n.")) : filtered.map(o => /*#__PURE__*/React.createElement(OrderCard, {
    key: o.id,
    order: o,
    onOpen: onOpen
  })));
}

/* ---- New request -------------------------------------------- */
function NewRequest({
  onBack,
  onSubmit
}) {
  const [spec, setSpec] = React.useState('');
  const [uploaded, setUploaded] = React.useState(false);
  const [detail, setDetail] = React.useState('');
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Volver",
    variant: "soft",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 20
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--green-900)',
      margin: 0
    }
  }, "Ped\xED tu f\xF3rmula")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Especialidad",
    placeholder: "Eleg\xED una opci\xF3n",
    options: SPECIALTIES,
    value: spec,
    onChange: e => setSpec(e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--green-900)',
      marginBottom: 6
    }
  }, "Tu receta"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setUploaded(true),
    style: {
      width: '100%',
      border: '1.5px dashed var(--green-300)',
      background: uploaded ? 'var(--success-soft)' : 'var(--cream-50)',
      borderRadius: 'var(--radius-md)',
      padding: '20px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      transition: 'all .2s'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: uploaded ? 'CheckCircle2' : 'Upload',
    size: 26,
    color: uploaded ? 'var(--green-600)' : 'var(--green-500)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: uploaded ? 'var(--green-700)' : 'var(--ink-500)'
    }
  }, uploaded ? 'receta-nieto.jpg · cargada' : 'Tocá para subir una foto de tu receta'))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Contanos qu\xE9 necesit\xE1s",
    rows: 3,
    placeholder: "Detalle de la f\xF3rmula, dosis, indicaciones\u2026",
    value: detail,
    onChange: e => setDetail(e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--green-900)',
      marginBottom: 8
    }
  }, "\xBFC\xF3mo lo recib\xEDs?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "entrega",
    label: "Retiro en el local",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "entrega",
    label: "Env\xEDo a domicilio"
  }))), /*#__PURE__*/React.createElement(Alert, {
    variant: "info"
  }, "Algunas f\xF3rmulas requieren receta m\xE9dica vigente. Te confirmamos al recibir tu pedido."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !spec,
    onClick: () => onSubmit({
      spec,
      detail
    }),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "Send",
      size: 17
    })
  }, "Enviar pedido")));
}

/* ---- Confirmation ------------------------------------------- */
function Confirm({
  order,
  onTrack,
  onHome
}) {
  return /*#__PURE__*/React.createElement(Screen, {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      background: 'var(--success-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 46,
    color: "var(--green-600)",
    stroke: 2.4
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--green-900)',
      margin: '0 0 10px'
    }
  }, "\xA1Pedido recibido!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ink-500)',
      maxWidth: 260,
      margin: 0
    }
  }, "Tu pedido ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--green-800)'
    }
  }, order.id), " ya est\xE1 en nuestras manos. Te avisamos por WhatsApp en cada paso.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onTrack,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MapPin",
      size: 18
    })
  }, "Seguir mi pedido"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: onHome
  }, "Volver al inicio")));
}

/* ---- Tracking ----------------------------------------------- */
function Tracking({
  order,
  onBack
}) {
  const st = STATUS[order.status];
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Volver",
    variant: "soft",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink-400)'
    }
  }, order.id), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--green-900)',
      margin: 0,
      lineHeight: 1.15
    }
  }, order.name))), /*#__PURE__*/React.createElement(Card, {
    variant: "mint",
    padding: "md",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-500)',
      fontWeight: 600
    }
  }, "Estado actual"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--green-900)'
    }
  }, st.label)), /*#__PURE__*/React.createElement(Badge, {
    variant: st.variant,
    dot: true
  }, order.eta))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 8
    }
  }, TIMELINE.map(([title, desc, icon], i) => {
    const done = i <= st.step;
    const current = i === st.step;
    return /*#__PURE__*/React.createElement("div", {
      key: title,
      style: {
        display: 'flex',
        gap: 16,
        paddingBottom: i < TIMELINE.length - 1 ? 26 : 0,
        position: 'relative'
      }
    }, i < TIMELINE.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 21,
        top: 44,
        bottom: 0,
        width: 2,
        background: i < st.step ? 'var(--green-500)' : 'var(--line-200)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        background: done ? current ? 'var(--gold-400)' : 'var(--green-600)' : 'var(--cream-200)',
        border: current ? '3px solid var(--gold-200, var(--gold-100))' : 'none',
        boxShadow: current ? 'var(--shadow-gold)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: done ? icon : icon,
      size: 20,
      color: done ? current ? 'var(--wood-700)' : 'var(--cream-50)' : 'var(--ink-300)'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: 16.5,
        color: done ? 'var(--green-900)' : 'var(--ink-400)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-400)',
        lineHeight: 1.45
      }
    }, desc)));
  })), /*#__PURE__*/React.createElement(Divider, {
    label: "\xBFDudas?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 18
    })
  }, "Escribinos por WhatsApp")));
}

/* ---- App ---------------------------------------------------- */
function PortalApp() {
  const [screen, setScreen] = React.useState('login');
  const [orders, setOrders] = React.useState(SEED);
  const [current, setCurrent] = React.useState(null);
  let counter = React.useRef(1043);
  const openOrder = o => {
    setCurrent(o);
    setScreen('tracking');
  };
  const submitNew = ({
    spec
  }) => {
    const id = 'NT-' + counter.current++;
    const order = {
      id,
      name: 'Nueva fórmula magistral',
      spec: spec || 'Dermocosmética',
      status: 'recibida',
      date: 'Hoy',
      eta: '48–72 h'
    };
    setOrders(p => [order, ...p]);
    setCurrent(order);
    setScreen('confirm');
  };
  const statusDark = screen === 'login';
  return /*#__PURE__*/React.createElement(Phone, {
    statusDark: statusDark
  }, screen === 'login' && /*#__PURE__*/React.createElement(Login, {
    onEnter: () => setScreen('home')
  }), screen === 'home' && /*#__PURE__*/React.createElement(Home, {
    orders: orders,
    onOpen: openOrder,
    onNew: () => setScreen('new')
  }), screen === 'new' && /*#__PURE__*/React.createElement(NewRequest, {
    onBack: () => setScreen('home'),
    onSubmit: submitNew
  }), screen === 'confirm' && /*#__PURE__*/React.createElement(Confirm, {
    order: current,
    onTrack: () => setScreen('tracking'),
    onHome: () => setScreen('home')
  }), screen === 'tracking' && /*#__PURE__*/React.createElement(Tracking, {
    order: current,
    onBack: () => setScreen('home')
  }));
}
Object.assign(window, {
  PortalApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/sections.jsx
try { (() => {
/* Farmacia Nieto — Marketing site sections.
   Composes the design-system primitives from window.<Namespace>.
   Exports all section components + the NietoSite app to window. */

const NS = window.FarmaciaNietoDesignSystem_3d24ed;
const {
  Button,
  Card,
  Badge,
  Tag,
  Input,
  Textarea,
  Select,
  Avatar,
  Divider,
  Alert,
  IconButton
} = NS;

/* ---- Lucide icon helper (CDN) ------------------------------ */
function Icon({
  name,
  size = 22,
  stroke = 1.8,
  color
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const lib = window.lucide;
    if (ref.current && lib && lib.icons && lib.icons[name]) {
      const el = lib.createElement(lib.icons[name]);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke-width', stroke);
      if (color) el.setAttribute('stroke', color);
      ref.current.innerHTML = '';
      ref.current.appendChild(el);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}
const ASSETS = '../../assets';
const WORDMARK = ({
  light
} = {}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    flexDirection: 'column',
    lineHeight: 0.86
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-script)',
    fontSize: 30,
    color: light ? 'var(--cream-100)' : 'var(--green-700)'
  }
}, "farmacia"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: light ? 'var(--green-300)' : 'var(--green-400)',
    paddingLeft: 3
  }
}, "Nieto"));

/* ---- Header ------------------------------------------------- */
const NAV = [{
  id: 'inicio',
  label: 'Inicio'
}, {
  id: 'especialidades',
  label: 'Especialidades'
}, {
  id: 'nosotros',
  label: 'Nosotros'
}, {
  id: 'proceso',
  label: 'Cómo trabajamos'
}, {
  id: 'contacto',
  label: 'Contacto'
}];
function Header({
  active,
  onNav,
  onCta
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'color-mix(in oklab, var(--cream-100) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '14px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    onClick: e => {
      e.preventDefault();
      onNav('inicio');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/emblem-nieto.png`,
    alt: "",
    style: {
      width: 44,
      height: 44,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement(WORDMARK, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      padding: '9px 14px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      color: active === n.id ? 'var(--green-900)' : 'var(--ink-500)',
      background: active === n.id ? 'var(--green-100)' : 'transparent',
      transition: 'all .2s'
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "FlaskConical",
      size: 16
    })
  }, "Ped\xED tu f\xF3rmula")));
}

/* ---- Hero --------------------------------------------------- */
function Hero({
  onCta,
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(120% 90% at 80% -10%, var(--mint-50), var(--cream-100) 55%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '72px 28px 84px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "nieto-eyebrow",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Sparkles",
    size: 15,
    color: "var(--gold-600)"
  }), " Elaboraci\xF3n magistral \xB7 Desde 1996"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 60,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--green-900)',
      margin: '18px 0 0'
    }
  }, "Tu camino hacia", /*#__PURE__*/React.createElement("br", null), "el ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--green-600)'
    }
  }, "bienestar")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--ink-600)',
      maxWidth: 480,
      margin: '20px 0 30px'
    }
  }, "Preparamos cada f\xF3rmula a mano, pensada para vos. Formulaciones personalizadas seg\xFAn las necesidades de cada paciente \u2014 con la direcci\xF3n t\xE9cnica de Patricia Victoria Nieto."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Ped\xED tu f\xF3rmula"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('especialidades')
  }, "Conoc\xE9 las especialidades")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30,
      marginTop: 40
    }
  }, [['Desde', '1996'], ['Especialidades', '8'], ['Atención', 'Personalizada']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--green-800)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      fontWeight: 600
    }
  }, k))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '6% 12%',
      background: 'var(--green-300)',
      borderRadius: '46% 54% 58% 42% / 52% 44% 56% 48%',
      opacity: .35,
      filter: 'blur(4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--mint-100)',
      borderRadius: 'var(--radius-2xl)',
      padding: 26,
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/logo-nieto.png`,
    alt: "Farmacia Nieto",
    style: {
      width: 320,
      height: 320,
      objectFit: 'contain',
      borderRadius: 'var(--radius-xl)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 6,
      left: -6,
      background: 'var(--cream-50)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 16px',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Leaf",
    size: 17,
    color: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--green-900)'
    }
  }, "Formulado a tu medida")))));
}

/* ---- Specialties ------------------------------------------- */
const SPECIALTIES = [['Sparkles', 'Medicina Ortomolecular', 'Equilibrá tu organismo con nutrientes en dosis precisas.'], ['Droplet', 'Dermocosmética', 'Cremas y serums formulados para tu tipo de piel.'], ['FlaskRound', 'Homeopatía', 'Preparados individualizados con seguimiento cercano.'], ['Pill', 'Alopatía', 'Medicación magistral en la forma y dosis que necesitás.'], ['Leaf', 'Fitoterapia', 'El poder de las plantas, dosificado con rigor.'], ['Flower2', 'Florales', 'Esencias florales preparadas para tu bienestar emocional.'], ['Microscope', 'Probióticos', 'Fórmulas vivas para cuidar tu flora intestinal.'], ['Activity', 'Hormonas Bioidénticas', 'Terapias a medida, idénticas a las de tu cuerpo.']];
function Specialties({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "especialidades",
    style: {
      background: 'var(--cream-100)',
      padding: '88px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nieto-eyebrow"
  }, "Lo que preparamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 42,
      color: 'var(--green-900)',
      margin: '12px 0 14px',
      lineHeight: 1.08
    }
  }, "Ocho especialidades, una sola forma de cuidarte"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'var(--ink-500)',
      margin: 0
    }
  }, "Cada preparado se elabora artesanalmente en nuestro laboratorio, siguiendo tu receta y tus necesidades.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, SPECIALTIES.map(([icon, name, desc]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      background: 'var(--green-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 23,
    color: "var(--green-700)",
    stroke: 1.7
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--green-900)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--ink-500)',
      margin: 0
    }
  }, desc)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onCta,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 18
    })
  }, "Consultanos por tu f\xF3rmula"))));
}

/* ---- About Patricia ---------------------------------------- */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "nosotros",
    style: {
      background: 'var(--green-500)',
      padding: '88px 28px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mint-100)',
      borderRadius: 'var(--radius-2xl)',
      padding: 16,
      boxShadow: 'var(--shadow-xl)',
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 250,
      height: 320,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--green-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/patricia-nieto.png`,
    alt: "Patricia Victoria Nieto",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      transform: 'scale(1.18)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -14,
      right: -10,
      background: 'var(--cream-50)',
      borderRadius: 'var(--radius-lg)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--green-900)'
    }
  }, "Patricia V. Nieto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-500)',
      fontWeight: 600
    }
  }, "Directora t\xE9cnica"))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Acerca de nosotros"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 40,
      color: 'var(--cream-50)',
      margin: '14px 0 18px',
      lineHeight: 1.1
    }
  }, "Detr\xE1s de cada f\xF3rmula, un equipo que te cuida"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      opacity: .96,
      margin: '0 0 16px'
    }
  }, "Bajo la direcci\xF3n t\xE9cnica de Patricia Victoria Nieto, una farmac\xE9utica con una larga trayectoria, contamos con un equipo de profesionales altamente capacitados."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      opacity: .96,
      margin: '0 0 26px'
    }
  }, "Trabajamos para ofrecerte productos de calidad y una atenci\xF3n de excelencia, siempre pensando en cuidar tu salud y tu bienestar de manera personalizada."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    dot: true
  }, "Atenci\xF3n humana"), /*#__PURE__*/React.createElement(Tag, {
    dot: true
  }, "Calidad farmac\xE9utica"), /*#__PURE__*/React.createElement(Tag, {
    dot: true
  }, "Hecho a mano")))));
}

/* ---- Process ------------------------------------------------ */
const STEPS = [['FileText', 'Traé tu receta', 'Acercanos tu receta médica o consultanos qué necesitás. Te asesoramos sin compromiso.'], ['FlaskConical', 'Formulamos a medida', 'Preparamos tu fórmula artesanalmente en el laboratorio, con los controles de calidad de siempre.'], ['PackageCheck', 'Retirá o recibí', 'Te avisamos cuando esté lista. Retirala en el local o coordinamos el envío.']];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "proceso",
    style: {
      background: 'var(--cream-100)',
      padding: '88px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nieto-eyebrow"
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 42,
      color: 'var(--green-900)',
      margin: '12px 0 0'
    }
  }, "Tu f\xF3rmula en tres pasos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22,
      position: 'relative'
    }
  }, STEPS.map(([icon, title, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      background: 'var(--cream-50)',
      border: '2px solid var(--green-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px',
      boxShadow: 'var(--shadow-sm)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 30,
    color: "var(--green-700)",
    stroke: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      color: 'var(--wood-700)',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--green-900)',
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--ink-500)',
      margin: 0
    }
  }, desc))))));
}

/* ---- Contact ------------------------------------------------ */
function Contact({
  formState
}) {
  const {
    sent,
    setSent
  } = formState;
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: 'var(--mint-50)',
      padding: '88px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "nieto-eyebrow"
  }, "Estamos para ayudarte"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 40,
      color: 'var(--green-900)',
      margin: '12px 0 14px',
      lineHeight: 1.1
    }
  }, "Para m\xE1s asesoramiento y consultas, comunicate con nosotros"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--ink-500)',
      margin: '0 0 28px'
    }
  }, "Cuidamos de ti de manera personalizada. Escribinos y te respondemos a la brevedad."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Phone', '(+54) 291 432-7031', 'WhatsApp'], ['Mail', 'farmacia_nieto@hotmail.com', 'Email'], ['Instagram', '@farmacia.nieto', 'Instagram']].map(([icon, val, lbl]) => /*#__PURE__*/React.createElement("div", {
    key: lbl,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--green-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--green-700)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      fontWeight: 600
    }
  }, lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--green-900)'
    }
  }, val)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    variant: "default"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    title: "\xA1Gracias por escribirnos!"
  }, "Recibimos tu consulta. Te contactamos por WhatsApp o email a la brevedad."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "RotateCcw",
      size: 16
    })
  }, "Enviar otra consulta"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 15
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--green-900)',
      margin: 0
    }
  }, "Ped\xED tu f\xF3rmula"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre y apellido",
    placeholder: "Patricia Nieto",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "291 \u2026",
    required: true
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Especialidad",
    placeholder: "Eleg\xED una opci\xF3n",
    options: SPECIALTIES.map(s => s[1])
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Contanos qu\xE9 necesit\xE1s",
    rows: 3,
    placeholder: "Detalle de la receta o consulta\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "Send",
      size: 17
    })
  }, "Enviar consulta")))));
}

/* ---- Footer ------------------------------------------------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-950)',
      color: 'var(--cream-100)',
      padding: '52px 28px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 36,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/emblem-nieto.png`,
    alt: "",
    style: {
      width: 42,
      height: 42,
      objectFit: 'contain',
      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,.3))'
    }
  }), /*#__PURE__*/React.createElement(WORDMARK, {
    light: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      opacity: .8,
      margin: 0
    }
  }, "Elaboraci\xF3n magistral desde 1996. Cuidamos de ti de manera personalizada.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 52,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11.5,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--green-300)',
      marginBottom: 12
    }
  }, "Contacto"), ['(+54) 291 432-7031', 'farmacia_nieto@hotmail.com', '@farmacia.nieto'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 13.5,
      opacity: .85,
      marginBottom: 7
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11.5,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--green-300)',
      marginBottom: 12
    }
  }, "Seguinos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['Instagram', 'MessageCircle', 'Mail'].map(ic => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--cream-100)"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '32px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,.12)',
      fontSize: 12.5,
      opacity: .65,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Farmacia Nieto. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", null, "Bah\xEDa Blanca, Argentina")));
}

/* ---- App ---------------------------------------------------- */
function NietoSite() {
  const [active, setActive] = React.useState('inicio');
  const [sent, setSent] = React.useState(false);
  const scrollTo = id => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: 'smooth'
    });
  };
  const goCta = () => scrollTo('contacto');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    active: active,
    onNav: scrollTo,
    onCta: goCta
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onCta: goCta,
    onNav: scrollTo
  }), /*#__PURE__*/React.createElement(Specialties, {
    onCta: goCta
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    formState: {
      sent,
      setSent
    }
  })), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  NietoSite,
  Header,
  Hero,
  Specialties,
  About,
  Process,
  Contact,
  Footer,
  NietoIcon: Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

})();
