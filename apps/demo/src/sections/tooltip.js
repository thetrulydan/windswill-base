import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Tooltip } from '@windswill/ui/components/Tooltip';
import { Info } from 'lucide-react';
const directions = [
    { dir: 'top', label: 'Top' },
    { dir: 'right', label: 'Right' },
    { dir: 'bottom', label: 'Bottom' },
    { dir: 'left', label: 'Left' },
];
export default function TooltipSection() {
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Tooltip" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Floating label that appears on hover, showing additional information." }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Placement" }), _jsx("div", { style: { display: 'flex', gap: 24, justifyContent: 'center', padding: 40 }, children: directions.map(({ dir, label }) => (_jsx(Tooltip, { content: `Tooltip ${label}`, placement: dir, children: _jsx(Button, { variant: "secondary", children: _jsx(Info, { size: 16 }) }) }, dir))) })] })] }));
}
