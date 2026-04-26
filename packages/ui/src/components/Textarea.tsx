import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, style, ...props }, ref) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {label && (
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', minWidth: '120px' }}>
            {label}
          </span>
        )}
        <textarea
          ref={ref}
          className={twMerge(clsx('focus-visible:outline-none', className))}
          style={{
            width: '100%',
            minHeight: 100,
            padding: '0.5rem',
            fontSize: '1rem',
            color: 'var(--color-text)',
            fontFamily: 'inherit',
            background: 'transparent',
            borderRadius: 0,
            border: `1px solid ${error ? 'var(--color-error)' : 'var(--color-border)'}`,
            outline: 'none',
            resize: 'vertical',
            appearance: 'none',
            WebkitAppearance: 'none',
            transition: 'border-color 150ms ease',
            ...style,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-text)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? 'var(--color-error)' : 'var(--color-border)';
          }}
          {...props}
        />
        {error && typeof error === 'string' && (
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-error)' }}>{error}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';