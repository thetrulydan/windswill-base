export interface NavItem {
    label: string;
    href: string;
}
export interface NavGroup {
    title: string;
    items: NavItem[];
}
export declare const navConfig: NavGroup[];
export declare function findNavItem(href: string): NavItem | undefined;
