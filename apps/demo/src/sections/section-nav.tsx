import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';

const sections = [
  { id: 'dashboard', label: 'Dashboard', count: 3 },
  { id: 'projects', label: 'Projects', count: 12 },
  { id: 'tasks', label: 'Tasks', count: 48 },
  { id: 'team', label: 'Team', count: 5 },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' },
];

export default function SectionNavSection() {
  const [active, setActive] = useState('dashboard');

  return (
    <div>
      <Heading level={1}>SectionNav</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Vertical list of navigable sections with optional count badges.
      </Text>

      <section>
        <div style={{ width: 240, padding: 12, background: 'var(--color-surface)', borderRadius: 8, border: '1px solid var(--color-border)' }}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActive(section.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                border: 'none',
                background: active === section.id ? 'var(--color-surface-raised)' : 'transparent',
                color: 'var(--color-text)',
                borderRadius: 6,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span>{section.label}</span>
              {section.count !== undefined && (
                <span style={{
                  background: active === section.id ? 'var(--color-text)' : 'var(--color-surface-raised)',
                  color: active === section.id ? 'var(--color-background)' : 'var(--color-text-muted)',
                  padding: '2px 8px',
                  borderRadius: 12,
                  fontSize: 11,
                  fontWeight: 600,
                }}>
                  {section.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}