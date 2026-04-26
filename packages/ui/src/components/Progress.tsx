import { forwardRef, type HTMLAttributes, memo } from 'react';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

export const Progress = memo(forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, max = 100, className, style, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={className}
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
));

Progress.displayName = 'Progress';