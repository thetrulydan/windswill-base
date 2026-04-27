import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Input } from '@windswill/ui/components/Input';
import { Button } from '@windswill/ui/components/Button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@windswill/ui/components/Table';
const items = [
    { id: 1, name: 'Iron Sword', type: 'Weapon', cost: 150, quantity: 5 },
    { id: 2, name: 'Health Potion', type: 'Consumable', cost: 50, quantity: 20 },
    { id: 3, name: 'Leather Armor', type: 'Armor', cost: 200, quantity: 3 },
    { id: 4, name: 'Magic Wand', type: 'Weapon', cost: 500, quantity: 2 },
    { id: 5, name: 'Wooden Shield', type: 'Armor', cost: 80, quantity: 8 },
    { id: 6, name: 'Mana Crystal', type: 'Material', cost: 100, quantity: 15 },
    { id: 7, name: 'Steel Dagger', type: 'Weapon', cost: 120, quantity: 6 },
    { id: 8, name: 'Cloth Robe', type: 'Armor', cost: 60, quantity: 10 },
    { id: 9, name: 'Fire Scroll', type: 'Consumable', cost: 300, quantity: 4 },
    { id: 10, name: 'Gold Ring', type: 'Accessory', cost: 1000, quantity: 1 },
];
export default function TableSection() {
    const [data] = useState(items);
    const [sortCol, setSortCol] = useState('name');
    const [sortDir, setSortDir] = useState('asc');
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const handleSort = (col) => {
        if (sortCol === col) {
            setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
        }
        else {
            setSortCol(col);
            setSortDir('asc');
        }
    };
    const filtered = data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.type.toLowerCase().includes(filter.toLowerCase()));
    const sorted = [...filtered].sort((a, b) => {
        const aVal = a[sortCol];
        const bVal = b[sortCol];
        if (aVal < bVal)
            return sortDir === 'asc' ? -1 : 1;
        if (aVal > bVal)
            return sortDir === 'asc' ? 1 : -1;
        return 0;
    });
    const paged = sorted.slice((page - 1) * pageSize, page * pageSize);
    const totalPages = Math.ceil(sorted.length / pageSize);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Table" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Sortable, filterable data table with pagination." }), _jsx("section", { style: { marginBottom: 24 }, children: _jsx(Input, { type: "search", placeholder: "Filter by name or type...", value: filter, onChange: (e) => { setFilter(e.target.value); setPage(1); }, style: { maxWidth: 300 } }) }), _jsxs("section", { children: [_jsx("div", { style: { overflowX: 'auto', border: '1px solid var(--color-border)' }, children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsx(TableRow, { children: ['name', 'type', 'cost', 'quantity'].map((col) => (_jsxs(TableHead, { onClick: () => handleSort(col), style: { cursor: 'pointer' }, children: [col.charAt(0).toUpperCase() + col.slice(1), sortCol === col && (sortDir === 'asc' ? ' ↑' : ' ↓')] }, col))) }) }), _jsx(TableBody, { children: paged.map((item) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: item.name }), _jsx(TableCell, { children: item.type }), _jsxs(TableCell, { children: [item.cost, "g"] }), _jsx(TableCell, { children: item.quantity })] }, item.id))) })] }) }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }, children: [_jsxs(Text, { variant: "muted", style: { fontSize: '0.8125rem' }, children: ["Showing ", paged.length, " of ", filtered.length, " items"] }), _jsxs("div", { style: { display: 'flex', gap: 8 }, children: [_jsx(Button, { size: "sm", variant: "secondary", onClick: () => setPage(Math.max(1, page - 1)), disabled: page === 1, children: "Prev" }), _jsxs("span", { style: { padding: '0.375rem 0.75rem' }, children: [page, " / ", totalPages] }), _jsx(Button, { size: "sm", variant: "secondary", onClick: () => setPage(Math.min(totalPages, page + 1)), disabled: page === totalPages, children: "Next" })] })] })] })] }));
}
