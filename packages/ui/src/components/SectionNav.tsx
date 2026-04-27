import { useState } from 'react';
import { Button } from './Button';
import type { LucideIcon } from 'lucide-react';

interface SectionNavItem {
  id: string;
  label: string;
  count?: number;
  icon?: LucideIcon;
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
    <nav className="p-3 bg-surface border border-border" style={{ width: 240 }}>
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <Button
            key={item.id}
            variant={isActive ? 'active' : 'ghost'}
            size="md"
            onClick={() => setActive(item.id)}
            icon={item.icon}
            count={item.count}
            className="w-full justify-between"
          >
            {item.label}
          </Button>
        );
      })}
    </nav>
  );
}