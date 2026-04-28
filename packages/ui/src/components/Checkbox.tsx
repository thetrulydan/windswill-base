import { forwardRef, type InputHTMLAttributes } from 'react';
import { Check } from 'lucide-react';

/**
 * Checkbox - Boolean toggle input
 *
 * Usage:
 * - label: optional label text
 * - Can forward className/style
 */

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
        <div style={{ position: 'relative', width: 18, height: 18 }}>
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            readOnly={!hasHandler}
            style={{
              position: 'absolute',
              opacity: 0,
              width: 18,
              height: 18,
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
              width: 18,
              height: 18,
              border: '1px solid white',
              background: checked ? 'white' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 150ms ease',
            }}
          >
            <Check
              size={12}
              style={{ 
                color: 'var(--color-background)',
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

Checkbox.displayName = 'Checkbox';