import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';

export default function Typography() {
  return (
    <div>
      <Heading level={1}>Typography</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        The typography system defines three font role slots and utility tokens for tracking.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Font Roles</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <Text variant="muted" style={{ fontSize: 12, marginBottom: 8 }}>Display (--font-display)</Text>
            <Heading level={1} style={{ fontFamily: 'var(--font-display)' }}>The quick brown fox</Heading>
          </div>
          <div>
            <Text variant="muted" style={{ fontSize: 12, marginBottom: 8 }}>Body (--font-body)</Text>
            <Text style={{ fontFamily: 'var(--font-body)', fontSize: 16 }}>
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </Text>
          </div>
          <div>
            <Text variant="muted" style={{ fontSize: 12, marginBottom: 8 }}>Mono (--font-mono)</Text>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>
              const greeting = "Hello, World!";
            </code>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Heading Levels</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Heading level={1}>Heading 1 — The quick brown fox</Heading>
          <Heading level={2}>Heading 2 — The quick brown fox</Heading>
          <Heading level={3}>Heading 3 — The quick brown fox</Heading>
          <Heading level={4}>Heading 4 — The quick brown fox</Heading>
          <Heading level={5}>Heading 5 — The quick brown fox</Heading>
          <Heading level={6}>Heading 6 — The quick brown fox</Heading>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Tracking</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Text style={{ letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontSize: 12 }}>
            Wide tracking (0.08em) — ACTION LABELS
          </Text>
          <Text style={{ letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', fontSize: 11 }}>
            Wider tracking (0.12em) — CATEGORY LABELS
          </Text>
        </div>
      </section>
    </div>
  );
}