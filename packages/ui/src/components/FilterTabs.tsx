import { type ReactNode } from 'react';
import { Button } from './Button';

interface FilterTab {
  value: string;
  label: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  value: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
}

export function FilterTabs({ tabs, value, onChange, children }: FilterTabsProps) {
  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            variant={value === tab.value ? 'active' : 'secondary'}
            onClick={() => onChange?.(tab.value)}
            style={{ borderRadius: 20 }}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {children}
    </div>
  );
}