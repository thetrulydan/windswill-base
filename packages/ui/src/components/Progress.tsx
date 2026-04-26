import { forwardRef, type DivHTMLAttributes } from 'react';

interface ProgressProps extends DivHTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, max = 100, className, style, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    
    return (
      <div
        ref={ref}
        style={{
          width: '100%',
          height: 4,
          background: 'var(--color-gray-700)',
          ...style,
        }}
        {...props}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            background: 'var(--color-text)',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';