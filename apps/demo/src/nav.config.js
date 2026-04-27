export const navConfig = [
    {
        title: 'Foundations',
        items: [
            { label: 'Colors & Tokens', href: '/demo/colors' },
            { label: 'Typography', href: '/demo/typography' },
            { label: 'Spacing & Layout', href: '/demo/spacing' },
            { label: 'Icons', href: '/demo/icons' },
        ],
    },
    {
        title: 'Inputs & Controls',
        items: [
            { label: 'Button', href: '/demo/button' },
            { label: 'IconButton', href: '/demo/icon/button' },
            { label: 'Input', href: '/demo/input' },
            { label: 'Textarea', href: '/demo/textarea' },
            { label: 'TagSelect', href: '/demo/tag/select' },
            { label: 'Checkbox, Radio & Switch', href: '/demo/checkbox' },
            { label: 'Slider & VolumeSlider', href: '/demo/slider' },
            { label: 'NumberStepper', href: '/demo/number/stepper' },
        ],
    },
    {
        title: 'Layout & Navigation',
        items: [
            { label: 'AppShell', href: '/demo/app/shell' },
            { label: 'TopBar', href: '/demo/topbar' },
            { label: 'Card', href: '/demo/card' },
            { label: 'Tabs', href: '/demo/tabs' },
            { label: 'SectionNav', href: '/demo/section/nav' },
            { label: 'Sidebar', href: '/demo/sidebar/demo' },
            { label: 'Breadcrumb', href: '/demo/breadcrumb' },
            { label: 'Pagination', href: '/demo/pagination' },
            { label: 'FABCluster', href: '/demo/fab/cluster' },
            { label: 'Separator', href: '/demo/separator' },
        ],
    },
    {
        title: 'Overlays',
        items: [
            { label: 'Modal', href: '/demo/modal' },
            { label: 'ConfirmDialog', href: '/demo/confirm/dialog' },
            { label: 'Drawer', href: '/demo/drawer' },
            { label: 'Popover', href: '/demo/popover' },
            { label: 'Tooltip', href: '/demo/tooltip' },
        ],
    },
    {
        title: 'Feedback',
        items: [
            { label: 'Toast', href: '/demo/toast' },
            { label: 'Alert', href: '/demo/alert' },
            { label: 'Badge', href: '/demo/badge' },
            { label: 'Progress', href: '/demo/progress' },
            { label: 'Spinner & Skeleton', href: '/demo/spinner/skeleton' },
        ],
    },
    {
        title: 'Data Display',
        items: [
            { label: 'Table', href: '/demo/table' },
            { label: 'TreeView', href: '/demo/tree/view' },
            { label: 'FilterTabs', href: '/demo/filter/tabs' },
            { label: 'MediaCard', href: '/demo/media/card' },
            { label: 'Tag & Chip', href: '/demo/tag/chip' },
            { label: 'Charts', href: '/demo/charts' },
        ],
    },
    {
        title: 'Patterns',
        items: [
            { label: 'Forms', href: '/demo/forms' },
            { label: 'Auth Screen', href: '/demo/auth/screen' },
            { label: 'Empty States', href: '/demo/empty/states' },
            { label: 'Loading States', href: '/demo/loading/states' },
            { label: 'Error States', href: '/demo/error/states' },
        ],
    },
    {
        title: 'App Modes',
        items: [
            { label: 'Offline Mode Simulation', href: '/demo/offline/mode' },
            { label: 'Theme Customisation', href: '/demo/theme/customisation' },
        ],
    },
];
export function findNavItem(href) {
    for (const group of navConfig) {
        const item = group.items.find((i) => i.href === href);
        if (item)
            return item;
    }
    return undefined;
}
