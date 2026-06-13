import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional count badge. */
  count?: number;
}

/** Segmented tab navigation — underline or pill. Controlled (`value`) or uncontrolled (`defaultValue`). */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tabs — `{id,label,count}` objects or plain strings. */
  tabs: (TabItem | string)[];
  /** Active tab id (controlled). */
  value?: string;
  /** Initial tab id (uncontrolled). */
  defaultValue?: string;
  /** Called with the selected id. */
  onChange?: (id: string) => void;
  /** @default "underline" */
  variant?: 'underline' | 'pill';
}

export function Tabs(props: TabsProps): JSX.Element;
