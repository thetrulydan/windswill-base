import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
export default function AuthScreenSection() {
    const toast = useToast();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        toast.success(`Login attempted: ${email}`);
    };
    const handleOffline = () => {
        toast.info('Entering offline mode');
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Auth Screen" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Two-panel auth screen: login form and offline mode entry." }), _jsx("section", { children: _jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: 700, border: '1px solid var(--color-border)', borderRadius: 12, overflow: 'hidden' }, children: [_jsxs("div", { style: { padding: 32, background: 'var(--color-surface)', display: 'flex', flexDirection: 'column', gap: 16 }, children: [_jsx(Heading, { level: 2, children: "Sign In" }), _jsx(Text, { variant: "muted", children: "Enter your credentials to access your account" }), _jsxs("form", { onSubmit: handleLogin, style: { display: 'flex', flexDirection: 'column', gap: 12 }, children: [_jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), style: { padding: '10px 12px', borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-background)', color: 'var(--color-text)' } }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), style: { padding: '10px 12px', borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-background)', color: 'var(--color-text)' } }), _jsx(Button, { type: "submit", children: "LOG IN" })] }), _jsx("a", { href: "#", style: { color: 'var(--color-text-muted)', fontSize: 13 }, children: "Create an account" })] }), _jsxs("div", { style: { padding: 32, background: 'var(--color-surface-raised)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }, children: [_jsx(Heading, { level: 2, children: "Offline Mode" }), _jsx(Text, { variant: "muted", children: "Work without an internet connection. Your data stays on this device." }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12, color: 'var(--color-text-muted)' }, children: [_jsx("span", { children: "\u2713 All features available" }), _jsx("span", { children: "\u2713 Data stored locally" }), _jsx("span", { children: "\u2713 No account required" })] }), _jsx(Button, { variant: "ghost", onClick: handleOffline, style: { marginTop: 8 }, children: "START" })] })] }) })] }));
}
