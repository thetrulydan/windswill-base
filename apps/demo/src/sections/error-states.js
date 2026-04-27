import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';
export default function ErrorStatesSection() {
    const toast = useToast();
    const [showError, setShowError] = useState(false);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Error States" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Handling and displaying error conditions gracefully." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Inline Field Error" }), _jsxs("div", { style: { maxWidth: 300 }, children: [_jsx("label", { style: { display: 'block', marginBottom: 6, fontSize: 14 }, children: "Email" }), _jsx("input", { type: "email", defaultValue: "invalid-email", style: {
                                    width: '100%',
                                    padding: '10px 12px',
                                    borderRadius: 0,
                                    border: '1px solid #ef4444',
                                    background: 'var(--color-surface)',
                                    color: 'var(--color-text)',
                                } }), _jsx(Text, { style: { color: '#ef4444', fontSize: 12, marginTop: 4 }, children: "Please enter a valid email address" })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Section Error" }), _jsxs("div", { style: { padding: 32, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid #ef4444', textAlign: 'center' }, children: [_jsx(LucideIcons.AlertCircle, { size: 40, style: { color: '#ef4444', marginBottom: 12 } }), _jsx(Text, { style: { fontWeight: 600, display: 'block', marginBottom: 4 }, children: "Failed to load data" }), _jsx(Text, { variant: "muted", style: { marginBottom: 16 }, children: "There was a problem connecting to the server." }), _jsx(Button, { variant: "secondary", onClick: () => toast.success('Retrying...'), children: "Retry" })] })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Full Page Error" }), _jsxs("div", { style: { padding: 64, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid var(--color-border)', textAlign: 'center' }, children: [_jsx(LucideIcons.TriangleAlert, { size: 64, style: { color: '#ef4444', marginBottom: 16 } }), _jsx(Heading, { level: 2, style: { marginBottom: 8 }, children: "Something went wrong" }), _jsx(Text, { variant: "muted", style: { marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }, children: "An unexpected error occurred. Please try again or contact support if the problem persists." }), _jsxs("div", { style: { display: 'flex', gap: 12, justifyContent: 'center' }, children: [_jsx(Button, { variant: "primary", onClick: () => window.history.back(), children: "Go Back" }), _jsx(Button, { onClick: () => toast.success('Reloading...'), children: "Reload Page" })] })] })] })] }));
}
