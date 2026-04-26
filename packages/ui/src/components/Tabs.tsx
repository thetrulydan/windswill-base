import { createContext, useContext, useState, type ReactNode } from 'react';

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
      className={className}
      style={{
        display: 'flex',
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
      className={className}
      onClick={() => context.setActiveTab(value)}
      style={{
        padding: '0.75rem 1rem',
        fontSize: '0.8125rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        background: 'transparent',
        border: 'none',
        borderBottom: isActive ? '2px solid var(--color-text)' : '2px solid transparent',
        color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
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