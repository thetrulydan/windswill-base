import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
export default function OfflineModeSection() {
    const [offline, setOffline] = useState(false);
    const toast = useToast();
    const handleOnlineToggle = () => {
        const newState = !offline;
        setOffline(newState);
        if (newState) {
            toast.warning('You are now offline');
        }
        else {
            toast.success('Back online!');
        }
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Offline Mode Simulation" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Demonstrating offline state handling and UI adaptations." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Simulation" }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }, children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: handleOnlineToggle, "aria-label": "Toggle online/offline", style: { width: 48, height: 24, borderRadius: 12, padding: 0, background: offline ? '#ef4444' : '#22c55e', position: 'relative', cursor: 'pointer' }, children: _jsx("span", { style: {
                                        position: 'absolute',
                                        top: 2,
                                        left: offline ? 24 : 2,
                                        width: 20,
                                        height: 20,
                                        borderRadius: '50%',
                                        background: 'white',
                                        transition: 'left 0.2s',
                                    } }) }), _jsx(Text, { children: offline ? 'Offline' : 'Online' })] })] }), offline && (_jsx("section", { style: { marginBottom: 32 }, children: _jsxs("div", { style: {
                        padding: 12,
                        background: '#f59e0b20',
                        border: '1px solid #f59e0b',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 16,
                    }, children: [_jsx("span", { style: { fontSize: 20 }, children: "\uD83D\uDCE1" }), _jsx(Text, { children: "You are offline \u2014 changes are saved locally" })] }) })), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Sync Status" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 }, children: [_jsxs("div", { style: {
                                    padding: 16,
                                    background: 'var(--color-surface)',
                                    borderRadius: 8,
                                    border: '1px solid var(--color-border)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    opacity: offline ? 0.6 : 1,
                                }, children: [_jsx(Text, { children: "Cloud Sync" }), _jsx("span", { style: {
                                            padding: '4px 10px',
                                            borderRadius: 12,
                                            fontSize: 12,
                                            background: offline ? '#ef4444' : '#22c55e',
                                            color: 'white',
                                        }, children: offline ? 'Disabled' : 'Active' })] }), _jsxs("div", { style: {
                                    padding: 16,
                                    background: 'var(--color-surface)',
                                    borderRadius: 8,
                                    border: '1px solid var(--color-border)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }, children: [_jsx(Text, { children: "Local Storage" }), _jsx("span", { style: {
                                            padding: '4px 10px',
                                            borderRadius: 12,
                                            fontSize: 12,
                                            background: '#22c55e',
                                            color: 'white',
                                        }, children: "Available" })] })] })] })] }));
}
