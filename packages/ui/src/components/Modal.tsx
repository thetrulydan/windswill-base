import { type ReactNode } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { Button } from './Button';
import { Heading } from './Heading';
import { Text } from './Text';

/**
 * Modal - Dialog overlay component
 *
 * Usage:
 * - open: controls visibility
 * - onClose: callback when backdrop close btn clicked
 * - title, description: header content
 * - size: sm (400px), md (560px), lg (720px)
 * - primaryButton, secondaryButton: footer action buttons
 *
 * Uses IconButton for close button, Button for actions.
 */

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
        className="bg-surface border border-border"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: sizeMap[size],
          maxWidth: '90vw',
          maxHeight: '80vh',
          zIndex: 51,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {showHeader && (
          <div className="flex justify-between items-start gap-4 p-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ flex: 1 }}>
              {title && (
                <Text style={{ fontWeight: 600, fontSize: 18, display: 'block' }}>
                  {title}
                </Text>
              )}
              {description && (
                <Text variant="muted" style={{ fontSize: 14 }}>
                  {description}
                </Text>
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

        <div className="p-5" style={{ flex: 1, overflow: 'auto' }}>
          {children}
        </div>

        {shouldShowFooter && (
          <div className="flex justify-end gap-3 p-3" style={{ borderTop: '1px solid var(--color-border)' }}>
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