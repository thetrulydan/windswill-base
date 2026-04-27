import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { LucideIcon } from 'lucide-react';

/**
 * Button - Foundation component for actions
 *
 * Usage in other components:
 * - Pass only the props you need: variant, size, onClick, children
 * - Do NOT blindly forward className/style unless you actually use them
 * - Using className/style from parent can override button styles unexpectedly
 *
 * Props:
 * - variant: primary | secondary | ghost | destructive | noPadding | active | underline
 * - size: sm (2rem), md (2.5rem), lg (3rem)
 * - icon: pass a lucide-react icon component to show icon + children
 * - loading: show spinner instead of children
 * - disabled: disable the button
 *
 * Example with icon:
 *   import { Plus } from 'lucide-react';
 *   <Button icon={Plus}>Add Item</Button>
 */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'noPadding' | 'active';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  loading?: boolean;
  icon?: LucideIcon;
}

const sizeStyles = {
  sm: 'h-8 px-2 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

const underlineSizes = {
  sm: 'py-1 text-xs',
  md: 'py-2 text-sm',
  lg: 'py-3 text-base',
};

const iconSizes = {
  sm: 14,
  md: 16,
  lg: 18,
};

const Spinner = ({ size = 'md' }: { size?: ButtonSize }) => {
  const sizeMap = { sm: 14, md: 18, lg: 22 };
  return (
    <svg
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        animation: 'spin 600ms linear infinite',
        color: 'var(--color-text)',
      }}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="20"
        strokeDashoffset="10"
      />
    </svg>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, loading, icon: Icon, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;
    
    const getBaseStyles = (): React.CSSProperties => {
      const styles: React.CSSProperties = {
        appearance: 'none',
        WebkitAppearance: 'none',
        background: 'transparent',
        borderRadius: 0,
        color: 'var(--color-text-muted)',
        transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      };

      if (variant === 'primary') {
        styles.border = '1px solid var(--color-text-muted)';
      } else if (variant === 'secondary') {
        styles.borderTop = '0px';
        styles.borderRight = '0px';
        styles.borderLeft = '0px';
        styles.borderBottom = '1px solid var(--color-text-muted)';
      } else if (variant === 'underline') {
        styles.border = 'none';
        styles.height = 'auto';
        styles.padding = '0.125rem 0';
      } else if (variant === 'destructive' || variant === 'noPadding' || variant === 'active' || variant === 'ghost') {
        styles.border = 'none';
      }

      if (variant === 'destructive') {
        styles.color = 'var(--color-error)';
      }
      
      if (variant === 'noPadding') {
        styles.padding = '0';
      }

      if (variant === 'active') {
        styles.background = 'var(--color-gray-700)';
        styles.color = 'var(--color-text)';
      }

      if (isDisabled) {
        styles.opacity = '0.35';
        styles.cursor = 'not-allowed';
      }

      return styles;
    };

    const renderContent = () => {
      if (loading) {
        return <Spinner size={size} />;
      }
      if (Icon) {
        return (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Icon size={iconSizes[size]} />
            {children}
          </span>
        );
      }
      return children;
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            'inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none',
            variant === 'underline' ? underlineSizes[size] : sizeStyles[size],
            className
          )
        )}
        style={getBaseStyles()}
        disabled={isDisabled}
        onMouseEnter={(e) => {
          if (isDisabled) return;
          e.currentTarget.style.cursor = 'pointer';
          if (variant === 'primary' || variant === 'secondary') {
            e.currentTarget.style.background = 'var(--color-gray-700)';
            e.currentTarget.style.color = 'var(--color-text)';
            if (variant === 'primary') {
              e.currentTarget.style.borderColor = 'var(--color-gray-700)';
            } else {
              e.currentTarget.style.borderBottomColor = 'var(--color-gray-700)';
            }
          } else if (variant === 'ghost') {
            e.currentTarget.style.background = 'var(--color-surface-hover)';
            e.currentTarget.style.color = 'var(--color-text)';
          } else if (variant === 'destructive') {
            e.currentTarget.style.background = 'var(--color-error)';
            e.currentTarget.style.color = 'var(--color-background)';
          } else if (variant === 'underline') {
            e.currentTarget.style.boxShadow = '0 1px 0 var(--color-text)';
            e.currentTarget.style.color = 'var(--color-text)';
          }
        }}
        onMouseLeave={(e) => {
          if (isDisabled) return;
          e.currentTarget.style.cursor = 'auto';
          if (variant === 'primary' || variant === 'secondary') {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--color-text-muted)';
            if (variant === 'primary') {
              e.currentTarget.style.borderColor = 'var(--color-text-muted)';
            } else {
              e.currentTarget.style.borderBottomColor = 'var(--color-text-muted)';
            }
          } else if (variant === 'ghost') {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--color-text-muted)';
          } else if (variant === 'destructive') {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--color-error)';
          } else if (variant === 'underline') {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.color = 'var(--color-text-muted)';
          }
        }}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = 'Button';