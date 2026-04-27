import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import { memo } from 'react';
import { clsx } from 'clsx';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'body' | 'muted' | 'caption';
  children: ReactNode;
}

const textVariants = {
  body: 'text-base text-text font-normal',
  muted: 'text-sm text-text-muted font-normal',
  caption: 'text-xs text-text-muted font-normal',
};

export const Text = memo(forwardRef<HTMLSpanElement, TextProps>(
  ({ variant = 'body', className, children, style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(textVariants[variant], className)}
        style={style}
        {...props}
      >
        {children}
      </span>
    );
  }
));

Text.displayName = 'Text';