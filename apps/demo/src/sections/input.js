import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Input } from '@windswill/ui/components/Input';
import { Select } from '@windswill/ui/components/Select';
import { DatePicker } from '@windswill/ui/components/DatePicker';
import { Button } from '@windswill/ui/components/Button';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';
const races = [
    { value: 'human', label: 'Human' },
    { value: 'elf', label: 'Elf' },
    { value: 'dwarf', label: 'Dwarf' },
    { value: 'halfling', label: 'Halfling' },
    { value: 'gnome', label: 'Gnome' },
    { value: 'half-orc', label: 'Half-Orc' },
];
export default function InputSection() {
    const toast = useToast();
    const [passwordShow, setPasswordShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedRaces, setSelectedRaces] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = (e) => {
        toast.info(`Input changed: ${e.target.value.slice(0, 20)}`);
    };
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Input" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Text input fields with support for leading/trailing icons, types, and select variants (single/multi)." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Types" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }, children: [_jsx(Input, { type: "text", placeholder: "Text input", onChange: handleChange }), _jsx(Input, { type: passwordShow ? 'text' : 'password', placeholder: "Password", trailing: _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setPasswordShow(!passwordShow), "aria-label": "Toggle password", icon: passwordShow ? LucideIcons.EyeOff : LucideIcons.Eye }) }), _jsx(Input, { type: "number", placeholder: "Number input", onChange: handleChange }), _jsx(Input, { type: "search", placeholder: "Search...", value: searchValue, onChange: (e) => setSearchValue(e.target.value), leading: _jsx(LucideIcons.Search, { size: 16 }), trailing: searchValue && (_jsx(Button, { variant: "ghost", size: "sm", onClick: () => setSearchValue(''), "aria-label": "Clear search", icon: LucideIcons.X })) }), _jsx(DatePicker, { value: selectedDate, onChange: (date) => {
                                    setSelectedDate(date);
                                    toast.info(`Selected: ${date.toLocaleDateString()}`);
                                } })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "States" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }, children: [_jsx(Input, { placeholder: "Default" }), _jsx(Input, { placeholder: "Error state", error: true }), _jsx(Input, { placeholder: "Disabled", disabled: true })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "With Icons" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }, children: [_jsx(Input, { placeholder: "Leading icon", leading: _jsx(LucideIcons.Mail, { size: 16 }) }), _jsx(Input, { placeholder: "Trailing icon", trailing: _jsx(LucideIcons.Check, { size: 16 }) }), _jsx(Input, { placeholder: "Both icons", leading: _jsx(LucideIcons.User, { size: 16 }), trailing: _jsx(LucideIcons.ChevronDown, { size: 16 }) })] })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Single Select" }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }, children: _jsx(Select, { options: races, value: selectedRace, onChange: (val) => {
                                setSelectedRace(val);
                                toast.info(`Selected: ${val}`);
                            }, placeholder: "Select a race..." }) })] }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Multi-Select" }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }, children: _jsx(Select, { options: races, value: selectedRaces, onChange: (val) => {
                                setSelectedRaces(val);
                                toast.info(`Selected: ${val.join(', ')}`);
                            }, multiple: true, placeholder: "Select races..." }) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Usage" }), _jsx("pre", { style: { background: 'var(--color-surface)', padding: 16, overflow: 'auto', fontSize: 13 }, children: `<Input 
  type="text" 
  placeholder="Enter name"
  leading={<SearchIcon />}
  trailing={<ChevronIcon />}
/>` })] })] }));
}
