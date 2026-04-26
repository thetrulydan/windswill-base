import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { LucideIcon } from 'lucide-react';

type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  variant?: IconButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const sizeMap = {
  sm: 28,
  md: 36,
  lg: 48,
};

const iconSizeMap = {
  sm: 14,
  md: 18,
  lg: 24,
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
      }

      return base;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (variant === 'primary' || variant === 'secondary') {
        e.currentTarget.style.color = 'var(--color-text)';
        e.currentTarget.style.borderColor = 'var(--color-gray-700)';
      } else if (variant === 'ghost') {
        e.currentTarget.style.background = 'var(--color-surface-hover)';
        e.currentTarget.style.color = 'var(--color-text)';
      } else if (variant === 'destructive') {
        e.currentTarget.style.background = 'var(--color-error)';
        e.currentTarget.style.color = 'var(--color-background)';
      }
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      e.currentTarget.style.color = 'var(--color-text-muted)';
      if (variant === 'primary' || variant === 'secondary') {
        e.currentTarget.style.borderColor = 'var(--color-text-muted)';
      } else if (variant === 'ghost') {
        e.currentTarget.style.background = 'transparent';
      } else if (variant === 'destructive') {
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