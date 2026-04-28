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

      <section>
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
        <Heading level={3} style={{ marginBottom: 16 }}>Sizes</Heading>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <AnchorPopover
            anchor={<Button variant="secondary">Small</Button>}
            size="sm"
          >
            <Text variant="muted">This is a small popover.</Text>
          </AnchorPopover>
          <AnchorPopover
            anchor={<Button variant="secondary">Medium</Button>}
            size="md"
          >
            <Text variant="muted">This is a medium popover - the default size.</Text>
          </AnchorPopover>
          <AnchorPopover
            anchor={<Button variant="secondary">Large</Button>}
            size="lg"
          >
            <Text variant="muted">This is a large popover with more content space available for longer text.</Text>
          </AnchorPopover>
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
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <AnchorPopover anchor={<Button variant="primary">Primary</Button>} placement="right">
            <Text variant="muted">Primary button</Text>
          </AnchorPopover>
          <AnchorPopover anchor={<Button variant="secondary">Secondary</Button>} placement="right">
            <Text variant="muted">Secondary button</Text>
          </AnchorPopover>
          <AnchorPopover anchor={<Button variant="ghost">Ghost</Button>} placement="right">
            <Text variant="muted">Ghost button</Text>
          </AnchorPopover>
          <AnchorPopover anchor={<Button variant="underline">Underline</Button>} placement="right">
            <Text variant="muted">Underline button</Text>
          </AnchorPopover>
          <AnchorPopover anchor={<Button variant="destructive">Destructive</Button>} placement="right">
            <Text variant="muted">Destructive button</Text>
          </AnchorPopover>
        </div>
      </section>
    </div>
  );
}