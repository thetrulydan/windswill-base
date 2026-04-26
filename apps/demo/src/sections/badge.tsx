import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Badge } from '@windswill/ui/components/Badge';

export default function BadgeSection() {
  return (
    <div>
      <Heading level={1}>Badge</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Text label pill for status, counts, or categorization.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Variants</Heading>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>In Context</Heading>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Text>Project Status:</Text>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">In Review</Badge>
          <Badge>Draft</Badge>
        </div>
      </section>
    </div>
  );
}