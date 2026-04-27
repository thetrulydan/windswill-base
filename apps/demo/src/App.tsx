import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { navConfig, findNavItem } from './nav.config';
import { useToast, useToastStore } from './hooks/useToast';
import { Button } from '@windswill/ui/components/Button';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';

const ThemeContext = createContext<{ theme: 'light' | 'dark'; setTheme: (t: 'light' | 'dark') => void }>({
  theme: 'dark',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

const sections = import.meta.glob('./sections/*.tsx', { eager: true });

const sectionComponents = Object.entries(sections).map(([path, module]: [string, unknown]) => {
  const match = path.match(/\/sections\/(.+)\.tsx$/);
  const name = match?.[1] || '';
  return {
    name,
    Component: (module as { default: () => ReactNode }).default,
  };
});

function Layout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const applyTheme = (t: 'light' | 'dark') => {
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  };

  useEffect(() => {
    applyTheme('dark');
  }, []);

  const location = useLocation();
  const currentItem = findNavItem(location.pathname);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <aside
          style={{
            width: 260,
            background: 'var(--color-surface)',
            borderRight: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <div style={{ padding: '20px', borderBottom: '1px solid var(--color-border)' }}>
            <Heading level={3}>windswill-base</Heading>
            <Text variant="muted">Component Demo</Text>
          </div>
          <nav style={{ flex: 1, padding: '12px', overflow: 'auto' }}>
            {navConfig.map((group) => (
              <div key={group.title} style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-text-muted)',
                    padding: '8px 12px',
                  }}
                >
                  {group.title}
                </Text>
                {group.items.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
              </div>
            ))}
          </nav>
        </aside>
        <main style={{ flex: 1, marginLeft: 260 }}>
          <header
            style={{
              height: 60,
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              background: 'var(--color-surface)',
              position: 'sticky',
              top: 0,
              zIndex: 10,
            }}
          >
            <Heading level={4}>{currentItem?.label || 'Demo'}</Heading>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button
                variant={theme === 'dark' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => applyTheme('dark')}
              >
                Dark
              </Button>
              <Button
                variant={theme === 'light' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => applyTheme('light')}
              >
                Light
              </Button>
            </div>
          </header>
          <div style={{ padding: 32 }}>
            <Routes>
              <Route path="/" element={
                <div style={{ textAlign: 'center', padding: 48 }}>
                  <Heading level={1}>Welcome to windswill-base Demo</Heading>
                  <Text variant="muted" style={{ marginTop: 8 }}>Select a component from the sidebar to get started.</Text>
                </div>
              } />
              {sectionComponents.map(({ name, Component }) => (
                <Route key={name} path={`/demo/${name.replace(/-/g, '/')}`} element={<Component />} />
              ))}
            </Routes>
          </div>
        </main>
        <ToastContainer />
      </div>
    </ThemeContext.Provider>
  );
}

function NavLink({ item }: { item: { label: string; href: string } }) {
  const location = useLocation();
  const isActive = location.pathname === item.href;

  return (
    <Link
      to={item.href}
      style={{
        display: 'block',
        padding: '8px 12px',
        textDecoration: 'none',
        color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
        background: isActive ? 'var(--color-surface-hover)' : 'transparent',
        fontSize: 'var(--text-sm)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}
    >
      {item.label}
    </Link>
  );
}

function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);
  const { dismiss } = useToast();

  const accentColors = {
    success: 'var(--color-success)',
    error: 'var(--color-error)',
    warning: 'var(--color-warning)',
    info: 'var(--color-info)',
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        zIndex: 100,
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            padding: '12px 16px',
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            minWidth: 320,
            width: 320,
          }}
        >
          <div
            style={{
              width: 3,
              height: '100%',
              alignSelf: 'stretch',
              background: accentColors[toast.type],
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          />
          <span style={{ flex: 1, fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)' }}>
            {toast.message}
          </span>
          {toast.action && (
            <Button variant="ghost" size="sm" onClick={toast.action.onClick}>{toast.action.label}</Button>
          )}
            <Button variant="ghost" size="sm" onClick={() => dismiss(toast.id)}>×</Button>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
