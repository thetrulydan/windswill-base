import { forwardRef, type SVGAttributes, memo } from 'react';

interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

export const Spinner = memo(forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = 24, className, style, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        style={{
          animation: 'spin 600ms linear infinite',
          color: 'var(--color-text)',
          ...style,
        }}
        className={className}
        {...props}
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="20"
          strokeDashoffset="10"
        />
      </svg>
    );
  }
));

Spinner.displayName = 'Spinner';