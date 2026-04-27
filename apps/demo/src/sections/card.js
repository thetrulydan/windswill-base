import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Card, CardHeader, CardBody, CardFooter } from '@windswill/ui/components/Card';
export default function CardSection() {
    const [hover, setHover] = useState(false);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Card" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Container component with header, body, footer, and action slots." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Variants" }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }, children: [_jsx(Card, { children: _jsxs(CardBody, { children: [_jsx(Text, { style: { fontWeight: 600 }, children: "Body Only" }), _jsx(Text, { variant: "muted", style: { marginTop: '0.5rem' }, children: "This card has no header or footer. Just content." })] }) }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(Text, { style: { fontWeight: 600 }, children: "With Header" }) }), _jsx(CardBody, { children: _jsx(Text, { variant: "muted", children: "Card body with header section." }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(Text, { style: { fontWeight: 600 }, children: "With Footer" }) }), _jsx(CardBody, { children: _jsx(Text, { variant: "muted", children: "Card body with footer section." }) }), _jsxs(CardFooter, { children: [_jsx(Button, { size: "sm", variant: "ghost", children: "Cancel" }), _jsx(Button, { size: "sm", children: "Save" })] })] })] })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Hover State" }), _jsx(Card, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: {
                            borderColor: hover ? 'var(--color-text)' : 'var(--color-border)',
                            cursor: 'pointer',
                            transition: 'border-color 0.2s',
                        }, children: _jsxs(CardBody, { children: [_jsx(Text, { style: { fontWeight: 600 }, children: "Hover me" }), _jsx(Text, { variant: "muted", style: { marginTop: '0.5rem' }, children: "This card changes border on hover." })] }) })] })] }));
}
