import { forwardRef, type InputHTMLAttributes } from 'react';

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ label, className, style, ...props }, ref) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {label && (
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            {label}: {props.value}
          </span>
        )}
        <input
          ref={ref}
          type="range"
          className="slider"
          style={style}
          {...props}
        />
        <style>{`
          .slider {
            width: 100%;
            height: 2px;
            appearance: none;
            -webkit-appearance: none;
            background: var(--color-gray-700);
            border-radius: 0;
            cursor: pointer;
          }
          .slider::-webkit-slider-thumb {
            appearance: none;
            -webkit-appearance: none;
            width: 1rem;
            height: 1rem;
            background: var(--color-background);
            border: 1px solid white;
            border-radius: 50%;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 1rem;
            height: 1rem;
            background: var(--color-background);
            border: 1px solid white;
            border-radius: 50%;
            cursor: pointer;
            border: none;
          }
          .slider:active::-webkit-slider-thumb {
            background: white;
            border-color: white;
          }
          .slider:active::-moz-range-thumb {
            background: white;
          }
        `}</style>
      </div>
    );
  }
);

Slider.displayName = 'Slider';