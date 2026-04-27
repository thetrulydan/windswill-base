import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
const textVariants = {
    body: 'text-base text-[var(--color-text)] font-normal',
    muted: 'text-sm text-[var(--color-text-muted)] font-normal',
    caption: 'text-xs text-[var(--color-text-muted)] font-normal',
};
export const Text = forwardRef(({ variant = 'body', className, children, ...props }, ref) => {
    return (_jsx("span", { ref: ref, className: `${textVariants[variant]} ${className || ''}`, ...props, children: children }));
});
Text.displayName = 'Text';
