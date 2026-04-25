import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  labelCase?: 'uppercase' | 'preserve';
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', labelCase, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            {
              'bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] hover:opacity-90':
                variant === 'primary',
              'bg-[var(--color-surface-raised)] text-[var(--color-text)] hover:opacity-80':
                variant === 'secondary',
              'hover:bg-[var(--color-surface-raised)] text-[var(--color-text)]': variant === 'ghost',
              'bg-red-600 text-white hover:bg-red-700': variant === 'destructive',
              'border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-raised)]':
                variant === 'outline',
              'h-8 px-3 text-sm': size === 'sm',
              'h-10 px-4 text-base': size === 'md',
              'h-12 px-6 text-lg': size === 'lg',
              'uppercase tracking-wide': labelCase === 'uppercase',
            },
            className
          )
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';