import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Topbar } from '@windswill/ui/components/Topbar';
import { Button } from '@windswill/ui/components/Button';
import { Checkbox } from '@windswill/ui/components/Checkbox';
import * as LucideIcons from 'lucide-react';
export default function TopbarSection() {
    const [showLeft, setShowLeft] = useState(true);
    const [showCenter, setShowCenter] = useState(true);
    const [showRight, setShowRight] = useState(true);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "TopBar" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Fixed header with left, center, and right slots." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Slots" }), _jsxs("div", { style: { display: 'flex', gap: 8, marginBottom: 16 }, children: [_jsxs("label", { style: { display: 'flex', alignItems: 'center', gap: 8 }, children: [_jsx(Checkbox, { checked: showLeft, onCheckedChange: (checked) => setShowLeft(!!checked) }), _jsx("span", { children: "Left" })] }), _jsxs("label", { style: { display: 'flex', alignItems: 'center', gap: 8 }, children: [_jsx(Checkbox, { checked: showCenter, onCheckedChange: (checked) => setShowCenter(!!checked) }), _jsx("span", { children: "Center" })] }), _jsxs("label", { style: { display: 'flex', alignItems: 'center', gap: 8 }, children: [_jsx(Checkbox, { checked: showRight, onCheckedChange: (checked) => setShowRight(!!checked) }), _jsx("span", { children: "Right" })] })] })] }), _jsx("section", { children: _jsx(Topbar, { left: showLeft && (_jsxs(_Fragment, { children: [_jsx(LucideIcons.Menu, { size: 20 }), _jsx(Text, { style: { fontWeight: 600 }, children: "My App" })] })), center: showCenter ? _jsx(Text, { children: "Center Title" }) : undefined, right: showRight && (_jsxs(_Fragment, { children: [_jsx(Button, { size: "sm", "aria-label": "Search", onClick: () => { }, icon: LucideIcons.Search }), _jsx(Button, { size: "sm", "aria-label": "Settings", onClick: () => { }, icon: LucideIcons.Settings }), _jsx("div", { style: { width: 32, height: 32, borderRadius: '50%', background: 'var(--color-text)', color: 'var(--color-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }, children: "JD" })] })) }) })] }));
}
