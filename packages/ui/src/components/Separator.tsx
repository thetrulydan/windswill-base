import { forwardRef, type HTMLAttributes, memo } from 'react';

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator = memo(forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          background: 'var(--color-border)',
          ...(orientation === 'horizontal'
            ? { height: 1, width: '100%' }
            : { width: 1, height: '100%' }),
          ...style,
        }}
        {...props}
      />
    );
  }
));

Separator.displayName = 'Separator';