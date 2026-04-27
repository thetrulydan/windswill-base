import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import { memo } from 'react';
import { clsx } from 'clsx';

/**
 * Text - Typography component with semantic colors
 *
 * Usage:
 * - variant="body" (default): main text color
 * - variant="muted": secondary/muted text
 * - variant="caption": small/caption text
 *
 * Variants use semantic color utilities (text-text, text-text-muted)
 */

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