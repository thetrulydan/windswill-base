import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Slider } from '@windswill/ui/components/Slider';
import { Volume2 } from 'lucide-react';

export default function SliderSection() {
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(30);

  return (
    <div>
      <Heading level={1}>Slider</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Range slider input for numeric values within a defined range.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Basic Slider</Heading>
        <div style={{ maxWidth: 400 }}>
          <Slider
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
          />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Volume Slider</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, maxWidth: 400 }}>
          <Volume2 size={20} style={{ color: 'var(--color-text-muted)' }} />
          <Slider
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <Text style={{ width: 40, textAlign: 'right' }}>{volume}%</Text>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Disabled</Heading>
        <div style={{ maxWidth: 400 }}>
          <Slider
            label="Disabled"
            min={0}
            max={100}
            value={50}
            disabled
          />
        </div>
      </section>
    </div>
  );
}