import * as React from 'react';

/** Toggle switch for on/off settings (notifications, envío, recordatorios). */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

export function Switch(props: SwitchProps): JSX.Element;
