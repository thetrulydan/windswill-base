import { forwardRef, type HTMLAttributes } from 'react';
import { X } from 'lucide-react';

interface TagChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  onRemove?: () => void;
}

export const TagChip = forwardRef<HTMLSpanElement, TagChipProps>(
  ({ label, onRemove, className, style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.25rem 0.5rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderRadius: 0,
          background: 'var(--color-surface)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
          ...style,
        }}
        {...props}
      >
        {label}
        {onRemove && (
          <X
            size={12}
            style={{ cursor: 'pointer', opacity: 0.6 }}
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          />
        )}
      </span>
    );
  }
);

TagChip.displayName = 'TagChip';