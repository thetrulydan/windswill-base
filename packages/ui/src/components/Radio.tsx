import { forwardRef, type InputHTMLAttributes } from 'react';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, style, checked, onChange, ...props }, ref) => {
    const hasHandler = typeof onChange === 'function';
    
    return (
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: props.disabled ? 'not-allowed' : 'pointer',
          opacity: props.disabled ? 0.35 : 1,
        }}
      >
        <div style={{ position: 'relative', width: '1.125rem', height: '1.125rem' }}>
          <input
            ref={ref}
            type="radio"
            checked={checked}
            onChange={onChange}
            readOnly={!hasHandler}
            style={{
              position: 'absolute',
              opacity: 0,
              width: '1.125rem',
              height: '1.125rem',
              cursor: 'pointer',
              margin: 0,
            }}
            {...props}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1.125rem',
              height: '1.125rem',
              border: '1px solid white',
              borderRadius: '50%',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {checked && (
              <div
                style={{
                  width: '0.625rem',
                  height: '0.625rem',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '0.25rem',
                    height: '0.25rem',
                    background: 'var(--color-text)',
                    borderRadius: '50%',
                  }}
                />
              </div>
            )}
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