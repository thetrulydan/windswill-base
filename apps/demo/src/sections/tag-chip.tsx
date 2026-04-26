import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { TagChip } from '@windswill/ui/components/TagChip';

export default function TagChipSection() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Vite']);

  const remove = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <div>
      <Heading level={1}>Tag & Chip</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Inline labels for categorization and filtering.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Basic Tags</Heading>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <TagChip label="Active" />
          <TagChip label="Pending" />
          <TagChip label="Completed" />
          <TagChip label="Archived" />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Removable Chips</Heading>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} onRemove={() => remove(tag)} />
          ))}
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>In Context</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Text>Filter:</Text>
          <TagChip label="React" />
          <TagChip label="TypeScript" />
          <TagChip label="Vite" />
        </div>
      </section>
    </div>
  );
}