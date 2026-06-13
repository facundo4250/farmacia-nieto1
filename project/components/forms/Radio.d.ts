import * as React from 'react';

/** Radio button for single choice within a `name` group. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

export function Radio(props: RadioProps): JSX.Element;
