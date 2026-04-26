import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';

const directions = [
  { dir: 'top', label: 'Top' },
  { dir: 'right', label: 'Right' },
  { dir: 'bottom', label: 'Bottom' },
  { dir: 'left', label: 'Left' },
];

export default function TooltipSection() {
  const toast = useToast();

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
            <div key={dir} style={{ position: 'relative', display: 'inline-flex' }}>
              <Button
                variant="secondary"
                onMouseEnter={(e) => {
                  const tooltip = e.currentTarget.nextSibling as HTMLElement;
                  if (tooltip) tooltip.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const tooltip = e.currentTarget.nextSibling as HTMLElement;
                  if (tooltip) tooltip.style.opacity = '0';
                }}
              >
                <LucideIcons.Info size={16} />
              </Button>
              <div
                style={{
                  position: 'absolute',
                  [dir === 'top' ? 'bottom' : dir === 'bottom' ? 'top' : 'top']: 'calc(100% + 8px)',
                  [dir === 'left' ? 'right' : dir === 'right' ? 'left' : 'left']: '50%',
                  transform: 'translateX(-50%)',
                  padding: '6px 10px',
                  background: 'var(--color-gray-100)',
                  color: 'var(--color-gray-950)',
                  borderRadius: 0,
                  fontSize: 12,
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  transition: 'opacity 0.2s',
                  pointerEvents: 'none',
                  zIndex: 10,
                }}
              >
                Tooltip {label}
                <div
                  style={{
                    position: 'absolute',
                    [dir === 'top' ? 'top' : 'bottom']: -4,
                    left: '50%',
                    transform: 'translateX(-50%) rotate(45deg)',
                    width: 8,
                    height: 8,
                    background: 'var(--color-gray-100)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}