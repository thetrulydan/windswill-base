import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';

export default function Spacing() {
  const spacings = [4, 8, 12, 16, 24, 32, 48, 64, 96];

  return (
    <div>
      <Heading level={1}>Spacing & Layout</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Consistent spacing using design tokens. Values scale systematically.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Spacing Scale</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {spacings.map((px) => (
            <div key={px} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: px,
                  height: px,
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border-strong)',
                  borderRadius: 2,
                }}
              />
              <Text style={{ width: 60 }}>{px}px</Text>
              <Text variant="muted" style={{ fontSize: 12 }}>
                var(--spacing-{px})
              </Text>
              <div
                style={{
                  width: px,
                  background: 'var(--color-text)',
                  opacity: 0.3,
                  height: 1,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Border Radius</Heading>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
          {[
            { name: 'sm', value: 0 },
            { name: 'md', value: 0 },
            { name: 'lg', value: 0 },
            { name: 'full', value: 9999 },
          ].map((r) => (
            <div key={r.name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border-strong)',
                  borderRadius: r.value,
                  margin: '0 auto 8px',
                }}
              />
              <Text style={{ fontSize: 12 }}>{r.name}</Text>
              <Text variant="muted" style={{ fontSize: 11 }}>
                {r.name === 'full' ? '9999px' : '0px'}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Layout Example</Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--spacing-4)',
            padding: 'var(--spacing-4)',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                padding: 'var(--spacing-4)',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border)',
                textAlign: 'center',
              }}
            >
              <Text style={{ fontSize: 12 }}>Box {i + 1}</Text>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}