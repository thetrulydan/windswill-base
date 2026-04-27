import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Sidebar } from '@windswill/ui/components/Sidebar';
import { LayoutDashboard, FolderKanban, CheckSquare, Users, BarChart3, Settings } from 'lucide-react';
export default function SidebarDemoSection() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', href: '#', icon: _jsx(LayoutDashboard, { size: 18 }) },
        { id: 'projects', label: 'Projects', href: '#', icon: _jsx(FolderKanban, { size: 18 }) },
        { id: 'tasks', label: 'Tasks', href: '#', icon: _jsx(CheckSquare, { size: 18 }) },
        { id: 'team', label: 'Team', href: '#', icon: _jsx(Users, { size: 18 }) },
        { id: 'reports', label: 'Reports', href: '#', icon: _jsx(BarChart3, { size: 18 }) },
        { id: 'settings', label: 'Settings', href: '#', icon: _jsx(Settings, { size: 18 }) },
    ];
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Sidebar" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Slide-out navigation overlay with nav links and footer slot." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Demo" }), _jsx(Button, { onClick: () => setIsOpen(true), children: "Open Sidebar" }), _jsx(Sidebar, { open: isOpen, onClose: () => setIsOpen(false), title: "Navigation", navItems: navItems, user: {
                            name: 'John Doe',
                            email: 'john@example.com',
                            initials: 'JD',
                        } })] })] }));
}
