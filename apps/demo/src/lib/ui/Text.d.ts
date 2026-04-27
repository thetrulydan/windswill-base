import { type ReactNode, type HTMLAttributes } from 'react';
interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'body' | 'muted' | 'caption';
    children: ReactNode;
}
export declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLSpanElement>>;
export {};
