import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'body' | 'muted' | 'caption';
  children: ReactNode;
}

const textVariants = {
  body: 'text-base text-[var(--color-text)] font-normal',
  muted: 'text-sm text-[var(--color-text-muted)] font-normal',
  caption: 'text-xs text-[var(--color-text-muted)] font-normal',
};

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ variant = 'body', className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`${textVariants[variant]} ${className || ''}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Text.displayName = 'Text';