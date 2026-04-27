import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'noPadding' | 'active';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: ReactNode;
    loading?: boolean;
    icon?: LucideIcon;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
