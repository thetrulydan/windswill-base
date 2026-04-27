import { forwardRef, type HTMLAttributes, memo } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Badge - Status/tag indicator
 *
 * Variants: default, success, warning, error, info
 */

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-surface)',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border)',
  },
  success: {
    background: 'transparent',
    color: 'var(--color-success)',
    borderBottom: '1px solid var(--color-success)',
  },
  warning: {
    background: 'transparent',
    color: 'var(--color-warning)',
    borderBottom: '1px solid var(--color-warning)',
  },
  error: {
    background: 'transparent',
    color: 'var(--color-error)',
    borderBottom: '1px solid var(--color-error)',
  },
  info: {
    background: 'transparent',
    color: 'var(--color-info)',
    borderBottom: '1px solid var(--color-info)',
  },
};

export const Badge = memo(forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, style, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={twMerge(clsx('inline-flex items-center', className))}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.25rem 0.5rem',
          fontSize: '0.6875rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          borderRadius: 0,
          ...variantStyles[variant],
          ...style,
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
));

Badge.displayName = 'Badge';