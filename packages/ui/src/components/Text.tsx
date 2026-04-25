import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'body' | 'muted' | 'caption';
  children: ReactNode;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ variant = 'body', className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Text.displayName = 'Text';