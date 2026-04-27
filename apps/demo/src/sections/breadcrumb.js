import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Breadcrumb } from '@windswill/ui/components/Breadcrumb';
export default function BreadcrumbSection() {
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Breadcrumb" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Navigation path showing the user's location in a hierarchy." }), _jsx("section", { children: _jsx(Breadcrumb, { items: [
                        { label: 'Home', href: '#' },
                        { label: 'Products', href: '#' },
                        { label: 'Electronics', href: '#' },
                        { label: 'Laptops' },
                    ] }) })] }));
}
