import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Badge } from '@windswill/ui/components/Badge';
export default function BadgeSection() {
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Badge" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Text label pill for status, counts, or categorization." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Variants" }), _jsxs("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' }, children: [_jsx(Badge, { children: "Default" }), _jsx(Badge, { variant: "success", children: "Success" }), _jsx(Badge, { variant: "warning", children: "Warning" }), _jsx(Badge, { variant: "error", children: "Error" }), _jsx(Badge, { variant: "info", children: "Info" })] })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "In Context" }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 12 }, children: [_jsx(Text, { children: "Project Status:" }), _jsx(Badge, { variant: "success", children: "Active" }), _jsx(Badge, { variant: "warning", children: "In Review" }), _jsx(Badge, { children: "Draft" })] })] })] }));
}
