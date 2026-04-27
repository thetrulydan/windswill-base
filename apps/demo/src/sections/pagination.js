import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Pagination } from '@windswill/ui/components/Pagination';
export default function PaginationSection() {
    const [page, setPage] = useState(1);
    const totalPages = 10;
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Pagination" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Page navigation for large datasets." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Pagination, { page: page, totalPages: totalPages, onChange: setPage }), _jsxs(Text, { variant: "muted", style: { marginTop: 12 }, children: ["Page ", page, " of ", totalPages] })] })] }));
}
