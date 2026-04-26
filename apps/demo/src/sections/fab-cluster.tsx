import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';

export default function FabClusterSection() {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Heading level={1}>FABCluster</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Vertical stack of floating action buttons anchored to a container edge.
      </Text>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Demo</Heading>
        <div style={{ position: 'relative', height: 300, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid var(--color-border)' }}>
          <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {isOpen && (
              <>
                <button
                  onClick={() => toast.success('Delete clicked')}
                  style={{ width: 48, height: 48, borderRadius: '50%', border: 'none', background: '#ef4444', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                >
                  <LucideIcons.Trash2 size={20} />
                </button>
                <button
                  onClick={() => toast.success('Edit clicked')}
                  style={{ width: 48, height: 48, borderRadius: '50%', border: 'none', background: '#3b82f6', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                >
                  <LucideIcons.Edit size={20} />
                </button>
                <button
                  onClick={() => toast.success('Share clicked')}
                  style={{ width: 48, height: 48, borderRadius: '50%', border: 'none', background: '#22c55e', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
                >
                  <LucideIcons.Share2 size={20} />
                </button>
              </>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ width: 56, height: 56, borderRadius: '50%', border: 'none', background: 'var(--color-text)', color: 'var(--color-background)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}
            >
              {isOpen ? <LucideIcons.X size={24} /> : <LucideIcons.Plus size={24} />}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}