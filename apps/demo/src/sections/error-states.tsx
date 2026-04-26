import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';

export default function ErrorStatesSection() {
  const toast = useToast();
  const [showError, setShowError] = useState(false);

  return (
    <div>
      <Heading level={1}>Error States</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Handling and displaying error conditions gracefully.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Inline Field Error</Heading>
        <div style={{ maxWidth: 300 }}>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Email</label>
          <input
            type="email"
            defaultValue="invalid-email"
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: 0,
              border: '1px solid #ef4444',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
          />
          <Text style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>Please enter a valid email address</Text>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Section Error</Heading>
        <div style={{ padding: 32, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid #ef4444', textAlign: 'center' }}>
          <LucideIcons.AlertCircle size={40} style={{ color: '#ef4444', marginBottom: 12 }} />
          <Text style={{ fontWeight: 600, display: 'block', marginBottom: 4 }}>Failed to load data</Text>
          <Text variant="muted" style={{ marginBottom: 16 }}>There was a problem connecting to the server.</Text>
          <Button variant="secondary" onClick={() => toast.success('Retrying...')}>Retry</Button>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Full Page Error</Heading>
        <div style={{ padding: 64, background: 'var(--color-surface)', borderRadius: 0, border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <LucideIcons.TriangleAlert size={64} style={{ color: '#ef4444', marginBottom: 16 }} />
          <Heading level={2} style={{ marginBottom: 8 }}>Something went wrong</Heading>
          <Text variant="muted" style={{ marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
            An unexpected error occurred. Please try again or contact support if the problem persists.
          </Text>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Button variant="primary" onClick={() => window.history.back()}>Go Back</Button>
            <Button onClick={() => toast.success('Reloading...')}>Reload Page</Button>
          </div>
        </div>
      </section>
    </div>
  );
}