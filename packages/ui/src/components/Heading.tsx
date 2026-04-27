import { forwardRef, type ReactNode, type HTMLAttributes, memo } from 'react';
import { clsx } from 'clsx';

/**
 * Heading - Typography heading component
 *
 * Usage:
 * - level: 1-6 (h1 through h6)
 * - Uses text-text semantic color
 */

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

const headingSizes = {
  1: 'text-3xl font-bold leading-[1.2]',
  2: 'text-2xl font-bold leading-[1.2]',
  3: 'text-xl font-bold leading-[1.2]',
  4: 'text-lg font-bold leading-[1.2]',
  5: 'text-base font-bold leading-[1.2]',
  6: 'text-sm font-bold leading-[1.2]',
};

export const Heading = memo(forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, className, children, ...props }, ref) => {
    const Tag = `h${level}` as const;
    return (
      <Tag
        ref={ref}
        className={clsx(headingSizes[level], className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
));

Heading.displayName = 'Heading';