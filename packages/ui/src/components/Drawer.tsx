import { type ReactNode } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { Button } from './Button';
import { Text } from './Text';

/**
 * Drawer - Slide-in panel from screen edge
 *
 * Usage:
 * - open: controls visibility
 * - onClose: callback when backdrop/close btn clicked
 * - edge: top | right (default) | bottom | left
 * - title: header title
 * - primaryButton, secondaryButton: footer action buttons
 *
 * Uses IconButton for close button, Button for actions.
 * Similar structure to Modal but slides from edge.
 */

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
        className="bg-surface"
        style={{
          position: 'fixed',
          [edge]: 0,
          ...(edge === 'left' || edge === 'right' ? { top: 0, bottom: 0, width: dimensions.width } : { left: 0, width: '100%', height: dimensions.height }),
          [border]: '1px solid var(--color-border)',
          zIndex: 41,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {showHeader && (
          <div className="flex justify-between items-center p-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <Text style={{ fontWeight: 600 }}>
              {title || 'Drawer'}
            </Text>
            <IconButton
              icon={X}
              size="sm"
              onClick={onClose}
              label="Close drawer"
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