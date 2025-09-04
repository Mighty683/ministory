import React, { forwardRef, memo } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Label for the input field
   */
  label?: string;
};

export const Input = memo(forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => (
  <div>
    {label && <label>{label}</label>}
    <input ref={ref} {...props} />
  </div>
)));