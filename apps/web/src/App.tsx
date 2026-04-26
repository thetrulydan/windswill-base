import { useState } from 'react';
import { Button } from '@windswill/ui/components/Button';
import { Input } from '@windswill/ui/components/Input';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';

export function App() {
  const [mode, setMode] = useState<'login' | 'offline'>('login');

  if (mode === 'offline') {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '24px',
        background: 'var(--color-background)',
      }}>
        <Heading level={1}>windswill-base</Heading>
        <Text variant="muted">Offline mode active</Text>
        <Button onClick={() => setMode('login')}>Go to Login</Button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      background: 'var(--color-background)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '48px',
      }}>
        <Heading level={1}>windswill-base</Heading>
        <Text variant="muted">Offline-first application foundation</Text>
        <Button variant="ghost" onClick={() => setMode('offline')}>
          Work Offline
        </Button>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '48px',
        background: 'var(--color-surface)',
      }}>
        <Heading level={2}>Sign In</Heading>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '300px' }}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign In</Button>
        </form>
      </div>
    </div>
  );
}