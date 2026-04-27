import { forwardRef, type ButtonHTMLAttributes } from 'react';

/**
 * Switch - Toggle switch for boolean settings
 *
 * Usage:
 * - label: optional label text
 * - checked: controlled state
 * - disabled: disable interaction
 */

interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'checked'> {
  label?: string;
  checked?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ label, className, style, checked, disabled, onClick, ...rest }, ref) => {
    return (
      <label
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.35 : 1,
        }}
      >
        <button
          ref={ref}
          type="button"
          disabled={disabled}
          onClick={onClick}
          style={{
            width: 44,
            height: 24,
            borderRadius: '9999px',
            border: 'none',
            background: checked ? 'var(--color-text)' : 'var(--color-gray-700)',
            position: 'relative',
            cursor: disabled ? 'not-allowed' : 'pointer',
            ...style,
          }}
          {...rest}
        >
          <span
            style={{
              position: 'absolute',
              top: 2,
              left: checked ? 22 : 2,
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: 'var(--color-background)',
              transition: 'left 0.2s',
            }}
          />
        </button>
        {label && (
          <span style={{ color: 'var(--color-text)', fontSize: '0.9375rem' }}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';