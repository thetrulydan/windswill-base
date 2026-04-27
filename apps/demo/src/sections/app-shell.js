import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Button } from '@windswill/ui/components/Button';
import { Text } from '@windswill/ui/components/Text';
export default function AppShellSection() {
    const [columns, setColumns] = useState(2);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "AppShell" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Multi-column layout container. Handles responsive collapse and independent scrolling." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Column Presets" }), _jsx("div", { style: { display: 'flex', gap: 8, marginBottom: 16 }, children: [2, 3, 4].map((n) => (_jsxs(Button, { onClick: () => setColumns(n), variant: "primary", children: [n, " Column", n > 1 ? 's' : ''] }, n))) })] }), _jsx("section", { children: _jsx("div", { style: {
                        display: 'grid',
                        gridTemplateColumns: columns === 1 ? undefined : columns === 2 ? '200px 1fr' : columns === 3 ? '200px 1fr 200px' : '180px 200px 1fr 180px',
                        gap: 16,
                        minHeight: 300,
                        padding: 16,
                        background: 'var(--color-surface)',
                        borderRadius: 0,
                        border: '1px solid var(--color-border)',
                    }, children: Array.from({ length: columns }).map((_, i) => (_jsxs("div", { style: {
                            background: 'var(--color-surface-raised)',
                            borderRadius: 0,
                            padding: 16,
                            minHeight: 100,
                        }, children: [_jsxs(Text, { style: { fontWeight: 600 }, children: ["Column ", i + 1] }), _jsx(Text, { variant: "muted", style: { fontSize: 12 }, children: "Scrollable area" })] }, i))) }) })] }));
}
