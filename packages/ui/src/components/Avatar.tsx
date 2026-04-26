import { forwardRef, type HTMLAttributes } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
}

const sizeMap = {
  sm: 32,
  md: 40,
  lg: 64,
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, size = 'md', className, style, ...props }, ref) => {
    const dimension = sizeMap[size];
    const initials = fallback 
      ? fallback.slice(0, 2).toUpperCase() 
      : alt 
        ? alt.slice(0, 2).toUpperCase() 
        : '?';

    return (
      <div
        ref={ref}
        className={className}
        style={{
          width: dimension,
          height: dimension,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          fontSize: size === 'sm' ? '0.75rem' : size === 'md' ? '0.875rem' : '1.25rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          ...style,
        }}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          initials
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';