import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Skeleton } from '@windswill/ui/components/Skeleton';
import { Avatar } from '@windswill/ui/components/Avatar';
export default function LoadingStatesSection() {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('Sample loaded content');
    const handleLoad = () => {
        setLoading(true);
        setContent(null);
        setTimeout(() => {
            setLoading(false);
            setContent('Sample loaded content');
        }, 2000);
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Loading States" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Demonstrating loading transitions with spinners and skeletons." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Button Loading" }), _jsx("div", { style: { display: 'flex', gap: 12, alignItems: 'center' }, children: _jsx(Button, { onClick: handleLoad, loading: loading, children: "Load Data" }) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Content Skeleton" }), _jsx("div", { style: { maxWidth: 400, padding: 16, background: 'var(--color-surface)', border: '1px solid var(--color-border)' }, children: loading ? (_jsxs(_Fragment, { children: [_jsxs("div", { style: { display: 'flex', gap: 12, marginBottom: 16 }, children: [_jsx(Skeleton, { width: 48, height: 48, style: { borderRadius: '50%' } }), _jsxs("div", { style: { flex: 1 }, children: [_jsx(Skeleton, { width: "60%", height: 16, style: { marginBottom: 8 } }), _jsx(Skeleton, { width: "40%", height: 12 })] })] }), _jsx(Skeleton, { width: "100%", height: 12, style: { marginBottom: 8 } }), _jsx(Skeleton, { width: "80%", height: 12 })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { style: { display: 'flex', gap: 12, marginBottom: 16 }, children: [_jsx(Avatar, { fallback: "JD" }), _jsxs("div", { children: [_jsx(Text, { style: { fontWeight: 600 }, children: "John Doe" }), _jsx(Text, { variant: "muted", style: { fontSize: '0.8125rem' }, children: "Software Engineer" })] })] }), _jsx(Text, { variant: "muted", children: "This is the loaded content after the async operation completes." })] })) })] })] }));
}
