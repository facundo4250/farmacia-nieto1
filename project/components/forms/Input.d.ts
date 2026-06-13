import * as React from 'react';

/**
 * Text input with optional label, leading icon, hint and error state.
 * Shares the `.fn-field` shell with Textarea and Select.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
  /** Show a required asterisk. */
  required?: boolean;
  /** Leading icon node. */
  icon?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
