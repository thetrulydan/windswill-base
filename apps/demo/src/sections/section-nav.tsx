import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { SectionNav } from '@windswill/ui/components/SectionNav';

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
        <SectionNav
          items={sections}
          value={active}
          onChange={setActive}
        />
      </section>
    </div>
  );
}