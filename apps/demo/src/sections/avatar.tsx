import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Avatar } from '@windswill/ui/components/Avatar';

export default function AvatarSection() {
  return (
    <div>
      <Heading level={1}>Avatar</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        User representation with image or initials fallback.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Sizes</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Avatar size="sm" fallback="JD" />
          <Avatar size="md" fallback="JD" />
          <Avatar size="lg" fallback="JD" />
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Image</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Avatar size="md" src="https://i.pravatar.cc/150?img=1" alt="John Doe" fallback="JD" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=2" alt="Alice Smith" fallback="AS" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=3" alt="Bob Wilson" fallback="BW" />
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Initials Fallback</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Avatar size="md" fallback="JD" />
          <Avatar size="md" fallback="AS" />
          <Avatar size="md" fallback="BW" />
          <Avatar size="md" fallback="CK" />
        </div>
      </section>
    </div>
  );
}