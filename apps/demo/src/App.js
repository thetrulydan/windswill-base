import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { navConfig, findNavItem } from './nav.config';
import { useToast, useToastStore } from './hooks/useToast';
import { Button } from '@windswill/ui/components/Button';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
const ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => { },
});
export function useTheme() {
    return useContext(ThemeContext);
}
const sections = import.meta.glob('./sections/*.tsx', { eager: true });
const sectionComponents = Object.entries(sections).map(([path, module]) => {
    const match = path.match(/\/sections\/(.+)\.tsx$/);
    const name = match?.[1] || '';
    return {
        name,
        Component: module.default,
    };
});
function Layout() {
    const [theme, setTheme] = useState('dark');
    const applyTheme = (t) => {
        setTheme(t);
        document.documentElement.setAttribute('data-theme', t);
    };
    useEffect(() => {
        applyTheme('dark');
    }, []);
    const location = useLocation();
    const currentItem = findNavItem(location.pathname);
    return (_jsx(ThemeContext.Provider, { value: { theme, setTheme: applyTheme }, children: _jsxs("div", { style: { display: 'flex', minHeight: '100vh' }, children: [_jsxs("aside", { style: {
                        width: 260,
                        background: 'var(--color-surface)',
                        borderRight: '1px solid var(--color-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'fixed',
                        height: '100vh',
                        overflow: 'auto',
                    }, children: [_jsxs("div", { style: { padding: '20px', borderBottom: '1px solid var(--color-border)' }, children: [_jsx(Heading, { level: 3, children: "windswill-base" }), _jsx(Text, { variant: "muted", children: "Component Demo" })] }), _jsx("nav", { style: { flex: 1, padding: '12px', overflow: 'auto' }, children: navConfig.map((group) => (_jsxs("div", { style: { marginBottom: 20 }, children: [_jsx(Text, { style: {
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            color: 'var(--color-text-muted)',
                                            padding: '8px 12px',
                                        }, children: group.title }), group.items.map((item) => (_jsx(NavLink, { item: item }, item.href)))] }, group.title))) })] }), _jsxs("main", { style: { flex: 1, marginLeft: 260 }, children: [_jsxs("header", { style: {
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
                            }, children: [_jsx(Heading, { level: 4, children: currentItem?.label || 'Demo' }), _jsxs("div", { style: { display: 'flex', gap: 8 }, children: [_jsx(Button, { variant: theme === 'dark' ? 'secondary' : 'ghost', size: "sm", onClick: () => applyTheme('dark'), children: "Dark" }), _jsx(Button, { variant: theme === 'light' ? 'secondary' : 'ghost', size: "sm", onClick: () => applyTheme('light'), children: "Light" })] })] }), _jsx("div", { style: { padding: 32 }, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs("div", { style: { textAlign: 'center', padding: 48 }, children: [_jsx(Heading, { level: 1, children: "Welcome to windswill-base Demo" }), _jsx(Text, { variant: "muted", style: { marginTop: 8 }, children: "Select a component from the sidebar to get started." })] }) }), sectionComponents.map(({ name, Component }) => (_jsx(Route, { path: `/demo/${name.replace(/-/g, '/')}`, element: _jsx(Component, {}) }, name)))] }) })] }), _jsx(ToastContainer, {})] }) }));
}
function NavLink({ item }) {
    const location = useLocation();
    const isActive = location.pathname === item.href;
    return (_jsx(Link, { to: item.href, style: {
            display: 'block',
            padding: '8px 12px',
            textDecoration: 'none',
            color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
            background: isActive ? 'var(--color-surface-hover)' : 'transparent',
            fontSize: 'var(--text-sm)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
        }, children: item.label }));
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
    return (_jsx("div", { style: {
            position: 'fixed',
            bottom: 24,
            right: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            zIndex: 100,
        }, children: toasts.map((toast) => (_jsxs("div", { style: {
                padding: '12px 16px',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                minWidth: 320,
                width: 320,
            }, children: [_jsx("div", { style: {
                        width: 3,
                        height: '100%',
                        alignSelf: 'stretch',
                        background: accentColors[toast.type],
                        position: 'absolute',
                        left: 0,
                        top: 0,
                    } }), _jsx("span", { style: { flex: 1, fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text)' }, children: toast.message }), toast.action && (_jsx(Button, { variant: "ghost", size: "sm", onClick: toast.action.onClick, children: toast.action.label })), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => dismiss(toast.id), children: "\u00D7" })] }, toast.id))) }));
}
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Layout, {}) }));
}
