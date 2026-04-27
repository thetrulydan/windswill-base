import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Progress } from '@windswill/ui/components/Progress';
export default function ProgressSection() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v >= 100 ? 0 : v + 2));
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Progress" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Visual indicator of task completion or loading state." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Determinate" }), _jsxs("div", { style: { maxWidth: 400 }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 8 }, children: [_jsx(Text, { variant: "muted", children: "Progress" }), _jsxs(Text, { children: [value, "%"] })] }), _jsx(Progress, { value: value })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "With Label" }), _jsxs("div", { style: { maxWidth: 400 }, children: [_jsx(Text, { variant: "muted", style: { marginBottom: 8 }, children: "Downloading..." }), _jsx(Progress, { value: 65, style: { background: 'var(--color-success)' } }), _jsx(Text, { style: { marginTop: 8, fontSize: '0.75rem' }, children: "65% complete" })] })] })] }));
}
