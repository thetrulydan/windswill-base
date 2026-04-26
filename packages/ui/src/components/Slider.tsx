import { forwardRef, type InputHTMLAttributes } from 'react';

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ label, className, style, value, ...props }, ref) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {label && (
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            {label}: {value}
          </span>
        )}
        <input
          ref={ref}
          type="range"
          className="slider"
          style={style}
          value={value}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';