import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

export default function ToastSection() {
  const toast = useToast();
  const [persistent, setPersistent] = useState(false);

  return (
    <div>
      <Heading level={1}>Toast</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Brief notification messages that appear and auto-dismiss.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Types</Heading>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="secondary" onClick={() => toast.success('Operation completed successfully!')}>
            Success
          </Button>
          <Button variant="secondary" onClick={() => toast.error('An error occurred. Please try again.')}>
            Error
          </Button>
          <Button variant="secondary" onClick={() => toast.warning('Please review your settings.')}>
            Warning
          </Button>
          <Button variant="secondary" onClick={() => toast.info('New updates are available.')}>
            Info
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Action</Heading>
        <Button
          variant="secondary"
          onClick={() =>
            toast.info('Message with action')
          }
        >
          Show with Action
        </Button>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Persistent</Heading>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={persistent} onChange={(e) => setPersistent(e.target.checked)} />
            <span>Keep visible</span>
          </label>
          {persistent && (
            <Button
              variant="secondary"
              onClick={() => toast.info('This toast will not auto-dismiss', { persistent: true })}
            >
              Show Persistent
            </Button>
          )}
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Multiple</Heading>
        <Button
          variant="secondary"
          onClick={() => {
            toast.success('First message');
            toast.info('Second message');
            toast.warning('Third message');
          }}
        >
          Fire Multiple
        </Button>
      </section>
    </div>
  );
}