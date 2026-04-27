import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { TagChip } from '@windswill/ui/components/TagChip';
export default function TagChipSection() {
    const [tags, setTags] = useState(['React', 'TypeScript', 'Vite']);
    const remove = (tag) => {
        setTags(tags.filter(t => t !== tag));
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Tag & Chip" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Inline labels for categorization and filtering." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Basic Tags" }), _jsxs("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' }, children: [_jsx(TagChip, { label: "Active" }), _jsx(TagChip, { label: "Pending" }), _jsx(TagChip, { label: "Completed" }), _jsx(TagChip, { label: "Archived" })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Removable Chips" }), _jsx("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' }, children: tags.map((tag) => (_jsx(TagChip, { label: tag, onRemove: () => remove(tag) }, tag))) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "In Context" }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 8 }, children: [_jsx(Text, { children: "Filter:" }), _jsx(TagChip, { label: "React" }), _jsx(TagChip, { label: "TypeScript" }), _jsx(TagChip, { label: "Vite" })] })] })] }));
}
