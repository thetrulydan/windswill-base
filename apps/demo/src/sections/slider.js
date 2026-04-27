import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Slider } from '@windswill/ui/components/Slider';
import { Volume2 } from 'lucide-react';
export default function SliderSection() {
    const [volume, setVolume] = useState(50);
    const [progress, setProgress] = useState(30);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Slider" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Range slider input for numeric values within a defined range." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Basic Slider" }), _jsx("div", { style: { maxWidth: 400 }, children: _jsx(Slider, { min: 0, max: 100, value: progress, onChange: (e) => setProgress(Number(e.target.value)) }) })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Volume Slider" }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 12, maxWidth: 400 }, children: [_jsx(Volume2, { size: 20, style: { color: 'var(--color-text-muted)' } }), _jsx(Slider, { min: 0, max: 100, value: volume, onChange: (e) => setVolume(Number(e.target.value)), style: { flex: 1 } }), _jsxs(Text, { style: { width: 40, textAlign: 'right' }, children: [volume, "%"] })] })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Disabled" }), _jsx("div", { style: { maxWidth: 400 }, children: _jsx(Slider, { label: "Disabled", min: 0, max: 100, value: 50, disabled: true }) })] })] }));
}
