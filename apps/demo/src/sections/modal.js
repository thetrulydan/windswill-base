import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Modal } from '@windswill/ui/components/Modal';
export default function ModalSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState('md');
    const sizes = ['sm', 'md', 'lg'];
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Modal" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Overlay dialog with title, body, and footer. Sizes: sm (400px), md (560px), lg (720px)." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Size Selector" }), _jsx("div", { style: { display: 'flex', gap: 8, marginBottom: 16 }, children: sizes.map((s) => (_jsx(Button, { variant: size === s ? 'primary' : 'secondary', onClick: () => setSize(s), children: s.toUpperCase() }, s))) }), _jsxs(Button, { onClick: () => setIsOpen(true), children: ["Open Modal (", size, ")"] })] }), _jsx(Modal, { open: isOpen, onClose: () => setIsOpen(false), title: "Modal Title", description: "This is the modal body with a description.", size: size, primaryButton: { label: 'Confirm', onClick: () => setIsOpen(false) }, secondaryButton: { label: 'Cancel', onClick: () => setIsOpen(false) }, children: _jsx(Text, { children: "This is the modal body. It can contain any content." }) })] }));
}
