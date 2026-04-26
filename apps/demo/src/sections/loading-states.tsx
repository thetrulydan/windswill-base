import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Spinner } from '@windswill/ui/components/Spinner';
import { Skeleton } from '@windswill/ui/components/Skeleton';
import { Avatar } from '@windswill/ui/components/Avatar';

export default function LoadingStatesSection() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string | null>('Sample loaded content');

  const handleLoad = () => {
    setLoading(true);
    setContent(null);
    setTimeout(() => {
      setLoading(false);
      setContent('Sample loaded content');
    }, 2000);
  };

  return (
    <div>
      <Heading level={1}>Loading States</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Demonstrating loading transitions with spinners and skeletons.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Button Loading</Heading>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button onClick={handleLoad} loading={loading}>
            Load Data
          </Button>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Content Skeleton</Heading>
        <div style={{ maxWidth: 400, padding: 16, background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
          {loading ? (
            <>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <Skeleton width={48} height={48} style={{ borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <Skeleton width="60%" height={16} style={{ marginBottom: 8 }} />
                  <Skeleton width="40%" height={12} />
                </div>
              </div>
              <Skeleton width="100%" height={12} style={{ marginBottom: 8 }} />
              <Skeleton width="80%" height={12} />
            </>
          ) : (
            <>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <Avatar fallback="JD" />
                <div>
                  <Text style={{ fontWeight: 600 }}>John Doe</Text>
                  <Text variant="muted" style={{ fontSize: '0.8125rem' }}>Software Engineer</Text>
                </div>
              </div>
              <Text variant="muted">This is the loaded content after the async operation completes.</Text>
            </>
          )}
        </div>
      </section>
    </div>
  );
}