import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';
import { Button } from '@windswill/ui/components/Button';
export default function FabClusterSection() {
    const toast = useToast();
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "FABCluster" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Vertical stack of floating action buttons anchored to a container edge." }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Demo" }), _jsx("div", { style: { position: 'relative', height: 300, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid var(--color-border)' }, children: _jsxs("div", { style: { position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 12 }, children: [isOpen && (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => toast.success('Delete clicked'), variant: "ghost", style: { width: 48, height: 48, borderRadius: '50%', padding: 0, background: '#ef4444', color: 'white', border: 'none' }, icon: LucideIcons.Trash2, "aria-label": "Delete" }), _jsx(Button, { onClick: () => toast.success('Edit clicked'), variant: "ghost", style: { width: 48, height: 48, borderRadius: '50%', padding: 0, background: '#3b82f6', color: 'white', border: 'none' }, icon: LucideIcons.Edit, "aria-label": "Edit" }), _jsx(Button, { onClick: () => toast.success('Share clicked'), variant: "ghost", style: { width: 48, height: 48, borderRadius: '50%', padding: 0, background: '#22c55e', color: 'white', border: 'none' }, icon: LucideIcons.Share2, "aria-label": "Share" })] })), _jsx(Button, { onClick: () => setIsOpen(!isOpen), variant: "ghost", style: { width: 56, height: 56, borderRadius: '50%', padding: 0, background: 'var(--color-text)', color: 'var(--color-background)', border: 'none' }, icon: isOpen ? LucideIcons.X : LucideIcons.Plus, "aria-label": "Toggle" })] }) })] })] }));
}
