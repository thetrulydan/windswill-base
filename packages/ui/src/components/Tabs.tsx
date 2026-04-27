import { createContext, useContext, useState, type ReactNode } from 'react';
import { Button } from './Button';

/**
 * Tabs - Tabbed navigation component
 *
 * Usage:
 * - Tabs: wrapper with defaultValue, orientation, onChange
 * - TabsList: container with orientation
 * - TabsTrigger: clickable tab - uses Button internally
 * - TabsContent: content shown for active tab
 *
 * Props:
 * - orientation: 'horizontal' | 'vertical' (default horizontal)
 */

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  onChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

export function Tabs({ defaultValue, children, onChange, orientation = 'horizontal' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange, orientation }}>
      <div 
        className={`flex ${orientation === 'vertical' ? 'flex-row' : 'flex-col'}`}
        style={{ alignItems: 'stretch' }}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TabsList({ children, className, style }: TabsListProps) {
  const context = useContext(TabsContext);
  const orientation = context?.orientation || 'horizontal';
  const isVertical = orientation === 'vertical';
   
  return (
    <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} ${className || ''}`} style={style}>
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
  const isVertical = context.orientation === 'vertical';

  return (
    <Button
      variant={isActive ? 'active' : 'ghost'}
      size="md"
      onClick={() => context.setActiveTab(value)}
      className={isVertical ? 'justify-start' : undefined}
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

  const isVertical = context.orientation === 'vertical';
  
  return (
    <div 
      className={className} 
      style={{ 
        ...(isVertical ? { borderLeft: '1px solid var(--color-border)', minHeight: '100%', flex: 1 } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
