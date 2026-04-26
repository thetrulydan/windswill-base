import { type ReactNode } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { Button } from './Button';

type DrawerEdge = 'top' | 'right' | 'bottom' | 'left';

interface DrawerButton {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'underline' | 'active';
  onClick?: () => void;
}

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  edge?: DrawerEdge;
  title?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  footer?: ReactNode;
  primaryButton?: DrawerButton;
  secondaryButton?: DrawerButton;
  children?: ReactNode;
}

const dimensionMap: Record<DrawerEdge, { width?: string; height?: string }> = {
  top: { height: '240px' },
  bottom: { height: '240px' },
  left: { width: '360px' },
  right: { width: '360px' },
};

const borderMap: Record<DrawerEdge, string> = {
  top: 'borderBottom',
  bottom: 'borderTop',
  left: 'borderRight',
  right: 'borderLeft',
};

export function Drawer({
  open,
  onClose,
  edge = 'right',
  title,
  showHeader = true,
  showFooter = true,
  footer,
  primaryButton,
  secondaryButton,
  children,
}: DrawerProps) {
  if (!open) return null;

  const dimensions = dimensionMap[edge];
  const border = borderMap[edge];
  const hasFooterButtons = primaryButton || secondaryButton;
  const shouldShowFooter = showFooter && (footer || hasFooterButtons);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 40,
        }}
      />
      <div
        style={{
          position: 'fixed',
          [edge]: 0,
          top: edge === 'left' || edge === 'right' ? 0 : undefined,
          bottom: edge === 'left' || edge === 'right' ? 0 : undefined,
          width: edge === 'top' || edge === 'bottom' ? '100%' : dimensions.width,
          height: edge === 'left' || edge === 'right' ? '100%' : dimensions.height,
          background: 'var(--color-surface)',
          [border]: '1px solid var(--color-border)',
          zIndex: 41,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {showHeader && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <span style={{ fontWeight: 600 }}>{title || 'Drawer'}</span>
            <IconButton
              icon={X}
              size="sm"
              onClick={onClose}
              label="Close drawer"
            />
          </div>
        )}

        <div style={{ padding: 20, flex: 1, overflow: 'auto' }}>
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
                    size="sm"
                    onClick={secondaryButton.onClick}
                  >
                    {secondaryButton.label}
                  </Button>
                )}
                {primaryButton && (
                  <Button
                    variant={primaryButton.variant || 'primary'}
                    size="sm"
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