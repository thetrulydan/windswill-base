import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
const cards = [
    { id: 1, title: 'Hero Portrait', subtitle: 'Fantasy artwork' },
    { id: 2, title: 'Landscape', subtitle: 'Mountain scene' },
    { id: 3, title: 'Creature Design', subtitle: 'Dragon concept' },
    { id: 4, title: 'UI Mockup', subtitle: 'Mobile app' },
    { id: 5, title: 'Character Sheet', subtitle: 'Warrior class' },
    { id: 6, title: 'Environment', subtitle: 'Castle ruins' },
];
export default function MediaCardSection() {
    const toast = useToast();
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "MediaCard" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Browsable asset card with title, subtitle, and action." }), _jsx("section", { children: _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }, children: cards.map((card) => (_jsxs("div", { style: {
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 8,
                            overflow: 'hidden',
                        }, children: [_jsx("div", { style: { width: '100%', height: 120, background: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: _jsx(Text, { variant: "muted", style: { fontSize: 12 }, children: "Image" }) }), _jsxs("div", { style: { padding: 12 }, children: [_jsx(Text, { style: { fontWeight: 600, display: 'block' }, children: card.title }), _jsx(Text, { variant: "muted", style: { fontSize: 12 }, children: card.subtitle }), _jsx(Button, { size: "sm", variant: "ghost", style: { marginTop: 12, width: '100%' }, onClick: () => toast.success(`Preview: ${card.title}`), children: "PREVIEW" })] })] }, card.id))) }) })] }));
}
