import * as React from 'react';

/** Outlined chip — specialty filters, selectable categories, removable selections. */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  /** Leading honey dot. */
  dot?: boolean;
  /** Filled/selected state. */
  selected?: boolean;
  /** When set, renders an × that calls this. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Makes the whole tag clickable (toggle filters). */
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
