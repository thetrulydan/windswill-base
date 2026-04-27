import { forwardRef, type InputHTMLAttributes, type ReactNode, useImperativeHandle, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

/**
 * Input - Text input field with optional leading/trailing elements
 *
 * Usage:
 * - Use leading/trailing for icons or buttons inside the input
 * - Use error prop for validation messaging
 * - Can forward className/style for custom styling
 */

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

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const adjustValue = (delta: number) => {
      const input = inputRef.current;
      if (!input) return;
      const currentVal = input.value === '' ? 0 : parseInt(input.value) || 0;
      const newVal = currentVal + delta;
      input.value = newVal.toString();
      input.dispatchEvent(new Event('input', { bubbles: true }));
    };

    return (
      <div className={clsx('flex flex-col gap-1', className)} style={style}>
        {label && (
          <span className="text-sm text-text-muted min-w-[7.5rem]">
            {label}
          </span>
        )}
        <div
          className={clsx('flex items-center border rounded-none p-2 h-10', error ? 'border-error' : 'border-border')}
          style={{
            transition: 'border-color 150ms ease',
          }}
        >
          {leading && (
            <span className="flex items-center gap-2 text-text-muted">{leading}</span>
          )}
          <input
            ref={inputRef}
            type={isNumber ? 'text' : type}
            inputMode={isNumber ? 'numeric' : undefined}
            className="flex-1 appearance-none bg-transparent border-none outline-none focus:outline-none text-base text-text w-full cursor-text"
            onFocus={(e) => {
              e.currentTarget.parentElement!.style.borderColor = 'var(--color-text)';
            }}
            onBlur={(e) => {
              e.currentTarget.parentElement!.style.borderColor = error ? 'var(--color-error)' : 'var(--color-border)';
            }}
            {...props}
          />
          {isNumber && (
            <div className="flex flex-col gap-1 cursor-pointer" style={{ lineHeight: 1 }}>
              <ChevronUp size={12} className="text-text-muted" onClick={() => adjustValue(1)} />
              <ChevronDown size={12} className="text-text-muted" onClick={() => adjustValue(-1)} />
            </div>
          )}
          {!isNumber && trailing && (
            <span className="flex items-center gap-2 text-text-muted cursor-pointer">{trailing}</span>
          )}
        </div>
        {error && typeof error === 'string' && (
          <span className="text-xs text-error">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';