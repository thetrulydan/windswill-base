import { type ReactNode, useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';

type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';

interface PopoverProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  placement?: PopoverPlacement;
  showArrow?: boolean;
  showClose?: boolean;
  children: ReactNode;
}

const arrowPosition: Record<PopoverPlacement, React.CSSProperties> = {
  top: { bottom: -6, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
  right: { left: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
  bottom: { top: -6, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
  left: { right: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
};

export function Popover({
  open,
  onClose,
  title,
  placement = 'bottom',
  showArrow = true,
  showClose = false,
  children,
}: PopoverProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'relative',
        padding: placement === 'top' || placement === 'bottom' ? '16px 0' : '0 16px',
      }}
    >
      <div
        style={{
          position: 'relative',
          padding: 16,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 0,
          minWidth: 200,
        }}
      >
        {(title || showClose) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: title ? 8 : 0,
            }}
          >
            {title && (
              <span style={{ fontWeight: 600, fontSize: 14 }}>
                {title}
              </span>
            )}
            {showClose && (
              <IconButton
                icon={X}
                size="sm"
                onClick={onClose}
                label="Close"
              />
            )}
          </div>
        )}
        <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
          {children}
        </div>

        {showArrow && (
          <div
            style={{
              position: 'absolute',
              width: 12,
              height: 12,
              background: 'var(--color-surface)',
              borderRight: placement === 'top' || placement === 'bottom' ? '1px solid var(--color-border)' : undefined,
              borderBottom: placement === 'top' || placement === 'left' ? '1px solid var(--color-border)' : undefined,
              borderLeft: placement === 'bottom' || placement === 'right' ? '1px solid var(--color-border)' : undefined,
              borderTop: placement === 'left' || placement === 'top' ? '1px solid var(--color-border)' : undefined,
              ...arrowPosition[placement],
            }}
          />
        )}
      </div>
    </div>
  );
}

interface AnchorPopoverProps extends Omit<PopoverProps, 'open' | 'onClose'> {
  anchor: ReactNode;
  onOpen?: () => void;
}

export function AnchorPopover({
  anchor,
  onOpen,
  placement = 'bottom',
  ...props
}: AnchorPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      <div onClick={() => { setIsOpen(true); onOpen?.(); }}>
        {anchor}
      </div>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            ...(placement === 'top' ? { bottom: 'calc(100% + 8px)' } : {}),
            ...(placement === 'bottom' ? { top: 'calc(100% + 8px)' } : {}),
            ...(placement === 'left' ? { right: 'calc(100% + 8px)' } : {}),
            ...(placement === 'right' ? { left: 'calc(100% + 8px)' } : {}),
            left: placement === 'left' || placement === 'right' ? 'auto' : '50%',
            top: placement === 'top' || placement === 'bottom' ? 'auto' : '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
          }}
        >
          <Popover
            open={isOpen}
            onClose={() => setIsOpen(false)}
            placement={placement}
            {...props}
          />
        </div>
      )}
    </div>
  );
}