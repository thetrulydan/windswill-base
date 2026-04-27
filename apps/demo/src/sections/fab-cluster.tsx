import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { IconButton } from '@windswill/ui/components/IconButton';
import { useToast } from '../hooks/useToast';
import { Trash2, Edit, Share2, X, Plus } from 'lucide-react';

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
        <div style={{ position: 'relative', height: 300, background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
          <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {isOpen && (
              <>
                <IconButton icon={Trash2} variant="fab-destructive" size="fab-md" onClick={() => toast.success('Delete clicked')} label="Delete" />
                <IconButton icon={Edit} variant="fab-primary" onClick={() => toast.success('Edit clicked')} label="Edit" style={{ background: '#3b82f6' }} />
                <IconButton icon={Share2} variant="fab-primary" onClick={() => toast.success('Share clicked')} label="Share" style={{ background: '#22c55e' }} />
              </>
            )}
            <IconButton 
              icon={isOpen ? X : Plus} 
              variant="fab-primary" 
              size="fab-md"
              onClick={() => setIsOpen(!isOpen)} 
              label={isOpen ? 'Close' : 'Open'} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
