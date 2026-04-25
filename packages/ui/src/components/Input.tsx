import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type InputType = 'text' | 'password' | 'number' | 'search' | 'email';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: InputType;
  leading?: ReactNode;
  trailing?: ReactNode;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', leading, trailing, error, className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          clsx(
            'relative flex items-center rounded-md border bg-[var(--color-surface)] transition-colors',
            'focus-within:ring-2 focus-within:ring-offset-2',
            error
              ? 'border-red-500 focus-within:ring-red-500'
              : 'border-[var(--color-border)] focus-within:ring-[var(--color-text)]'
          )
        )}
      >
        {leading && (
          <span className="absolute left-3 text-[var(--color-text-muted)]">{leading}</span>
        )}
        <input
          ref={ref}
          type={type}
          className={twMerge(
            clsx(
              'flex-1 bg-transparent px-3 py-2 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              leading && 'pl-10',
              trailing && 'pr-10',
              className
            )
          )}
          {...props}
        />
        {trailing && (
          <span className="absolute right-3 text-[var(--color-text-muted)]">{trailing}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';