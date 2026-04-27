import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import { Button } from '@windswill/ui/components/Button';

const iconNames = [
  'Home', 'Settings', 'User', 'Search', 'Menu', 'X', 'Check', 'ChevronDown',
  'ChevronUp', 'ChevronLeft', 'ChevronRight', 'Plus', 'Minus', 'Edit', 'Trash2',
  'Eye', 'EyeOff', 'Copy', 'Download', 'Upload', 'Mail', 'Lock', 'Unlock',
  'Calendar', 'Clock', 'Star', 'Heart', 'ThumbsUp', 'AlertCircle', 'Info',
  'CheckCircle', 'XCircle', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'RefreshCw', 'Loader', 'Zap', 'Sun', 'Moon', 'Cloud', 'Folder', 'File',
];

export default function Icons() {
  const toast = useToast();
  const [search, setSearch] = useState('');

  const filteredIcons = iconNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const copyIcon = (name: string) => {
    toast.success(`Copied: ${name}`);
  };

  return (
    <div>
      <Heading level={1}>Icons</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Lucide React icons. Click any icon to copy its name.
      </Text>

      <section style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: 300,
            padding: '8px 12px',
            borderRadius: 6,
            border: '1px solid var(--color-border)',
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
          }}
        />
      </section>

        <section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: 12,
          }}
        >
          {filteredIcons.map((name) => {
            const IconComponent = (LucideIcons as Record<string, unknown>)[name] as React.ComponentType<{ size?: number }>;
            return (
              <Button
                key={name}
                onClick={() => copyIcon(name)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 16, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8 }}
              >
                {IconComponent && <IconComponent size={24} />}
                <Text style={{ fontSize: 11 }}>{name}</Text>
              </Button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
