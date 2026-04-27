import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Button } from '@windswill/ui/components/Button';
import { Text } from '@windswill/ui/components/Text';

export default function AppShellSection() {
  const [columns, setColumns] = useState(2);

  return (
    <div>
      <Heading level={1}>AppShell</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Multi-column layout container. Handles responsive collapse and independent scrolling.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Column Presets</Heading>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {[2, 3, 4].map((n) => (
            <Button key={n} onClick={() => setColumns(n)} style={{ padding: '8px 16px', borderRadius: 0, minWidth: 0 }}>
              {n} Column{n > 1 ? 's' : ''}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: columns === 1 ? undefined : columns === 2 ? '200px 1fr' : columns === 3 ? '200px 1fr 200px' : '180px 200px 1fr 180px',
            gap: 16,
            minHeight: 300,
            padding: 16,
            background: 'var(--color-surface)',
            borderRadius: 0,
            border: '1px solid var(--color-border)',
          }}
        >
          {Array.from({ length: columns }).map((_, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-surface-raised)',
                borderRadius: 0,
                padding: 16,
                minHeight: 100,
              }}
            >
              <Text style={{ fontWeight: 600 }}>Column {i + 1}</Text>
              <Text variant="muted" style={{ fontSize: 12 }}>Scrollable area</Text>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
