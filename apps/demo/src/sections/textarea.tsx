import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Textarea } from '@windswill/ui/components/Textarea';

export default function TextareaSection() {
  const [value, setValue] = useState('');
  const maxLength = 400;

  return (
    <div>
      <Heading level={1}>Textarea</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Multi-line text input with optional character counter.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Basic</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}>
          <Textarea
            placeholder="Enter description..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Character Counter</Heading>
        <div style={{ position: 'relative', maxWidth: 500 }}>
          <Textarea
            placeholder="Enter description..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={maxLength}
            style={{ paddingBottom: '1.5rem' }}
          />
          <span style={{ position: 'absolute', bottom: 8, right: 0, fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
            {value.length} / {maxLength}
          </span>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>States</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}>
          <Textarea
            placeholder="Disabled"
            disabled
          />
          <Textarea
            placeholder="Error state"
            error="This field is required"
          />
        </div>
      </section>
    </div>
  );
}