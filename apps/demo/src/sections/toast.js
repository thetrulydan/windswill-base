import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { ToastProvider, useToast } from '@windswill/ui/components/Toast';
function ToastDemoContent() {
    const toast = useToast();
    const [persistent, setPersistent] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Types" }), _jsxs("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap' }, children: [_jsx(Button, { variant: "secondary", onClick: () => toast.success('Operation completed successfully!'), children: "Success" }), _jsx(Button, { variant: "secondary", onClick: () => toast.error('An error occurred. Please try again.'), children: "Error" }), _jsx(Button, { variant: "secondary", onClick: () => toast.warning('Please review your settings.'), children: "Warning" }), _jsx(Button, { variant: "secondary", onClick: () => toast.info('New updates are available.'), children: "Info" })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "With Action" }), _jsx(Button, { variant: "secondary", onClick: () => toast.info('Message with action', {
                            label: 'Undo',
                            onClick: () => toast.success('Action triggered!'),
                        }), children: "Show with Action" })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Persistent" }), _jsxs("div", { style: { display: 'flex', gap: 12, alignItems: 'center' }, children: [_jsxs("label", { style: { display: 'flex', alignItems: 'center', gap: 8 }, children: [_jsx("input", { type: "checkbox", checked: persistent, onChange: (e) => setPersistent(e.target.checked) }), _jsx("span", { children: "Keep visible" })] }), persistent && (_jsx(Button, { variant: "secondary", onClick: () => toast.info('This toast will not auto-dismiss', { persistent: true }), children: "Show Persistent" }))] })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Multiple" }), _jsx(Button, { variant: "secondary", onClick: () => {
                            toast.success('First message');
                            toast.info('Second message');
                            toast.warning('Third message');
                        }, children: "Fire Multiple" })] })] }));
}
export default function ToastSection() {
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Toast" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Brief notification messages that appear and auto-dismiss." }), _jsx(ToastProvider, { children: _jsx(ToastDemoContent, {}) })] }));
}
