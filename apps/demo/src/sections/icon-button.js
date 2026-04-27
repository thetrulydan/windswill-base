import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { IconButton } from '@windswill/ui/components/IconButton';
import { useToast } from '../hooks/useToast';
import { Edit, Trash2, Copy, Download, X, Settings, Search, Plus } from 'lucide-react';
const icons = [
    { name: 'Edit', Icon: Edit },
    { name: 'Trash2', Icon: Trash2 },
    { name: 'Copy', Icon: Copy },
    { name: 'Download', Icon: Download },
    { name: 'X', Icon: X },
    { name: 'Settings', Icon: Settings },
    { name: 'Search', Icon: Search },
    { name: 'Plus', Icon: Plus },
];
export default function IconButtonSection() {
    const toast = useToast();
    const handleClick = (name) => {
        toast.success(`Icon button clicked: ${name}`);
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "IconButton" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Square icon-only buttons for compact actions like edit, delete, close." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Variants" }), _jsxs("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' }, children: [_jsx(IconButton, { icon: Edit, variant: "primary", onClick: () => handleClick('primary'), label: "Primary" }), _jsx(IconButton, { icon: Edit, variant: "secondary", onClick: () => handleClick('secondary'), label: "Secondary" }), _jsx(IconButton, { icon: Edit, variant: "ghost", onClick: () => handleClick('ghost'), label: "Ghost" }), _jsx(IconButton, { icon: Trash2, variant: "destructive", onClick: () => handleClick('destructive'), label: "Destructive" })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Icon Gallery" }), _jsx("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' }, children: icons.map(({ name, Icon }) => (_jsx(IconButton, { icon: Icon, variant: "secondary", onClick: () => handleClick(name), label: name }, name))) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Sizes" }), _jsxs("div", { style: { display: 'flex', gap: 8, alignItems: 'center' }, children: [_jsx(IconButton, { icon: Edit, size: "sm", onClick: () => handleClick('sm'), label: "Small" }), _jsx(IconButton, { icon: Edit, size: "md", onClick: () => handleClick('md'), label: "Medium" }), _jsx(IconButton, { icon: Edit, size: "lg", onClick: () => handleClick('lg'), label: "Large" })] })] })] }));
}
