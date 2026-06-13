import * as React from 'react';

export type CardVariant = 'default' | 'mint' | 'sage' | 'forest' | 'cream';

/**
 * Base surface for content blocks — service cards, product tiles, panels.
 *
 * @startingPoint section="Surfaces" subtitle="Tarjeta base con variantes de color" viewport="700x280"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background treatment. @default "default" (paper) */
  variant?: CardVariant;
  /** Lift + shadow on hover; renders as a pointer. */
  interactive?: boolean;
  /** Remove the resting shadow. */
  flat?: boolean;
  /** Media node placed flush at the top (image, image-slot). */
  media?: React.ReactNode;
  /** Serif title rendered above children. */
  title?: React.ReactNode;
  /** Footer row, divided by a hairline. */
  footer?: React.ReactNode;
  /** Body padding. @default "md" */
  padding?: 'md' | 'lg';
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
