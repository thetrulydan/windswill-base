import { useState, useEffect } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Progress } from '@windswill/ui/components/Progress';

export default function ProgressSection() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Heading level={1}>Progress</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Visual indicator of task completion or loading state.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Determinate</Heading>
        <div style={{ maxWidth: 400 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text variant="muted">Progress</Text>
            <Text>{value}%</Text>
          </div>
          <Progress value={value} />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Label</Heading>
        <div style={{ maxWidth: 400 }}>
          <Text variant="muted" style={{ marginBottom: 8 }}>Downloading...</Text>
          <Progress value={65} style={{ background: 'var(--color-success)' }} />
          <Text style={{ marginTop: 8, fontSize: '0.75rem' }}>65% complete</Text>
        </div>
      </section>
    </div>
  );
}