import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action button for Farmacia Nieto.
 * Pill-shaped, warm. `primary` = forest green, `accent` = honey-gold, `secondary` = sage.
 *
 * @startingPoint section="Forms" subtitle="Botón pastilla en todas sus variantes" viewport="700x120"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** Size. @default "md" */
  size?: ButtonSize;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Render as an anchor with this href instead of a button. */
  href?: string;
  /** Icon element placed before the label. */
  iconLeft?: React.ReactNode;
  /** Icon element placed after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
