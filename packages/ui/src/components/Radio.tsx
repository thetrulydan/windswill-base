import { forwardRef, type InputHTMLAttributes } from 'react';

/**
 * Radio - Single selection in a group
 *
 * Usage:
 * - label: optional label text
 * - Use same name prop for grouping
 */

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, style, checked, disabled, onChange, ...props }, ref) => {
    return (
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.35 : 1,
          ...style,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '1.125rem',
            height: '1.125rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            ref={ref}
            type="radio"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            style={{
              position: 'absolute',
              opacity: 0,
              width: '1.125rem',
              height: '1.125rem',
              margin: 0,
              cursor: 'pointer',
            }}
            {...props}
          />
          <div
            style={{
              width: '1.125rem',
              height: '1.125rem',
              borderRadius: '50%',
              border: '1px solid var(--color-text-muted)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 150ms ease',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--color-text)',
                opacity: checked ? 1 : 0,
                transition: 'opacity 150ms ease',
              }}
            />
          </div>
        </div>
        {label && (
          <span style={{ color: 'var(--color-text)', fontSize: '0.9375rem' }}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';