import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
export default function Spacing() {
    const spacings = [4, 8, 12, 16, 24, 32, 48, 64, 96];
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Spacing & Layout" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Consistent spacing using design tokens. Values scale systematically." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Spacing Scale" }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: 16 }, children: spacings.map((px) => (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 16 }, children: [_jsx("div", { style: {
                                        width: px,
                                        height: px,
                                        background: 'var(--color-surface)',
                                        border: '1px solid var(--color-border-strong)',
                                        borderRadius: 2,
                                    } }), _jsxs(Text, { style: { width: 60 }, children: [px, "px"] }), _jsxs(Text, { variant: "muted", style: { fontSize: 12 }, children: ["var(--spacing-", px, ")"] }), _jsx("div", { style: {
                                        width: px,
                                        background: 'var(--color-text)',
                                        opacity: 0.3,
                                        height: 1,
                                    } })] }, px))) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Border Radius" }), _jsx("div", { style: { display: 'flex', gap: 16, alignItems: 'flex-end' }, children: [
                            { name: 'sm', value: 0 },
                            { name: 'md', value: 0 },
                            { name: 'lg', value: 0 },
                            { name: 'full', value: 9999 },
                        ].map((r) => (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("div", { style: {
                                        width: 60,
                                        height: 60,
                                        background: 'var(--color-surface)',
                                        border: '1px solid var(--color-border-strong)',
                                        borderRadius: r.value,
                                        margin: '0 auto 8px',
                                    } }), _jsx(Text, { style: { fontSize: 12 }, children: r.name }), _jsx(Text, { variant: "muted", style: { fontSize: 11 }, children: r.name === 'full' ? '9999px' : '0px' })] }, r.name))) })] }), _jsxs("section", { style: { marginTop: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Layout Example" }), _jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 'var(--spacing-4)',
                            padding: 'var(--spacing-4)',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                        }, children: Array.from({ length: 8 }).map((_, i) => (_jsx("div", { style: {
                                padding: 'var(--spacing-4)',
                                background: 'var(--color-surface-raised)',
                                border: '1px solid var(--color-border)',
                                textAlign: 'center',
                            }, children: _jsxs(Text, { style: { fontSize: 12 }, children: ["Box ", i + 1] }) }, i))) })] })] }));
}
