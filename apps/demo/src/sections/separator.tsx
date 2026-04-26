import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';

export default function SeparatorSection() {
  return (
    <div>
      <Heading level={1}>Separator</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Visual divider for grouping content.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Horizontal</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <Text>Content above</Text>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />
          <div>
            <Text>Content below</Text>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 0 }} />
          <div>
            <Text>More content</Text>
          </div>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Vertical</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Text>Item 1</Text>
          <hr style={{ border: 'none', borderLeft: '1px solid var(--color-border)', height: 24, margin: 0 }} />
          <Text>Item 2</Text>
          <hr style={{ border: 'none', borderLeft: '1px solid var(--color-border)', height: 24, margin: 0 }} />
          <Text>Item 3</Text>
        </div>
      </section>
    </div>
  );
}