import * as React from 'react';

/** Hover/focus tooltip wrapping any trigger element. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Bubble content. */
  content: React.ReactNode;
  /** @default "top" */
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipProps): JSX.Element;
