import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useToast } from '../hooks/useToast';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
const colors = [
    { name: 'gray-950', var: '--color-gray-950' },
    { name: 'gray-900', var: '--color-gray-900' },
    { name: 'gray-800', var: '--color-gray-800' },
    { name: 'gray-700', var: '--color-gray-700' },
    { name: 'gray-300', var: '--color-gray-300' },
    { name: 'white', var: '--color-white' },
];
const semantic = [
    { name: 'background', var: '--color-background' },
    { name: 'surface', var: '--color-surface' },
    { name: 'surface-raised', var: '--color-surface-raised' },
    { name: 'border', var: '--color-border' },
    { name: 'text', var: '--color-text' },
    { name: 'text-muted', var: '--color-text-muted' },
];
export default function Colors() {
    const toast = useToast();
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Colors & Tokens" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "The design system uses a three-layer token architecture: primitives, semantics, and components." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Primitive Palette" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }, children: colors.map((c) => (_jsxs("div", { onClick: () => toast.success(`Copied: ${c.var}`), style: { cursor: 'pointer' }, children: [_jsx("div", { style: {
                                        height: 60,
                                        background: `var(${c.var})`,
                                        borderRadius: 8,
                                        border: '1px solid var(--color-border)',
                                        marginBottom: 8,
                                    } }), _jsx(Text, { style: { fontSize: 12 }, children: c.name }), _jsx(Text, { variant: "muted", style: { fontSize: 11 }, children: c.var })] }, c.name))) })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Semantic Tokens" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }, children: semantic.map((c) => (_jsxs("div", { onClick: () => toast.success(`Copied: ${c.var}`), style: { cursor: 'pointer' }, children: [_jsx("div", { style: {
                                        height: 60,
                                        background: `var(${c.var})`,
                                        borderRadius: 8,
                                        border: '1px solid var(--color-border)',
                                        marginBottom: 8,
                                    } }), _jsx(Text, { style: { fontSize: 12 }, children: c.name }), _jsx(Text, { variant: "muted", style: { fontSize: 11 }, children: c.var })] }, c.name))) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Usage" }), _jsx("pre", { style: {
                            background: 'var(--color-surface)',
                            padding: 16,
                            borderRadius: 8,
                            overflow: 'auto',
                            fontSize: 13,
                        }, children: `/* Using tokens in CSS */
.my-component {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}` })] })] }));
}
