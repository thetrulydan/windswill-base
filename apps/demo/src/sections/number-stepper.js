import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { NumberStepper } from '@windswill/ui/components/NumberStepper';
export default function NumberStepperSection() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(10);
    const [value3, setValue3] = useState(5);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "NumberStepper" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Inline up/down spinner for incrementing/decrementing numeric values." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Positive Only" }), _jsx(NumberStepper, { value: value1, onChange: setValue1, min: 0, max: 100 })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "With Min/Max" }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: 16 }, children: [_jsx(NumberStepper, { value: value2, onChange: setValue2, min: 0, max: 100 }), _jsx(Text, { variant: "muted", style: { fontSize: 12 }, children: "0-100" })] })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Signed (Negative Allowed)" }), _jsx(NumberStepper, { value: value3, onChange: setValue3, min: -10, max: 10 })] })] }));
}
