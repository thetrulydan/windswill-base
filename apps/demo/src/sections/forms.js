import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
export default function FormsSection() {
    const toast = useToast();
    const [form, setForm] = useState({
        name: '',
        description: '',
        category: '',
        priority: '',
        active: false,
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!form.name.trim())
            newErrors.name = 'Name is required';
        if (!form.description.trim())
            newErrors.description = 'Description is required';
        if (!form.category)
            newErrors.category = 'Select a category';
        if (!form.priority)
            newErrors.priority = 'Select priority';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            toast.success(`Form submitted: ${form.name}`);
            setForm({ name: '', description: '', category: '', priority: '', active: false });
        }
        else {
            toast.error('Please fix the errors above');
        }
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Forms" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Complete form with validation using React Hook Form patterns." }), _jsx("section", { children: _jsxs("form", { onSubmit: handleSubmit, style: { maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 16 }, children: [_jsxs("div", { children: [_jsxs("label", { style: { display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }, children: ["Name ", _jsx("span", { style: { color: '#ef4444' }, children: "*" })] }), _jsx("input", { type: "text", value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), style: {
                                        width: '100%',
                                        padding: '10px 12px',
                                        borderRadius: 0,
                                        border: errors.name ? '1px solid #ef4444' : '1px solid var(--color-border)',
                                        background: 'var(--color-surface)',
                                        color: 'var(--color-text)',
                                    } }), errors.name && _jsx(Text, { style: { color: '#ef4444', fontSize: 12, marginTop: 4 }, children: errors.name })] }), _jsxs("div", { children: [_jsxs("label", { style: { display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }, children: ["Description ", _jsx("span", { style: { color: '#ef4444' }, children: "*" })] }), _jsx("textarea", { value: form.description, onChange: (e) => setForm({ ...form, description: e.target.value }), rows: 3, style: {
                                        width: '100%',
                                        padding: '10px 12px',
                                        borderRadius: 0,
                                        border: errors.description ? '1px solid #ef4444' : '1px solid var(--color-border)',
                                        background: 'var(--color-surface)',
                                        color: 'var(--color-text)',
                                        resize: 'vertical',
                                        fontFamily: 'inherit',
                                    } }), errors.description && _jsx(Text, { style: { color: '#ef4444', fontSize: 12, marginTop: 4 }, children: errors.description })] }), _jsxs("div", { children: [_jsxs("label", { style: { display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }, children: ["Category ", _jsx("span", { style: { color: '#ef4444' }, children: "*" })] }), _jsxs("select", { value: form.category, onChange: (e) => setForm({ ...form, category: e.target.value }), style: {
                                        width: '100%',
                                        padding: '10px 12px',
                                        borderRadius: 0,
                                        border: errors.category ? '1px solid #ef4444' : '1px solid var(--color-border)',
                                        background: 'var(--color-surface)',
                                        color: 'var(--color-text)',
                                    }, children: [_jsx("option", { value: "", children: "Select..." }), _jsx("option", { value: "feature", children: "Feature" }), _jsx("option", { value: "bug", children: "Bug" }), _jsx("option", { value: "improvement", children: "Improvement" })] }), errors.category && _jsx(Text, { style: { color: '#ef4444', fontSize: 12, marginTop: 4 }, children: errors.category })] }), _jsxs("div", { children: [_jsxs("label", { style: { display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 500 }, children: ["Priority ", _jsx("span", { style: { color: '#ef4444' }, children: "*" })] }), _jsx("div", { style: { display: 'flex', gap: 16 }, children: ['Low', 'Medium', 'High'].map((p) => (_jsxs("label", { style: { display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }, children: [_jsx("input", { type: "radio", name: "priority", value: p.toLowerCase(), checked: form.priority === p.toLowerCase(), onChange: (e) => setForm({ ...form, priority: e.target.value }) }), _jsx("span", { children: p })] }, p))) }), errors.priority && _jsx(Text, { style: { color: '#ef4444', fontSize: 12, marginTop: 4 }, children: errors.priority })] }), _jsxs("label", { style: { display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }, children: [_jsx("input", { type: "checkbox", checked: form.active, onChange: (e) => setForm({ ...form, active: e.target.checked }), style: { width: 18, height: 18 } }), _jsx("span", { children: "Active" })] }), _jsxs("div", { style: { display: 'flex', gap: 12, marginTop: 8 }, children: [_jsx(Button, { type: "submit", children: "Submit" }), _jsx(Button, { type: "button", variant: "ghost", onClick: () => setForm({ name: '', description: '', category: '', priority: '', active: false }), children: "Cancel" })] })] }) })] }));
}
