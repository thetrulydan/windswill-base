import { type ReactNode } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { Button } from './Button';

type ModalSize = 'sm' | 'md' | 'lg';

interface ModalButton {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'underline' | 'active';
  onClick?: () => void;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: ModalSize;
  showHeader?: boolean;
  showFooter?: boolean;
  footer?: ReactNode;
  primaryButton?: ModalButton;
  secondaryButton?: ModalButton;
  children?: ReactNode;
}

const sizeMap: Record<ModalSize, string> = {
  sm: '400px',
  md: '560px',
  lg: '720px',
};

export function Modal({
  open,
  onClose,
  title,
  description,
  size = 'md',
  showHeader = true,
  showFooter = true,
  footer,
  primaryButton,
  secondaryButton,
  children,
}: ModalProps) {
  if (!open) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const hasFooterButtons = primaryButton || secondaryButton;
  const shouldShowFooter = showFooter && (footer || hasFooterButtons);

  return (
    <>
      <div
        onClick={handleBackdropClick}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 50,
        }}
      />
      <div
        onClick={handleContentClick}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: sizeMap[size],
          maxWidth: '90vw',
          maxHeight: '80vh',
          background: 'var(--color-surface)',
          borderRadius: 0,
          border: '1px solid var(--color-border)',
          zIndex: 51,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {showHeader && (
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 16,
            }}
          >
            <div style={{ flex: 1 }}>
              {title && (
                <span style={{ fontWeight: 600, fontSize: 18, display: 'block' }}>
                  {title}
                </span>
              )}
              {description && (
                <span style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>
                  {description}
                </span>
              )}
            </div>
            <IconButton
              icon={X}
              size="sm"
              onClick={onClose}
              label="Close modal"
            />
          </div>
        )}

        <div style={{ padding: 20, overflow: 'auto', flex: 1 }}>
          {children}
        </div>

        {shouldShowFooter && (
          <div
            style={{
              padding: '12px 20px',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 12,
            }}
          >
            {footer || (
              <>
                {secondaryButton && (
                  <Button
                    variant={secondaryButton.variant || 'ghost'}
                    onClick={secondaryButton.onClick}
                  >
                    {secondaryButton.label}
                  </Button>
                )}
                {primaryButton && (
                  <Button
                    variant={primaryButton.variant || 'primary'}
                    onClick={primaryButton.onClick}
                  >
                    {primaryButton.label}
                  </Button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}