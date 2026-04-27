import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Drawer } from '@windswill/ui/components/Drawer';
const edges = ['top', 'right', 'bottom', 'left'];
export default function DrawerSection() {
    const [open, setOpen] = useState(null);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Drawer" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Slide-out panel from any screen edge." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Demo" }), _jsx("div", { style: { display: 'flex', gap: 12 }, children: edges.map((edge) => (_jsxs(Button, { variant: "secondary", onClick: () => setOpen(edge), children: ["Open ", edge] }, edge))) })] }), open && (_jsx(Drawer, { open: true, onClose: () => setOpen(null), edge: open, title: `Drawer (${open})`, children: _jsxs(Text, { variant: "muted", children: ["This drawer slides in from the ", open, " edge. It can contain any content and actions."] }) }))] }));
}
