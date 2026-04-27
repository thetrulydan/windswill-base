import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { LucideIcon } from 'lucide-react';

/**
 * IconButton - Icon-only button
 *
 * Variants:
 * - primary, secondary, ghost, destructive: standard icon buttons
 * - fab, fab-secondary, fab-ghost, fab-destructive: floating action buttons (round, larger)
 *
 * Sizes:
 * - sm (28px), md (36px), lg (48px) for standard
 * - fab-sm (40px), fab-md (56px), fab-lg (72px) for FAB
 */

type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'fab' | 'fab-primary' | 'fab-secondary' | 'fab-ghost' | 'fab-destructive';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  variant?: IconButtonVariant;
  size?: 'sm' | 'md' | 'lg' | 'fab-sm' | 'fab-md' | 'fab-lg';
  label?: string;
}

const sizeMap = {
  sm: 28,
  md: 36,
  lg: 48,
  'fab-sm': 40,
  'fab-md': 56,
  'fab-lg': 72,
};

const iconSizeMap = {
  sm: 14,
  md: 18,
  lg: 24,
  'fab-sm': 18,
  'fab-md': 24,
  'fab-lg': 32,
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, variant = 'ghost', size = 'md', label, className, style, disabled, onMouseEnter, onMouseLeave, ...rest }, ref) => {
    const dimension = sizeMap[size];

    const getBaseStyles = (): React.CSSProperties => {
      const base: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        color: 'var(--color-text-muted)',
      };

      if (variant === 'primary') {
        base.border = '1px solid var(--color-text-muted)';
      } else if (variant === 'secondary') {
        base.borderBottom = '1px solid var(--color-text-muted)';
      } else if (variant === 'destructive') {
        base.color = 'var(--color-error)';
      } else if (variant?.startsWith('fab')) {
        base.borderRadius = '50%';
        if (variant === 'fab-primary') {
          base.border = '1px solid var(--color-text-muted)';
          base.background = 'var(--color-background)';
          base.color = 'var(--color-text-muted)';
        } else if (variant === 'fab') {
          base.background = 'var(--color-text)';
          base.color = 'var(--color-background)';
        } else if (variant === 'fab-secondary') {
          base.color = 'var(--color-text-muted)';
        } else if (variant === 'fab-ghost') {
          base.color = 'var(--color-text)';
        } else if (variant === 'fab-destructive') {
          base.background = 'var(--color-error)';
          base.color = 'var(--color-background)';
        }
      }

      return base;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (variant === 'primary' || variant === 'secondary') {
        e.currentTarget.style.background = 'var(--color-gray-700)';
        e.currentTarget.style.color = 'var(--color-text)';
        e.currentTarget.style.borderColor = 'var(--color-gray-700)';
      } else if (variant === 'ghost') {
        e.currentTarget.style.background = 'var(--color-surface-hover)';
        e.currentTarget.style.color = 'var(--color-text)';
      } else if (variant === 'destructive') {
        e.currentTarget.style.background = 'var(--color-error)';
        e.currentTarget.style.color = 'var(--color-background)';
      } else if (variant === 'fab-primary') {
        e.currentTarget.style.border = 'none';
        e.currentTarget.style.background = 'var(--color-gray-700)';
        e.currentTarget.style.color = 'var(--color-text)';
      } else if (variant?.startsWith('fab') && variant !== 'fab' && variant !== 'fab-primary') {
        e.currentTarget.style.background = variant === 'fab-destructive' ? 'var(--color-error)' : 'var(--color-surface-raised)';
        e.currentTarget.style.color = variant === 'fab-destructive' ? 'var(--color-background)' : 'var(--color-text)';
      }
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (variant === 'primary' || variant === 'secondary') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--color-text-muted)';
        e.currentTarget.style.borderColor = 'var(--color-text-muted)';
      } else if (variant === 'ghost') {
        e.currentTarget.style.background = 'transparent';
      } else if (variant === 'destructive') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--color-error)';
      } else if (variant === 'fab-primary') {
        e.currentTarget.style.border = '1px solid var(--color-text-muted)';
        e.currentTarget.style.background = 'var(--color-background)';
        e.currentTarget.style.color = 'var(--color-text-muted)';
      } else if (variant === 'fab') {
        e.currentTarget.style.background = 'var(--color-text)';
        e.currentTarget.style.color = 'var(--color-background)';
      } else if (variant === 'fab-secondary') {
        e.currentTarget.style.color = 'var(--color-text-muted)';
      } else if (variant === 'fab-ghost') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--color-text)';
      } else if (variant === 'fab-destructive') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--color-error)';
      }
      onMouseLeave?.(e);
    };

    return (
      <button
        ref={ref}
        className={twMerge(clsx('inline-flex items-center justify-center', className))}
        style={{
          width: dimension,
          height: dimension,
          background: 'transparent',
          ...getBaseStyles(),
          ...style,
        }}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title={label}
        {...rest}
      >
        <Icon size={iconSizeMap[size]} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';