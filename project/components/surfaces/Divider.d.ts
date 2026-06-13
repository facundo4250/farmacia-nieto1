import * as React from 'react';

/** Separator — plain hairline, centred label, a honey mark, or vertical. */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Centred uppercase label. */
  label?: React.ReactNode;
  /** Show a centred honey dot (when no label). */
  mark?: boolean;
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
}

export function Divider(props: DividerProps): JSX.Element;
