import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

export default function OfflineModeSection() {
  const [offline, setOffline] = useState(false);
  const toast = useToast();

  const handleOnlineToggle = () => {
    const newState = !offline;
    setOffline(newState);
    if (newState) {
      toast.warning('You are now offline');
    } else {
      toast.success('Back online!');
    }
  };

  return (
    <div>
      <Heading level={1}>Offline Mode Simulation</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Demonstrating offline state handling and UI adaptations.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Simulation</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Button variant="ghost" size="sm" onClick={handleOnlineToggle} aria-label="Toggle online/offline" style={{ width: 48, height: 24, borderRadius: 12, padding: 0, background: offline ? '#ef4444' : '#22c55e', position: 'relative', cursor: 'pointer' }}>
            <span
              style={{
                position: 'absolute',
                top: 2,
                left: offline ? 24 : 2,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'white',
                transition: 'left 0.2s',
              }}
            />
          </Button>
          <Text>{offline ? 'Offline' : 'Online'}</Text>
        </div>
      </section>

      {offline && (
        <section style={{ marginBottom: 32 }}>
          <div
            style={{
              padding: 12,
              background: '#f59e0b20',
              border: '1px solid #f59e0b',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 20 }}>📡</span>
            <Text>You are offline — changes are saved locally</Text>
          </div>
        </section>
      )}

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Sync Status</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              padding: 16,
              background: 'var(--color-surface)',
              borderRadius: 8,
              border: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              opacity: offline ? 0.6 : 1,
            }}
          >
            <Text>Cloud Sync</Text>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: 12,
                fontSize: 12,
                background: offline ? '#ef4444' : '#22c55e',
                color: 'white',
              }}
            >
              {offline ? 'Disabled' : 'Active'}
            </span>
          </div>
          <div
            style={{
              padding: 16,
              background: 'var(--color-surface)',
              borderRadius: 8,
              border: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text>Local Storage</Text>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: 12,
                fontSize: 12,
                background: '#22c55e',
                color: 'white',
              }}
            >
              Available
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
