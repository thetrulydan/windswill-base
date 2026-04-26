import { type ReactNode, useState } from 'react';

type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

interface TooltipProps {
  content: string;
  placement?: TooltipPlacement;
  children: ReactNode;
}

const positionMap: Record<TooltipPlacement, { top?: string; bottom?: string; left?: string; right?: string }> = {
  top: { bottom: 'calc(100% + 8px)' },
  bottom: { top: 'calc(100% + 8px)' },
  left: { right: 'calc(100% + 8px)' },
  right: { left: 'calc(100% + 8px)' },
};

const arrowPositionMap: Record<TooltipPlacement, { top?: string; bottom?: string; left?: string; right?: string }> = {
  top: { top: '-4px' },
  bottom: { bottom: '-4px' },
  left: { left: '-4px' },
  right: { right: '-4px' },
};

export function Tooltip({ content, placement = 'top', children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          style={{
            position: 'absolute',
            ...positionMap[placement],
            left: placement === 'left' || placement === 'right' ? 'auto' : '50%',
            top: placement === 'top' || placement === 'bottom' ? 'auto' : '50%',
            transform: 'translateX(-50%)',
            padding: '6px 10px',
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
            borderRadius: 0,
            fontSize: 12,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 100,
          }}
        >
          {content}
          <div
            style={{
              position: 'absolute',
              ...arrowPositionMap[placement],
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: 8,
              height: 8,
              background: 'var(--color-surface)',
              borderRight: placement === 'top' ? '1px solid var(--color-border)' : undefined,
              borderBottom: placement === 'top' ? '1px solid var(--color-border)' : undefined,
              borderLeft: placement === 'bottom' ? '1px solid var(--color-border)' : undefined,
              borderTop: placement === 'bottom' ? '1px solid var(--color-border)' : undefined,
            }}
          />
        </div>
      )}
    </div>
  );
}