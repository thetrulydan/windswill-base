import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Tooltip } from '@windswill/ui/components/Tooltip';
import { Info } from 'lucide-react';

const directions = [
  { dir: 'top' as const, label: 'Top' },
  { dir: 'right' as const, label: 'Right' },
  { dir: 'bottom' as const, label: 'Bottom' },
  { dir: 'left' as const, label: 'Left' },
];

export default function TooltipSection() {
  return (
    <div>
      <Heading level={1}>Tooltip</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Floating label that appears on hover, showing additional information.
      </Text>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Placement</Heading>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', padding: 40 }}>
          {directions.map(({ dir, label }) => (
            <Tooltip key={dir} content={`Tooltip ${label}`} placement={dir}>
              <Button variant="secondary">
                <Info size={16} />
              </Button>
            </Tooltip>
          ))}
        </div>
      </section>
    </div>
  );
}