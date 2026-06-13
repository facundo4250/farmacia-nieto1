import * as React from 'react';

export type IconButtonVariant = 'solid' | 'soft' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/**
 * Compact button holding a single icon (close, menu, edit, social links).
 * Always pass `label` for accessibility.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "ghost" */
  variant?: IconButtonVariant;
  /** Size. @default "md" */
  size?: IconButtonSize;
  /** Round (default) or square. @default "round" */
  shape?: 'round' | 'square';
  /** Accessible label, also used as tooltip. */
  label: string;
  /** The icon node. */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
