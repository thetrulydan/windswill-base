import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
export const Input = forwardRef(({ type = 'text', leading, trailing, label, error, className, style, ...props }, ref) => {
    const isNumber = type === 'number';
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);
    const adjustValue = (delta) => {
        const input = inputRef.current;
        if (!input)
            return;
        const currentVal = input.value === '' ? 0 : parseInt(input.value) || 0;
        const newVal = currentVal + delta;
        input.value = newVal.toString();
        input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' }, children: [label && (_jsx("span", { style: { fontSize: '0.8125rem', color: 'var(--color-text-muted)', minWidth: '120px' }, children: label })), _jsxs("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: `1px solid ${error ? 'var(--color-error)' : 'var(--color-border)'}`,
                    transition: 'border-color 150ms ease',
                }, children: [leading && (_jsx("span", { style: { display: 'flex', alignItems: 'center', marginRight: '0.5rem', color: 'var(--color-text-muted)' }, children: leading })), _jsx("input", { ref: inputRef, type: isNumber ? 'text' : type, inputMode: isNumber ? 'numeric' : undefined, style: {
                            flex: 1,
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            padding: '0.5rem 0',
                            fontSize: '1rem',
                            color: 'var(--color-text)',
                            width: '100%',
                            borderRadius: 0,
                            cursor: props.readOnly ? 'pointer' : 'text',
                        }, onFocus: (e) => {
                            e.currentTarget.parentElement.style.borderColor = 'var(--color-text)';
                        }, onBlur: (e) => {
                            e.currentTarget.parentElement.style.borderColor = error ? 'var(--color-error)' : 'var(--color-border)';
                        }, ...props }), isNumber && (_jsxs("span", { style: { display: 'flex', flexDirection: 'column', marginLeft: '0.25rem', cursor: 'pointer' }, children: [_jsx(ChevronUp, { size: 12, style: { color: 'var(--color-text-muted)' }, onClick: () => adjustValue(1) }), _jsx(ChevronDown, { size: 12, style: { color: 'var(--color-text-muted)' }, onClick: () => adjustValue(-1) })] })), !isNumber && trailing && (_jsx("span", { style: { display: 'flex', alignItems: 'center', color: 'var(--color-text-muted)', cursor: 'pointer' }, children: trailing }))] }), error && typeof error === 'string' && (_jsx("span", { style: { fontSize: '0.6875rem', color: 'var(--color-error)' }, children: error }))] }));
});
Input.displayName = 'Input';
