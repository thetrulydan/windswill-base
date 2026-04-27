import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';
import { Button } from '@windswill/ui/components/Button';

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
                <Button onClick={() => toast.success('Delete clicked')} variant="ghost" style={{ width: 48, height: 48, borderRadius: '50%', padding: 0, background: '#ef4444', color: 'white', border: 'none' }} icon={LucideIcons.Trash2} aria-label="Delete" />
                <Button onClick={() => toast.success('Edit clicked')} variant="ghost" style={{ width: 48, height: 48, borderRadius: '50%', padding: 0, background: '#3b82f6', color: 'white', border: 'none' }} icon={LucideIcons.Edit} aria-label="Edit" />
                <Button onClick={() => toast.success('Share clicked')} variant="ghost" style={{ width: 48, height: 48, borderRadius: '50%', padding: 0, background: '#22c55e', color: 'white', border: 'none' }} icon={LucideIcons.Share2} aria-label="Share" />
              </>
            )}
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" style={{ width: 56, height: 56, borderRadius: '50%', padding: 0, background: 'var(--color-text)', color: 'var(--color-background)', border: 'none' }} icon={isOpen ? LucideIcons.X : LucideIcons.Plus} aria-label="Toggle" />
          </div>
        </div>
      </section>
    </div>
  );
}
