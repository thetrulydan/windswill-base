import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import * as LucideIcons from 'lucide-react';

export default function EmptyStatesSection() {
  return (
    <div>
      <Heading level={1}>Empty States</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Thoughtful empty states that guide users when there's no content.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Empty Table</Heading>
        <div style={{ padding: 48, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <LucideIcons.Table size={48} style={{ color: 'var(--color-text-muted)', marginBottom: 16 }} />
          <Heading level={3} style={{ marginBottom: 8 }}>No items found</Heading>
          <Text variant="muted" style={{ marginBottom: 16 }}>Add your first item to get started.</Text>
          <Button>Add First Item</Button>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>No Search Results</Heading>
        <div style={{ padding: 48, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <LucideIcons.SearchX size={48} style={{ color: 'var(--color-text-muted)', marginBottom: 16 }} />
          <Heading level={3} style={{ marginBottom: 8 }}>No results for "xyz"</Heading>
          <Text variant="muted" style={{ marginBottom: 16 }}>Try a different search term.</Text>
          <Button variant="primary">Clear Search</Button>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>All Caught Up</Heading>
        <div style={{ padding: 48, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <LucideIcons.CheckCircle size={48} style={{ color: '#22c55e', marginBottom: 16 }} />
          <Heading level={3} style={{ marginBottom: 8 }}>You're all caught up</Heading>
          <Text variant="muted">No new notifications at this time.</Text>
        </div>
      </section>
    </div>
  );
}