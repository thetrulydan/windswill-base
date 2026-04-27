import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Textarea } from '@windswill/ui/components/Textarea';
export default function TextareaSection() {
    const [value, setValue] = useState('');
    const maxLength = 400;
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Textarea" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Multi-line text input with optional character counter." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Basic" }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }, children: _jsx(Textarea, { placeholder: "Enter description...", value: value, onChange: (e) => setValue(e.target.value) }) })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "With Character Counter" }), _jsxs("div", { style: { position: 'relative', maxWidth: 500 }, children: [_jsx(Textarea, { placeholder: "Enter description...", value: value, onChange: (e) => setValue(e.target.value), maxLength: maxLength, style: { paddingBottom: '1.5rem' } }), _jsxs("span", { style: { position: 'absolute', bottom: 8, right: 0, fontSize: '0.6875rem', color: 'var(--color-text-muted)' }, children: [value.length, " / ", maxLength] })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "States" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }, children: [_jsx(Textarea, { placeholder: "Disabled", disabled: true }), _jsx(Textarea, { placeholder: "Error state", error: "This field is required" })] })] })] }));
}
