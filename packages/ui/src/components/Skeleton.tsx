import { forwardRef, type HTMLAttributes, memo } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export const Skeleton = memo(forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width = '100%', height = '1rem', className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          width,
          height,
          background: 'var(--color-gray-700)',
          animation: 'pulse 1.5s ease-in-out infinite',
          ...style,
        }}
        {...props}
      />
    );
  }
));

Skeleton.displayName = 'Skeleton';