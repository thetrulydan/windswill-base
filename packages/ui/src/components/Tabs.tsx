import { createContext, useContext, useState, type ReactNode } from 'react';
import { clsx } from 'clsx';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  onChange?: (value: string) => void;
}

export function Tabs({ defaultValue, children, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      {children}
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={clsx('flex flex-row', className)}
      style={{
        borderBottom: '1px solid var(--color-border)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TabsTrigger({ value, children, className, style }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const isActive = context.activeTab === value;

  return (
    <button
      className={clsx('text-sm font-bold uppercase tracking-wide', isActive ? 'text-text' : 'text-text-muted', className)}
      onClick={() => context.setActiveTab(value)}
      style={{
        padding: '0.75rem 1rem',
        background: 'transparent',
        border: 'none',
        borderBottom: isActive ? '2px solid var(--color-text)' : '2px solid transparent',
        cursor: 'pointer',
        transition: 'border-color 0.2s, color 0.2s',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TabsContent({ value, children, className, style }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');

  if (context.activeTab !== value) return null;

  return (
    <div className={className} style={{ padding: '1rem 0', ...style }}>
      {children}
    </div>
  );
}