import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Card, CardHeader, CardBody, CardFooter } from '@windswill/ui/components/Card';

export default function CardSection() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <Heading level={1}>Card</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Container component with header, body, footer, and action slots.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Variants</Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          <Card>
            <CardBody>
              <Text style={{ fontWeight: 600 }}>Body Only</Text>
              <Text variant="muted" style={{ marginTop: '0.5rem' }}>
                This card has no header or footer. Just content.
              </Text>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Text style={{ fontWeight: 600 }}>With Header</Text>
            </CardHeader>
            <CardBody>
              <Text variant="muted">Card body with header section.</Text>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Text style={{ fontWeight: 600 }}>With Footer</Text>
            </CardHeader>
            <CardBody>
              <Text variant="muted">Card body with footer section.</Text>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="ghost">Cancel</Button>
              <Button size="sm">Save</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Hover State</Heading>
        <Card
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            borderColor: hover ? 'var(--color-text)' : 'var(--color-border)',
            cursor: 'pointer',
            transition: 'border-color 0.2s',
          }}
        >
          <CardBody>
            <Text style={{ fontWeight: 600 }}>Hover me</Text>
            <Text variant="muted" style={{ marginTop: '0.5rem' }}>
              This card changes border on hover.
            </Text>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}