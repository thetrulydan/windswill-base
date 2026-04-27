import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { AnchorPopover } from '@windswill/ui/components/Popover';
const directions = ['top', 'right', 'bottom', 'left'];
export default function PopoverSection() {
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, children: "Popover" }), _jsx(Text, { variant: "muted", style: { marginBottom: 32 }, children: "Anchored overlay with directional pointer arrow." }), _jsxs("section", { style: { marginBottom: 32 }, children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "Directions" }), _jsx("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap' }, children: directions.map((dir) => (_jsx(AnchorPopover, { anchor: _jsx(Button, { variant: "secondary", children: dir }), placement: dir, children: _jsx(Text, { variant: "muted", children: "This is the popover content with the arrow pointing to the target." }) }, dir))) })] }), _jsxs("section", { children: [_jsx(Heading, { level: 3, style: { marginBottom: 16 }, children: "With Title and Close" }), _jsx(AnchorPopover, { anchor: _jsx(Button, { children: "Show Info" }), placement: "right", showClose: true, title: "Popover Title", children: _jsx(Text, { variant: "muted", children: "Content with a close button." }) })] })] }));
}
