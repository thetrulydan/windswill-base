import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
const sizeStyles = {
    sm: { height: '2rem', padding: '0.25rem 0.625rem', fontSize: '0.6875rem' },
    md: { height: '2.5rem', padding: '0.5rem 1rem', fontSize: '0.8125rem' },
    lg: { height: '3rem', padding: '0.75rem 1.25rem', fontSize: '0.9375rem' },
};
const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
};
const Spinner = ({ size = 'md' }) => {
    const sizeMap = { sm: 14, md: 18, lg: 22 };
    return (_jsx("svg", { width: sizeMap[size], height: sizeMap[size], viewBox: "0 0 24 24", fill: "none", style: {
            animation: 'spin 600ms linear infinite',
            color: 'var(--color-text)',
        }, children: _jsx("circle", { cx: "12", cy: "12", r: "8", stroke: "currentColor", strokeWidth: "2", strokeDasharray: "20", strokeDashoffset: "10" }) }));
};
export const Button = forwardRef(({ variant = 'primary', size = 'md', className, children, loading, icon: Icon, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;
    const getBaseStyles = () => {
        const styles = {
            appearance: 'none',
            WebkitAppearance: 'none',
            background: 'transparent',
            borderRadius: 0,
            color: 'var(--color-text-muted)',
            transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
            fontSize: 'var(--text-sm)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            ...sizeStyles[size],
        };
        if (variant === 'primary') {
            styles.border = '1px solid var(--color-text-muted)';
        }
        else if (variant === 'secondary') {
            styles.borderTop = '0px';
            styles.borderRight = '0px';
            styles.borderLeft = '0px';
            styles.borderBottom = '1px solid var(--color-text-muted)';
        }
        else if (variant === 'destructive' || variant === 'noPadding' || variant === 'active' || variant === 'ghost') {
            styles.border = 'none';
        }
        if (variant === 'destructive') {
            styles.color = 'var(--color-error)';
        }
        if (variant === 'noPadding') {
            styles.padding = '0';
        }
        if (variant === 'active') {
            styles.background = 'var(--color-gray-700)';
            styles.color = 'var(--color-text)';
        }
        if (isDisabled) {
            styles.opacity = '0.35';
            styles.cursor = 'not-allowed';
        }
        return styles;
    };
    const renderContent = () => {
        if (loading) {
            return _jsx(Spinner, { size: size });
        }
        if (Icon) {
            return (_jsxs("span", { style: { display: 'flex', alignItems: 'center', gap: '0.5rem' }, children: [_jsx(Icon, { size: iconSizes[size] }), children] }));
        }
        return children;
    };
    return (_jsx("button", { ref: ref, className: twMerge(clsx('inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none', className)), style: getBaseStyles(), disabled: isDisabled, onMouseEnter: (e) => {
            if (isDisabled)
                return;
            if (variant === 'primary') {
                e.currentTarget.style.background = '#374151';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#374151';
            }
            else if (variant === 'secondary') {
                e.currentTarget.style.background = 'var(--color-gray-700)';
                e.currentTarget.style.color = 'var(--color-text)';
                e.currentTarget.style.borderBottomColor = 'var(--color-gray-700)';
            }
            else if (variant === 'ghost') {
                e.currentTarget.style.background = 'var(--color-surface-hover)';
                e.currentTarget.style.color = 'var(--color-text)';
            }
            else if (variant === 'destructive') {
                e.currentTarget.style.background = 'var(--color-error)';
                e.currentTarget.style.color = 'var(--color-background)';
            }
            onMouseEnter?.(e);
        }, onMouseLeave: (e) => {
            if (isDisabled)
                return;
            e.currentTarget.style.cursor = 'auto';
            if (variant === 'primary') {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.borderColor = 'var(--color-text-muted)';
            }
            else if (variant === 'secondary') {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.borderBottomColor = 'var(--color-text-muted)';
            }
            else if (variant === 'ghost') {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-muted)';
            }
            else if (variant === 'destructive') {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-error)';
            }
            onMouseLeave?.(e);
        }, ...props, children: renderContent() }));
});
Button.displayName = 'Button';
