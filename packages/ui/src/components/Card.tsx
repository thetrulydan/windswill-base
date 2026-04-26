import { forwardRef, type HTMLAttributes, type ReactNode, memo } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = memo(forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(clsx('relative', className))}
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 0,
          overflow: 'hidden',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
));

Card.displayName = 'Card';

export const CardHeader = memo(forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(clsx(className))}
        style={{
          padding: '0.75rem 1rem',
          borderBottom: '1px solid var(--color-border)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
));

CardHeader.displayName = 'CardHeader';

export const CardBody = memo(forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(clsx(className))}
        style={{
          padding: '1rem',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
));

CardBody.displayName = 'CardBody';

export const CardFooter = memo(forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(clsx(className))}
        style={{
          padding: '0.75rem 1rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.5rem',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
));

CardFooter.displayName = 'CardFooter';