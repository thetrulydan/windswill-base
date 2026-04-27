import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
const lineData = [
    { hp: 100, turn: 1 },
    { hp: 85, turn: 2 },
    { hp: 70, turn: 3 },
    { hp: 90, turn: 4 },
    { hp: 60, turn: 5 },
    { hp: 45, turn: 6 },
    { hp: 30, turn: 7 },
    { hp: 15, turn: 8 },
];
const barData = [
    { category: 'Weapons', count: 24 },
    { category: 'Armor', count: 18 },
    { category: 'Potions', count: 32 },
    { category: 'Materials', count: 15 },
    { category: 'Misc', count: 11 },
];
const pieData = [
    { name: 'Gold', value: 45 },
    { name: 'Silver', value: 30 },
    { name: 'Copper', value: 15 },
    { name: 'Gems', value: 10 },
];
const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444'];
export default function ChartsSection() {
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Charts" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Composable charts using Recharts for data visualization." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Line Chart" }), _jsx("div", { style: { height: 200, background: 'var(--color-surface)', borderRadius: 0, padding: 16 }, children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: lineData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)" }), _jsx(XAxis, { dataKey: "turn", stroke: "var(--color-text-muted)", fontSize: 12 }), _jsx(YAxis, { stroke: "var(--color-text-muted)", fontSize: 12 }), _jsx(Tooltip, { contentStyle: {
                                            background: 'var(--color-surface)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: 0,
                                        } }), _jsx(Line, { type: "monotone", dataKey: "hp", stroke: "#3b82f6", strokeWidth: 2, dot: false })] }) }) })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Bar Chart" }), _jsx("div", { style: { height: 200, background: 'var(--color-surface)', borderRadius: 0, padding: 16 }, children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { data: barData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)" }), _jsx(XAxis, { dataKey: "category", stroke: "var(--color-text-muted)", fontSize: 12 }), _jsx(YAxis, { stroke: "var(--color-text-muted)", fontSize: 12 }), _jsx(Tooltip, { contentStyle: {
                                            background: 'var(--color-surface)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: 0,
                                        } }), _jsx(Bar, { dataKey: "count", fill: "#22c55e", radius: [4, 4, 0, 0] })] }) }) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Pie Chart" }), _jsx("div", { style: { height: 200, background: 'var(--color-surface)', borderRadius: 0, padding: 16 }, children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(PieChart, { children: [_jsx(Pie, { data: pieData, cx: "50%", cy: "50%", innerRadius: 40, outerRadius: 70, paddingAngle: 2, dataKey: "value", children: pieData.map((_, index) => (_jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`))) }), _jsx(Tooltip, { contentStyle: {
                                            background: 'var(--color-surface)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: 0,
                                        } }), _jsx(Legend, {})] }) }) })] })] }));
}
