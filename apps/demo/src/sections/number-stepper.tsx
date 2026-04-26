import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { NumberStepper } from '@windswill/ui/components/NumberStepper';

export default function NumberStepperSection() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(10);
  const [value3, setValue3] = useState(5);

  return (
    <div>
      <Heading level={1}>NumberStepper</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Inline up/down spinner for incrementing/decrementing numeric values.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Positive Only</Heading>
        <NumberStepper value={value1} onChange={setValue1} min={0} max={100} />
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Min/Max</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <NumberStepper value={value2} onChange={setValue2} min={0} max={100} />
          <Text variant="muted" style={{ fontSize: 12 }}>0-100</Text>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Signed (Negative Allowed)</Heading>
        <NumberStepper value={value3} onChange={setValue3} min={-10} max={10} />
      </section>
    </div>
  );
}