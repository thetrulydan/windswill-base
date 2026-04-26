import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';

const directions = ['top', 'right', 'bottom', 'left'] as const;

export default function PopoverSection() {
  const toast = useToast();
  const [anchor, setAnchor] = useState<string | null>(null);

  return (
    <div>
      <Heading level={1}>Popover</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Anchored overlay with directional pointer arrow.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Directions</Heading>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {directions.map((dir) => (
            <Button key={dir} variant="secondary" onClick={() => setAnchor(dir)}>
              Anchor {dir}
            </Button>
          ))}
        </div>
      </section>

      {anchor && (
        <div style={{ position: 'relative', padding: 60, border: '1px dashed var(--color-border)', borderRadius: 0 }}>
          <button
            onClick={() => setAnchor(null)}
            style={{
              position: 'absolute',
              [anchor]: '50%',
              transform: anchor === 'top' || anchor === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)',
              padding: '8px 16px',
              borderRadius: 0,
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
              cursor: 'pointer',
            }}
          >
            Target
            {anchor === 'top' && (
              <div style={{ position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', width: 12, height: 12, background: 'var(--color-surface)', borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', rotate: '45deg' }} />
            )}
            {anchor === 'bottom' && (
              <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 12, height: 12, background: 'var(--color-surface)', borderLeft: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', rotate: '45deg' }} />
            )}
          </button>
          <div
            style={{
              position: 'absolute',
              [anchor]: anchor === 'left' || anchor === 'right' ? 'calc(50% + 60px)' : undefined,
              top: anchor === 'top' || anchor === 'bottom' ? 'calc(50% + 60px)' : '50%',
              left: anchor === 'right' ? 'calc(50% + 60px)' : anchor === 'left' ? 'auto' : '50%',
              right: anchor === 'left' ? 'calc(50% + 60px)' : 'auto',
              transform: 'translate(-50%, -50%)',
              padding: 16,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              boxShadow: 'none',
              minWidth: 200,
            }}
          >
            <Text style={{ fontWeight: 600, display: 'block', marginBottom: 4 }}>Popover Title</Text>
            <Text variant="muted" style={{ fontSize: 13 }}>This is the popover content with the arrow pointing to the target.</Text>
            <Button size="sm" style={{ marginTop: 12 }} onClick={() => { setAnchor(null); toast.success('Action clicked'); }}>
              Action
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}