import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Drawer } from '@windswill/ui/components/Drawer';

const edges = ['top', 'right', 'bottom', 'left'] as const;

export default function DrawerSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <Heading level={1}>Drawer</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Slide-out panel from any screen edge.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Demo</Heading>
        <div style={{ display: 'flex', gap: 12 }}>
          {edges.map((edge) => (
            <Button key={edge} variant="secondary" onClick={() => setOpen(edge)}>
              Open {edge}
            </Button>
          ))}
        </div>
      </section>

      {open && (
        <Drawer
          open
          onClose={() => setOpen(null)}
          edge={open as 'top' | 'right' | 'bottom' | 'left'}
          title={`Drawer (${open})`}
        >
          <Text variant="muted">
            This drawer slides in from the {open} edge. It can contain any content and actions.
          </Text>
        </Drawer>
      )}
    </div>
  );
}