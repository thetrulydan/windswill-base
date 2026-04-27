import { createContext, useContext, useState, type ReactNode } from 'react';
import { Button } from './Button';

/**
 * Tabs - Tabbed navigation component
 *
 * Usage:
 * - Tabs: wrapper with defaultValue and optional onChange
 * - TabsList: container for tabs (just a div)
 * - TabsTrigger: clickable tab - uses Button internally (passes only variant, size, onClick, children)
 * - TabsContent: content shown for active tab
 *
 * IMPORTANT: When using Button inside other components, pass only the props you need.
 * Do NOT forward className/style unless you actually use them - it can override button styles.
 */

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
    <div className={className} style={style}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const isActive = context.activeTab === value;

  return (
    <Button
      variant={isActive ? 'active' : 'ghost'}
      size="md"
      onClick={() => context.setActiveTab(value)}
    >
      {children}
    </Button>
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
    <div className={className} style={style}>
      {children}
    </div>
  );
}
