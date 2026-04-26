import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';

const categories = ['All', 'Nature', 'People', 'Weather', 'Animals'] as const;

const cards = [
  { id: 1, category: 'Nature', title: 'Mountain View', subtitle: 'Alps at sunset' },
  { id: 2, category: 'People', title: 'Team Meeting', subtitle: 'Q4 planning session' },
  { id: 3, category: 'Weather', title: 'Storm Clouds', subtitle: 'Approaching front' },
  { id: 4, category: 'Animals', title: 'Eagle in Flight', subtitle: 'Soaring over canyon' },
  { id: 5, category: 'Nature', title: 'Forest Path', subtitle: 'Morning mist' },
  { id: 6, category: 'People', title: 'Portrait', subtitle: 'Studio shot' },
  { id: 7, category: 'Weather', title: 'Rainbow', subtitle: 'After the storm' },
  { id: 8, category: 'Animals', title: 'Fox Portrait', subtitle: 'Autumn colors' },
];

export default function FilterTabsSection() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? cards : cards.filter((c) => c.category === active);

  return (
    <div>
      <Heading level={1}>FilterTabs</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Horizontal pill group for filtering content.
      </Text>

      <section style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={active === cat ? 'active' : 'secondary'}
              onClick={() => setActive(cat)}
              style={{ borderRadius: 20 }}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {filtered.map((card) => (
            <div
              key={card.id}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                padding: 16,
              }}
            >
              <div style={{ width: '100%', height: 80, background: 'var(--color-surface-raised)', marginBottom: 12 }} />
              <Text style={{ fontWeight: 600, display: 'block' }}>{card.title}</Text>
              <Text variant="muted" style={{ fontSize: '0.75rem' }}>{card.subtitle}</Text>
              <Text variant="muted" style={{ fontSize: '0.6875rem', marginTop: '0.5rem' }}>{card.category}</Text>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}