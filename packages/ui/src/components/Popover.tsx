import { type ReactNode, useState, useRef, useEffect, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';
type PopoverSize = 'sm' | 'md' | 'lg';

const popoverWidths: Record<PopoverSize, string> = {
  sm: 'min-w-48',
  md: 'min-w-64',
  lg: 'min-w-96',
};

interface PopoverProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  placement?: PopoverPlacement;
  size?: PopoverSize;
  showClose?: boolean;
  children: ReactNode;
  className?: string;
}

export function Popover({
  open,
  onClose,
  title,
  placement = 'bottom',
  size = 'md',
  showClose = false,
  children,
  className,
}: PopoverProps) {
  if (!open) return null;

  const arrowStyles: Record<PopoverPlacement, CSSProperties> = {
    top: { position: 'absolute', width: 12, height: 12, bottom: -6, left: '50%', marginLeft: -6, transform: 'rotate(45deg)', borderBottom: '1px solid #d4d4d4', borderRight: '1px solid #d4d4d4', background: '#ffffff', overflow: 'visible' },
    right: { position: 'absolute', width: 12, height: 12, left: -6, top: '50%', marginTop: -6, transform: 'rotate(45deg)', borderBottom: '1px solid #d4d4d4', borderLeft: '1px solid #d4d4d4', background: '#ffffff', overflow: 'visible' },
    bottom: { position: 'absolute', width: 12, height: 12, top: -6, left: '50%', marginLeft: -6, transform: 'rotate(45deg)', borderTop: '1px solid #d4d4d4', borderLeft: '1px solid #d4d4d4', background: '#ffffff', overflow: 'visible' },
    left: { position: 'absolute', width: 12, height: 12, right: -6, top: '50%', marginTop: -6, transform: 'rotate(45deg)', borderTop: '1px solid #d4d4d4', borderRight: '1px solid #d4d4d4', background: '#ffffff', overflow: 'visible' },
  };

  return (
    <div className={twMerge(clsx('relative bg-surface border rounded-none p-4', popoverWidths[size], className))} style={{ overflow: 'visible' }}>
      {(title || showClose) && (
        <div className="flex flex-row justify-between items-center mb-2">
          {title && <span className="text-sm font-semibold">{title}</span>}
          {showClose && <IconButton icon={X} size="sm" onClick={onClose} label="Close" />}
        </div>
      )}
      <div className="text-sm text-text-muted">{children}</div>
      <div className="absolute w-3 h-3" style={arrowStyles[placement]} />
    </div>
  );
}

interface AnchorPopoverProps {
  anchor: ReactNode;
  placement?: PopoverPlacement;
  size?: PopoverSize;
  title?: string;
  showClose?: boolean;
  children: ReactNode;
  className?: string;
}

export function AnchorPopover({
  anchor,
  placement = 'bottom',
  size = 'md',
  title,
  showClose,
  children,
  className,
}: AnchorPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);

  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let el = document.getElementById('popover-container');
    if (!el) {
      el = document.createElement('div');
      el.id = 'popover-container';
      el.style.zIndex = '9999';
      document.body.appendChild(el);
    }
    setContainerEl(el);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const offset = 8;
      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = rect.top + window.scrollY - offset;
          left = rect.left + rect.width / 2 + window.scrollX;
          break;
        case 'bottom':
          top = rect.bottom + window.scrollY + offset;
          left = rect.left + rect.width / 2 + window.scrollX;
          break;
        case 'left':
          top = rect.top + rect.height / 2 + window.scrollY;
          left = rect.left + window.scrollX - offset;
          break;
        case 'right':
          top = rect.top + rect.height / 2 + window.scrollY;
          left = rect.right + window.scrollX + offset;
          break;
      }
      setPosition({ top, left });
    }
  }, [isOpen, placement]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const getTransform = () => {
    switch (placement) {
      case 'top':
        return 'translate(-50%, -100%)';
      case 'bottom':
        return 'translate(-50%, 0%)';
      case 'left':
        return 'translate(-100%, -50%)';
      case 'right':
        return 'translate(0%, -50%)';
    }
  };

  const getLeft = () => {
    if (placement === 'top' || placement === 'bottom') {
      return position.left;
    }
    if (placement === 'left') {
      return position.left;
    }
    return position.left;
  };

  const getTop = () => {
    if (placement === 'left' || placement === 'right') {
      return position.top;
    }
    return position.top;
  };

  const popoverWrapper = (
    <div
      style={{
        position: 'absolute',
        top: getTop(),
        left: getLeft(),
        transform: getTransform(),
        overflow: 'visible',
      }}
    >
      <Popover
        open={isOpen}
        onClose={() => setIsOpen(false)}
        placement={placement}
        size={size}
        showArrow={true}
        title={title}
        showClose={showClose}
      >
        {children}
      </Popover>
    </div>
  );

  return (
    <>
      <div ref={triggerRef} onClick={handleClick} style={{ position: 'relative', display: 'inline-block', boxSizing: 'border-box' }}>
        {anchor}
      </div>
      {isOpen && containerEl && createPortal(popoverWrapper, containerEl)}
    </>
  );
}