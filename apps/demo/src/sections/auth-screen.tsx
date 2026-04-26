import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

export default function AuthScreenSection() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Login attempted: ${email}`);
  };

  const handleOffline = () => {
    toast.info('Entering offline mode');
  };

  return (
    <div>
      <Heading level={1}>Auth Screen</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Two-panel auth screen: login form and offline mode entry.
      </Text>

      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: 700, border: '1px solid var(--color-border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: 32, background: 'var(--color-surface)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Heading level={2}>Sign In</Heading>
            <Text variant="muted">Enter your credentials to access your account</Text>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-background)', color: 'var(--color-text)' }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-background)', color: 'var(--color-text)' }}
              />
              <Button type="submit">LOG IN</Button>
            </form>
            <a href="#" style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>Create an account</a>
          </div>

          <div style={{ padding: 32, background: 'var(--color-surface-raised)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Heading level={2}>Offline Mode</Heading>
            <Text variant="muted">Work without an internet connection. Your data stays on this device.</Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12, color: 'var(--color-text-muted)' }}>
              <span>✓ All features available</span>
              <span>✓ Data stored locally</span>
              <span>✓ No account required</span>
            </div>
            <Button variant="ghost" onClick={handleOffline} style={{ marginTop: 8 }}>START</Button>
          </div>
        </div>
      </section>
    </div>
  );
}