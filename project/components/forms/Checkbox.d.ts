import * as React from 'react';

/** Checkbox with a custom forest-green check. Pass `label` or children for the text. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
