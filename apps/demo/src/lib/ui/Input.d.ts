import { type InputHTMLAttributes, type ReactNode } from 'react';
type InputType = 'text' | 'password' | 'number' | 'search' | 'email';
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    type?: InputType;
    leading?: ReactNode;
    trailing?: ReactNode;
    label?: string;
    error?: string | boolean;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
