import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { FilterTabs } from '@windswill/ui/components/FilterTabs';
const categories = [
    { value: 'all', label: 'All' },
    { value: 'nature', label: 'Nature' },
    { value: 'people', label: 'People' },
    { value: 'weather', label: 'Weather' },
    { value: 'animals', label: 'Animals' },
];
const cards = [
    { id: 1, category: 'nature', title: 'Mountain View', subtitle: 'Alps at sunset' },
    { id: 2, category: 'people', title: 'Team Meeting', subtitle: 'Q4 planning session' },
    { id: 3, category: 'weather', title: 'Storm Clouds', subtitle: 'Approaching front' },
    { id: 4, category: 'animals', title: 'Eagle in Flight', subtitle: 'Soaring over canyon' },
    { id: 5, category: 'nature', title: 'Forest Path', subtitle: 'Morning mist' },
    { id: 6, category: 'people', title: 'Portrait', subtitle: 'Studio shot' },
    { id: 7, category: 'weather', title: 'Rainbow', subtitle: 'After the storm' },
    { id: 8, category: 'animals', title: 'Fox Portrait', subtitle: 'Autumn colors' },
];
export default function FilterTabsSection() {
    const [active, setActive] = useState('all');
    const filtered = active === 'all' ? cards : cards.filter((c) => c.category === active);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "FilterTabs" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Horizontal pill group for filtering content." }), _jsx("section", { style: { marginBottom: 24 }, children: _jsx(FilterTabs, { tabs: categories, value: active, onChange: setActive }) }), _jsx("section", { children: _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }, children: filtered.map((card) => (_jsxs("div", { style: {
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            padding: 16,
                        }, children: [_jsx("div", { style: { width: '100%', height: 80, background: 'var(--color-surface-raised)', marginBottom: 12 } }), _jsx(Text, { style: { fontWeight: 600, display: 'block' }, children: card.title }), _jsx(Text, { variant: "muted", style: { fontSize: '0.75rem' }, children: card.subtitle })] }, card.id))) }) })] }));
}
