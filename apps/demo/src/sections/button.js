import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@windswill/ui/components/Button';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import { Plus, Trash, ArrowRight, Search, Settings } from 'lucide-react';
const variants = ['primary', 'secondary', 'ghost', 'destructive', 'underline', 'active'];
const sizes = ['sm', 'md', 'lg'];
export default function ButtonSection() {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const handleClick = (variant, size) => {
        toast.success(`Button clicked: ${variant} ${size}`);
    };
    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Button" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Buttons trigger actions. Use primary for main actions, secondary for alternatives, ghost for subtle actions." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Variants \u00D7 Sizes" }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: 24 }, children: sizes.map((size) => (_jsxs("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Text, { style: { width: 50, fontSize: 12 }, children: size }), variants.map((variant) => (_jsx(Button, { variant: variant, size: size, onClick: () => handleClick(variant, size), children: variant }, variant)))] }, size))) })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "States" }), _jsxs("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap' }, children: [_jsx(Button, { loading: loading, onClick: handleLoading, children: "Loading" }), _jsx(Button, { disabled: true, children: "Disabled" }), _jsx(Button, { variant: "active", children: "Active" })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "With Icons" }), _jsxs("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Button, { icon: Plus, children: "Add Item" }), _jsx(Button, { variant: "secondary", icon: ArrowRight, children: "Continue" }), _jsx(Button, { variant: "ghost", icon: Search, children: "Search" }), _jsx(Button, { variant: "destructive", icon: Trash, children: "Delete" }), _jsx(Button, { variant: "active", icon: Settings, children: "Settings" })] }), _jsxs("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginTop: 12 }, children: [_jsx(Button, { icon: Plus, size: "sm", children: "Add" }), _jsx(Button, { icon: Plus, size: "md", children: "Add" }), _jsx(Button, { icon: Plus, size: "lg", children: "Add" })] })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Usage" }), _jsx("pre", { style: {
                            background: 'var(--color-surface)',
                            padding: 16,
                            borderRadius: 8,
                            overflow: 'auto',
                            fontSize: 13,
                        }, children: `<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>` })] })] }));
}
