import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { TagChip } from '@windswill/ui/components/TagChip';
import { Button } from '@windswill/ui/components/Button';
const options = ['Action', 'Adventure', 'RPG', 'Strategy', 'Puzzle', 'Simulation'];
export default function TagSelectSection() {
    const [selected, setSelected] = useState([]);
    const toggle = (opt) => {
        setSelected(selected.includes(opt)
            ? selected.filter(s => s !== opt)
            : [...selected, opt]);
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "TagSelect" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Toggle button groups for inline attribute selection." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Toggle Buttons" }), _jsx("div", { style: { display: 'flex', flexWrap: 'wrap', gap: 8 }, children: options.map((opt) => (_jsx(Button, { onClick: () => toggle(opt), variant: selected.includes(opt) ? 'secondary' : 'ghost', size: "md", style: { padding: '0.375rem 0.75rem', minWidth: 0,
                                border: selected.includes(opt) ? 'none' : '1px solid var(--color-border)',
                                background: selected.includes(opt) ? 'var(--color-text)' : 'transparent',
                                color: selected.includes(opt) ? 'var(--color-background)' : 'var(--color-text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.8125rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                            }, children: opt }, opt))) })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Selected Tags" }), _jsx("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' }, children: selected.length > 0 ? (selected.map(s => (_jsx(TagChip, { label: s, onRemove: () => toggle(s) }, s)))) : (_jsx(Text, { variant: "muted", children: "No options selected" })) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Raw Values" }), _jsx("div", { style: { padding: 16, background: 'var(--color-surface)' }, children: _jsx(Text, { children: selected.length > 0 ? selected.join(', ') : 'none' }) })] })] }));
}
