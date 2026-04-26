import { forwardRef, type HTMLAttributes, type ReactNode, memo } from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
}

const variantConfig: Record<AlertVariant, { icon: typeof Info; color: string }> = {
  info: { icon: Info, color: 'var(--color-info)' },
  success: { icon: CheckCircle, color: 'var(--color-success)' },
  warning: { icon: AlertCircle, color: 'var(--color-warning)' },
  error: { icon: XCircle, color: 'var(--color-error)' },
};

export const Alert = memo(forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, children, className, style, ...props }, ref) => {
    const { icon: Icon, color } = variantConfig[variant];

    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          gap: '0.75rem',
          padding: '1rem',
          borderLeft: `2px solid ${color}`,
          background: 'var(--color-surface)',
          ...style,
        }}
        {...props}
      >
        <Icon size={20} style={{ color, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          {title && (
            <div style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--color-text)' }}>
              {title}
            </div>
          )}
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
));

Alert.displayName = 'Alert';