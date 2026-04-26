import { forwardRef, type InputHTMLAttributes } from 'react';

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
        <input
          ref={ref}
          type="radio"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          style={{
            width: '1.125rem',
            height: '1.125rem',
            accentColor: 'var(--color-text)',
          }}
          {...props}
        />
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