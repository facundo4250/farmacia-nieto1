import * as React from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

/** Inline callout banner for confirmations, reminders and gentle warnings. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  variant?: AlertVariant;
  /** Bold heading line. */
  title?: React.ReactNode;
  /** Override the default status icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Alert(props: AlertProps): JSX.Element;
