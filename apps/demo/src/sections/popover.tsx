import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { AnchorPopover } from '@windswill/ui/components/Popover';

const directions = ['top', 'right', 'bottom', 'left'] as const;

export default function PopoverSection() {
  return (
    <div>
      <Heading level={1}>Popover</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Anchored overlay with directional pointer arrow.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Directions</Heading>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {directions.map((dir) => (
            <AnchorPopover
              key={dir}
              anchor={
                <Button variant="secondary">{dir}</Button>
              }
              placement={dir}
            >
              <Text variant="muted">This is the popover content with the arrow pointing to the target.</Text>
            </AnchorPopover>
          ))}
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>With Title and Close</Heading>
        <AnchorPopover
          anchor={<Button>Show Info</Button>}
          placement="right"
          showClose
          title="Popover Title"
        >
          <Text variant="muted">Content with a close button.</Text>
        </AnchorPopover>
      </section>
    </div>
  );
}