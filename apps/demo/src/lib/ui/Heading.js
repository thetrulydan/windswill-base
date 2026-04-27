import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
const headingSizes = {
    1: 'text-3xl font-bold leading-[1.2]',
    2: 'text-2xl font-bold leading-[1.2]',
    3: 'text-xl font-bold leading-[1.2]',
    4: 'text-lg font-bold leading-[1.2]',
    5: 'text-base font-bold leading-[1.2]',
    6: 'text-sm font-bold leading-[1.2]',
};
export const Heading = forwardRef(({ level = 1, className, children, ...props }, ref) => {
    const Tag = `h${level}`;
    return (_jsx(Tag, { ref: ref, className: `${headingSizes[level]} ${className || ''}`, ...props, children: children }));
});
Heading.displayName = 'Heading';
