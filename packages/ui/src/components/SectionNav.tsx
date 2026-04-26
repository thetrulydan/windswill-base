import { useState } from 'react';
import { type ReactNode } from 'react';

interface SectionNavItem {
  id: string;
  label: string;
  count?: number;
  icon?: ReactNode;
}

interface SectionNavProps {
  items: SectionNavItem[];
  value?: string;
  onChange?: (id: string) => void;
}

export function SectionNav({ items, value: controlledValue, onChange }: SectionNavProps) {
  const [internalValue, setInternalValue] = useState<string | null>(null);

  const activeId = controlledValue ?? internalValue;
  const setActive = (id: string) => {
    if (controlledValue !== undefined) {
      onChange?.(id);
    } else {
      setInternalValue(id);
    }
  };

  return (
    <nav style={{
      padding: 12,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 0,
      width: 240,
    }}>
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 12px',
              border: 'none',
              background: isActive ? 'var(--color-surface-raised)' : 'transparent',
              color: 'var(--color-text)',
              borderRadius: 0,
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: 'inherit',
              fontFamily: 'inherit',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {item.icon}
              {item.label}
            </span>
            {item.count !== undefined && (
              <span style={{
                background: isActive ? 'var(--color-text)' : 'var(--color-surface-raised)',
                color: isActive ? 'var(--color-background)' : 'var(--color-text-muted)',
                padding: '2px 8px',
                borderRadius: 0,
                fontSize: 11,
                fontWeight: 600,
              }}>
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}