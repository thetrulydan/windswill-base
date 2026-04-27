import { type ReactNode, useState, useRef, useEffect, cloneElement, isValidElement, useLayoutEffect } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Popover - Anchored overlay with directional pointer
 *
 * Usage:
 * - Popover: controlled popover component (open/onClose managed externally)
 * - AnchorPopover: self-controlled anchored popover with trigger anchor
 * - placement: top/right/bottom/left - direction the arrow points
 * - size: sm/md/lg - width of the popover (default: md)
 * - showArrow: show the directional pointer
 * - showClose: show close button
 *
 * Uses semantic colors: bg-surface, border-border, text-text-muted
 */

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
  showArrow?: boolean;
  showClose?: boolean;
  children: ReactNode;
  className?: string;
}

const arrowStyles: Record<PopoverPlacement, React.CSSProperties> = {
  top: { position: 'absolute' as const, width: 12, height: 12, bottom: -6, left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderBottom: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)', background: 'var(--color-surface)' },
  right: { position: 'absolute' as const, width: 12, height: 12, left: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)', borderBottom: '1px solid var(--color-border)', borderLeft: '1px solid var(--color-border)', background: 'var(--color-surface)' },
  bottom: { position: 'absolute' as const, width: 12, height: 12, top: -6, left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderTop: '1px solid var(--color-border)', borderLeft: '1px solid var(--color-border)', background: 'var(--color-surface)' },
  left: { position: 'absolute' as const, width: 12, height: 12, right: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)', borderTop: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)', background: 'var(--color-surface)' },
};

export function Popover({
  open,
  onClose,
  title,
  placement = 'bottom',
  size = 'md',
  showArrow = true,
  showClose = false,
  children,
  className,
}: PopoverProps) {
  if (!open) return null;

  return (
    <div className={twMerge(clsx('relative', className))}>
      <div className={twMerge(clsx('relative bg-surface border rounded-none p-4', popoverWidths[size]))}>
        {(title || showClose) && (
          <div className="flex flex-row justify-between items-center mb-2">
            {title && (
              <span className="text-sm font-semibold">
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
        <div className="text-sm text-text-muted">
          {children}
        </div>

        {showArrow && (
          <div
            className="absolute w-3 h-3 bg-surface"
            style={arrowStyles[placement]}
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
  className,
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

  const anchorRef = useRef<HTMLElement>(null);
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});

  const updatePopoverPosition = () => {
    if (!anchorRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const anchorRect = anchorRef.current.getBoundingClientRect();

    const anchorRelLeft = anchorRect.left - containerRect.left;
    const anchorRelTop = anchorRect.top - containerRect.top;
    const anchorWidth = anchorRect.width;
    const anchorHeight = anchorRect.height;

    const base: React.CSSProperties = { position: 'absolute', zIndex: 100 };

    switch (placement) {
      case 'top':
        setPopoverStyle({
          ...base,
          left: anchorRelLeft + anchorWidth / 2,
          transform: 'translateX(-50%)',
          bottom: containerRect.height - anchorRelTop + 8,
        });
        break;
      case 'right':
        setPopoverStyle({
          ...base,
          left: anchorRelLeft + anchorWidth + 8,
          top: anchorRelTop + anchorHeight / 2,
          transform: 'translateY(-50%)',
        });
        break;
      case 'bottom':
        setPopoverStyle({
          ...base,
          left: anchorRelLeft + anchorWidth / 2,
          transform: 'translateX(-50%)',
          top: anchorRelTop + anchorHeight + 8,
        });
        break;
      case 'left':
        setPopoverStyle({
          ...base,
          right: containerRect.width - anchorRelLeft + 8,
          top: anchorRelTop + anchorHeight / 2,
          transform: 'translateY(-50%)',
        });
        break;
      default:
        setPopoverStyle(base);
    }
  };

  useLayoutEffect(() => {
    if (isOpen) {
      updatePopoverPosition();
      const handleResize = () => updatePopoverPosition();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    } else {
      setPopoverStyle({});
    }
  }, [isOpen, placement]);

  const handleTriggerClick = () => {
    setIsOpen(true);
    onOpen?.();
  };

  return (
    <div ref={containerRef} className={twMerge(clsx('relative inline-block', className))}>
      {isValidElement(anchor)
        ? cloneElement(anchor, {
            ref: (node: HTMLElement) => {
              anchorRef.current = node;
              const originalRef = (anchor as any).ref;
              if (typeof originalRef === 'function') {
                originalRef(node);
              } else if (originalRef && 'current' in originalRef) {
                (originalRef as React.MutableRefObject<HTMLElement>).current = node;
              }
            },
            onClick: (e: any) => {
              const originalOnClick = (anchor as any).props?.onClick;
              if (originalOnClick) originalOnClick(e);
              handleTriggerClick();
            },
          } as any)
        : (
          <div className="cursor-pointer" onClick={handleTriggerClick} ref={anchorRef}>
            {anchor}
          </div>
        )}
      {isOpen && (
        <div style={popoverStyle}>
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