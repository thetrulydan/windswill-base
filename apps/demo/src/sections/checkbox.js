import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Checkbox } from '@windswill/ui/components/Checkbox';
import { Radio } from '@windswill/ui/components/Radio';
import { Switch } from '@windswill/ui/components/Switch';
import { useToast } from '../hooks/useToast';
export default function CheckboxSection() {
    const toast = useToast();
    const [checked, setChecked] = useState(false);
    const [radio, setRadio] = useState('option1');
    const [switchOn, setSwitchOn] = useState(false);
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Checkbox, Radio & Switch" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Form controls for boolean and single/multiple selection." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Checkbox" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 }, children: [_jsx(Checkbox, { checked: checked, label: "Enable notifications", onChange: (e) => {
                                    setChecked(e.target.checked);
                                    toast.info(`Checkbox: ${e.target.checked ? 'checked' : 'unchecked'}`);
                                } }), _jsx(Checkbox, { checked: true, label: "Checked state" }), _jsx(Checkbox, { disabled: true, label: "Disabled" })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Radio Group" }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: 8 }, children: ['option1', 'option2', 'option3'].map((opt) => (_jsx(Radio, { name: "options", value: opt, checked: radio === opt, label: `Option ${opt.replace('option', '')}`, onChange: (e) => {
                                setRadio(e.target.value);
                                toast.info(`Radio selected: ${e.target.value}`);
                            } }, opt))) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Switch" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 }, children: [_jsx(Switch, { checked: switchOn, label: "Dark mode", onClick: () => {
                                    setSwitchOn(!switchOn);
                                    toast.info(`Switch: ${!switchOn ? 'on' : 'off'}`);
                                } }), _jsx(Switch, { disabled: true, checked: false, label: "Disabled" })] })] })] }));
}
