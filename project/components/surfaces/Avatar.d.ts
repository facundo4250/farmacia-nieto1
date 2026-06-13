import * as React from 'react';

/** Round avatar — photo, initials from `name`, or the brand emblem as children. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. */
  src?: string;
  alt?: string;
  /** Name used to derive initials when no `src`. */
  name?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Background tone for the initials state. @default "sage" */
  tone?: 'sage' | 'mint' | 'gold' | 'forest';
  children?: React.ReactNode;
}

export function Avatar(props: AvatarProps): JSX.Element;
