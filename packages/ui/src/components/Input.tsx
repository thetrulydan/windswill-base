import { forwardRef, type InputHTMLAttributes, type ReactNode, useImperativeHandle, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

type InputType = 'text' | 'password' | 'number' | 'search' | 'email';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: InputType;
  leading?: ReactNode;
  trailing?: ReactNode;
  label?: string;
  error?: string | boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', leading, trailing, label, error, className, style, ...props }, ref) => {
    const isNumber = type === 'number';
    const inputRef = useRef<HTMLInputElement>(null);
    
    useImperativeHandle(ref, () => inputRef.current!);
    
    const adjustValue = (delta: number) => {
      const input = inputRef.current;
      if (!input) return;
      const currentVal = input.value === '' ? 0 : parseInt(input.value) || 0;
      const newVal = currentVal + delta;
      input.value = newVal.toString();
      input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {label && (
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', minWidth: '120px' }}>
            {label}
          </span>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${error ? 'var(--color-error)' : 'var(--color-border)'}`,
            padding: '0.5rem',
            transition: 'border-color 150ms ease',
            background: 'transparent',
          }}
        >
          {leading && (
            <span style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem', color: 'var(--color-text-muted)' }}>{leading}</span>
          )}
          <input
            ref={inputRef}
            type={isNumber ? 'text' : type}
            inputMode={isNumber ? 'numeric' : undefined}
            style={{
              flex: 1,
              appearance: 'none',
              WebkitAppearance: 'none',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              color: 'var(--color-text)',
              width: '100%',
              borderRadius: 0,
              cursor: props.readOnly ? 'pointer' : 'text',
              padding: 0,
            }}
            onFocus={(e) => {
              e.currentTarget.parentElement!.style.borderColor = 'var(--color-text)';
            }}
            onBlur={(e) => {
              e.currentTarget.parentElement!.style.borderColor = error ? 'var(--color-error)' : 'var(--color-border)';
            }}
            {...props}
          />
          {isNumber && (
            <span style={{ display: 'flex', flexDirection: 'column', marginLeft: '0.25rem', cursor: 'pointer' }}>
              <ChevronUp 
                size={12} 
                style={{ color: 'var(--color-text-muted)' }}
                onClick={() => adjustValue(1)}
              />
              <ChevronDown 
                size={12} 
                style={{ color: 'var(--color-text-muted)' }}
                onClick={() => adjustValue(-1)}
              />
            </span>
          )}
          {!isNumber && trailing && (
            <span style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-muted)', cursor: 'pointer' }}>{trailing}</span>
          )}
        </div>
        {error && typeof error === 'string' && (
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-error)' }}>{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';