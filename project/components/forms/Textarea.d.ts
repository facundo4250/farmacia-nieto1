import * as React from 'react';

/** Multi-line text field for notes, prescriptions detail, messages. Shares the field shell with Input. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
