import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Alert } from '@windswill/ui/components/Alert';
import { Button } from '@windswill/ui/components/Button';

export default function AlertSection() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div>
      <Heading level={1}>Alert</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Contextual feedback messages for user actions.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Variants</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Alert variant="info" title="Information">
            This is an informational alert.
          </Alert>
          <Alert variant="success" title="Success">
            Your changes have been saved.
          </Alert>
          <Alert variant="warning" title="Warning">
            Please review before proceeding.
          </Alert>
          <Alert variant="error" title="Error">
            Something went wrong. Please try again.
          </Alert>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Dismiss</Heading>
        {!dismissed && (
          <Alert variant="info" title="Dismissible Alert">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
              <Text variant="muted">Click the × to dismiss this alert.</Text>
              <Button size="sm" variant="ghost" onClick={() => setDismissed(true)}>×</Button>
            </div>
          </Alert>
        )}
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>With Action</Heading>
        <Alert variant="success" title="Changes saved">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <Text variant="muted">Your profile has been updated.</Text>
            <Button size="sm">View</Button>
          </div>
        </Alert>
      </section>
    </div>
  );
}