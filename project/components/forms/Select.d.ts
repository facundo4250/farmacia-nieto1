import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Styled native dropdown. Pass `options` (strings or {value,label}) or `<option>` children. Shares the field shell. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Disabled first option shown when nothing is selected. */
  placeholder?: string;
  /** Option list — strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  children?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
