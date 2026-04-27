import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { TagChip } from '@windswill/ui/components/TagChip';
import { Button } from '@windswill/ui/components/Button';

const options = ['Action', 'Adventure', 'RPG', 'Strategy', 'Puzzle', 'Simulation'];

export default function TagSelectSection() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (opt: string) => {
    setSelected(selected.includes(opt) 
      ? selected.filter(s => s !== opt)
      : [...selected, opt]);
  };

  return (
    <div>
      <Heading level={1}>TagSelect</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Toggle button groups for inline attribute selection.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Toggle Buttons</Heading>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {options.map((opt) => (
            <Button
              key={opt}
              onClick={() => toggle(opt)}
              variant={selected.includes(opt) ? 'secondary' : 'ghost'}
              size="md"
              style={{ padding: '0.375rem 0.75rem', minWidth: 0,
                border: selected.includes(opt) ? 'none' : '1px solid var(--color-border)',
                background: selected.includes(opt) ? 'var(--color-text)' : 'transparent',
                color: selected.includes(opt) ? 'var(--color-background)' : 'var(--color-text-muted)',
                cursor: 'pointer',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {opt}
            </Button>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Selected Tags</Heading>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {selected.length > 0 ? (
            selected.map(s => (
              <TagChip key={s} label={s} onRemove={() => toggle(s)} />
            ))
          ) : (
            <Text variant="muted">No options selected</Text>
          )}
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Raw Values</Heading>
        <div style={{ padding: 16, background: 'var(--color-surface)' }}>
          <Text>{selected.length > 0 ? selected.join(', ') : 'none'}</Text>
        </div>
      </section>
    </div>
  );
}
