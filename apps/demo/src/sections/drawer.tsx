import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';

const edges = ['top', 'right', 'bottom', 'left'] as const;

export default function DrawerSection() {
  const toast = useToast();
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
        <>
          <div
            onClick={() => setOpen(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }}
          />
          <div
            style={{
              position: 'fixed',
              [open]: 0,
              top: open === 'left' || open === 'right' ? 0 : undefined,
              bottom: open === 'left' || open === 'right' ? 0 : undefined,
              width: open === 'top' || open === 'bottom' ? '100%' : 360,
              height: open === 'left' || open === 'right' ? '100%' : 240,
              background: 'var(--color-surface)',
              borderTop: open === 'bottom' ? '1px solid var(--color-border)' : undefined,
              borderRight: open === 'right' ? '1px solid var(--color-border)' : undefined,
              borderBottom: open === 'top' ? '1px solid var(--color-border)' : undefined,
              borderLeft: open === 'left' ? '1px solid var(--color-border)' : undefined,
              zIndex: 41,
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontWeight: 600 }}>Drawer ({open})</Text>
              <button
                onClick={() => { setOpen(null); toast.info('Drawer closed'); }}
                style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}
              >
                <LucideIcons.X size={20} />
              </button>
            </div>
            <Text variant="muted">
              This drawer slides in from the {open} edge. It can contain any content and actions.
            </Text>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <Button variant="ghost" size="sm" onClick={() => { setOpen(null); toast.info('Closed'); }}>Close</Button>
              <Button size="sm" onClick={() => { setOpen(null); toast.success('Action confirmed'); }}>Confirm</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}