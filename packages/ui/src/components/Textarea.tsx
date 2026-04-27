import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Textarea - Multi-line text input
 *
 * Usage:
 * - label: optional label above
 * - error: validation message
 * - Can forward className/style
 */

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, style, ...props }, ref) => {
    return (
      <div className={twMerge(clsx('flex flex-col gap-1', className))} style={style}>
        {label && (
          <span className="text-sm text-text-muted min-w-[7.5rem]">
            {label}
          </span>
        )}
        <textarea
          ref={ref}
          className={twMerge(clsx('w-full min-h-[100px] p-2 text-base text-text bg-transparent border rounded-none appearance-none outline-none resize-y transition-colors', error ? 'border-error' : 'border-border'), className)}
          onFocus={(e) => {
            e.currentTarget.classList.remove('border-error', 'border-border');
            e.currentTarget.classList.add('border-text');
          }}
          onBlur={(e) => {
            e.currentTarget.classList.remove('border-text');
            e.currentTarget.classList.add(error ? 'border-error' : 'border-border');
          }}
          {...props}
        />
        {error && typeof error === 'string' && (
          <span className="text-xs text-error">{error}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';