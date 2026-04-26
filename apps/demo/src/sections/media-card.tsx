import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

const cards = [
  { id: 1, title: 'Hero Portrait', subtitle: 'Fantasy artwork' },
  { id: 2, title: 'Landscape', subtitle: 'Mountain scene' },
  { id: 3, title: 'Creature Design', subtitle: 'Dragon concept' },
  { id: 4, title: 'UI Mockup', subtitle: 'Mobile app' },
  { id: 5, title: 'Character Sheet', subtitle: 'Warrior class' },
  { id: 6, title: 'Environment', subtitle: 'Castle ruins' },
];

export default function MediaCardSection() {
  const toast = useToast();

  return (
    <div>
      <Heading level={1}>MediaCard</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Browsable asset card with title, subtitle, and action.
      </Text>

      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div style={{ width: '100%', height: 120, background: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text variant="muted" style={{ fontSize: 12 }}>Image</Text>
              </div>
              <div style={{ padding: 12 }}>
                <Text style={{ fontWeight: 600, display: 'block' }}>{card.title}</Text>
                <Text variant="muted" style={{ fontSize: 12 }}>{card.subtitle}</Text>
                <Button
                  size="sm"
                  variant="ghost"
                  style={{ marginTop: 12, width: '100%' }}
                  onClick={() => toast.success(`Preview: ${card.title}`)}
                >
                  PREVIEW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}