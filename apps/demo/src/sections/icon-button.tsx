import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { IconButton } from '@windswill/ui/components/IconButton';
import { useToast } from '../hooks/useToast';
import { Edit, Trash2, Copy, Download, X, Settings, Search, Plus } from 'lucide-react';

const icons = [
  { name: 'Edit', Icon: Edit },
  { name: 'Trash2', Icon: Trash2 },
  { name: 'Copy', Icon: Copy },
  { name: 'Download', Icon: Download },
  { name: 'X', Icon: X },
  { name: 'Settings', Icon: Settings },
  { name: 'Search', Icon: Search },
  { name: 'Plus', Icon: Plus },
];

export default function IconButtonSection() {
  const toast = useToast();

  const handleClick = (name: string) => {
    toast.success(`Icon button clicked: ${name}`);
  };

  return (
    <div>
      <Heading level={1}>IconButton</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Square icon-only buttons for compact actions like edit, delete, close.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Variants</Heading>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <IconButton icon={Edit} variant="primary" onClick={() => handleClick('primary')} label="Primary" />
          <IconButton icon={Edit} variant="secondary" onClick={() => handleClick('secondary')} label="Secondary" />
          <IconButton icon={Edit} variant="ghost" onClick={() => handleClick('ghost')} label="Ghost" />
          <IconButton icon={Trash2} variant="destructive" onClick={() => handleClick('destructive')} label="Destructive" />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Icon Gallery</Heading>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {icons.map(({ name, Icon }) => (
            <IconButton
              key={name}
              icon={Icon}
              variant="secondary"
              onClick={() => handleClick(name)}
              label={name}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Sizes</Heading>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <IconButton icon={Edit} size="sm" onClick={() => handleClick('sm')} label="Small" />
          <IconButton icon={Edit} size="md" onClick={() => handleClick('md')} label="Medium" />
          <IconButton icon={Edit} size="lg" onClick={() => handleClick('lg')} label="Large" />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>FAB Variants</Heading>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <IconButton icon={Edit} variant="fab-primary" onClick={() => handleClick('fab-primary')} label="FAB Primary" />
          <IconButton icon={Plus} variant="fab" onClick={() => handleClick('fab')} label="FAB" />
          <IconButton icon={Plus} variant="fab-secondary" onClick={() => handleClick('fab-secondary')} label="FAB Secondary" />
          <IconButton icon={Plus} variant="fab-ghost" onClick={() => handleClick('fab-ghost')} label="FAB Ghost" />
          <IconButton icon={Trash2} variant="fab-destructive" onClick={() => handleClick('fab-destructive')} label="FAB Destructive" />
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>FAB Sizes</Heading>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <IconButton icon={Plus} size="fab-sm" variant="fab" onClick={() => handleClick('fab-sm')} label="FAB Small" />
          <IconButton icon={Plus} size="fab-md" variant="fab" onClick={() => handleClick('fab-md')} label="FAB Medium" />
          <IconButton icon={Plus} size="fab-lg" variant="fab" onClick={() => handleClick('fab-lg')} label="FAB Large" />
        </div>
      </section>
    </div>
  );
}