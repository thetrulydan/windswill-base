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

  return (
    <div>
      <Heading level={1}>Checkbox, Radio & Switch</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Form controls for boolean and single/multiple selection.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Checkbox</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox
            checked={checked}
            label="Enable notifications"
            onChange={(e) => {
              setChecked(e.target.checked);
              toast.info(`Checkbox: ${e.target.checked ? 'checked' : 'unchecked'}`);
            }}
          />
          <Checkbox
            checked
            label="Checked state"
          />
          <Checkbox
            disabled
            label="Disabled"
          />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Radio Group</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['option1', 'option2', 'option3'].map((opt) => (
            <Radio
              key={opt}
              name="options"
              value={opt}
              checked={radio === opt}
              label={`Option ${opt.replace('option', '')}`}
              onChange={(e) => {
                setRadio(e.target.value);
                toast.info(`Radio selected: ${e.target.value}`);
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Switch</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Switch
            checked={switchOn}
            label="Dark mode"
            onClick={() => {
              setSwitchOn(!switchOn);
              toast.info(`Switch: ${!switchOn ? 'on' : 'off'}`);
            }}
          />
          <Switch
            disabled
            checked={false}
            label="Disabled"
          />
        </div>
      </section>
    </div>
  );
}