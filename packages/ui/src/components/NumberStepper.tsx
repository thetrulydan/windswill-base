import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Minus, Plus } from 'lucide-react';
import { IconButton } from './IconButton';

interface NumberStepperProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  value: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const NumberStepper = forwardRef<HTMLDivElement, NumberStepperProps>(
  ({ value, onChange, min = 0, max = 100, step = 1, disabled, ...props }, ref) => {
    const handleDecrement = () => {
      if (disabled) return;
      const newValue = Math.max(min, value - step);
      onChange?.(newValue);
    };

    const handleIncrement = () => {
      if (disabled) return;
      const newValue = Math.min(max, value + step);
      onChange?.(newValue);
    };

    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          ...props.style as React.CSSProperties,
        }}
        {...props}
      >
        <IconButton
          icon={Minus}
          size="sm"
          variant="secondary"
          onClick={handleDecrement}
          disabled={disabled || value <= min}
        />
        <span style={{
          minWidth: '2.5rem',
          textAlign: 'center',
          fontSize: '1.125rem',
          color: 'var(--color-text)',
        }}>
          {value}
        </span>
        <IconButton
          icon={Plus}
          size="sm"
          variant="secondary"
          onClick={handleIncrement}
          disabled={disabled || value >= max}
        />
      </div>
    );
  }
);

NumberStepper.displayName = 'NumberStepper';