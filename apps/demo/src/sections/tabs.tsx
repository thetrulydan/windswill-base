import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@windswill/ui/components/Tabs';

const tabs = ['Overview', 'Features', 'Pricing', 'Contact'];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div>
      <Heading level={1}>Tabs</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Horizontal and vertical tab navigation for organizing content.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Horizontal</Heading>
        <Tabs defaultValue="Overview" onChange={(value) => setActiveTab(value)}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="Overview">
            <Text>Content for: <strong>Overview</strong></Text>
          </TabsContent>
          <TabsContent value="Features">
            <Text>Content for: <strong>Features</strong></Text>
          </TabsContent>
          <TabsContent value="Pricing">
            <Text>Content for: <strong>Pricing</strong></Text>
          </TabsContent>
          <TabsContent value="Contact">
            <Text>Content for: <strong>Contact</strong></Text>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Vertical</Heading>
        <div style={{ display: 'flex', gap: 24 }}>
          <Tabs defaultValue="Overview">
            <TabsList style={{ flexDirection: 'column', borderRight: '1px solid var(--color-border)', borderBottom: 'none', paddingRight: 16 }}>
              {tabs.map((tab) => (
                <TabsTrigger key={tab} value={tab} style={{ textAlign: 'left' }}>{tab}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="Overview">
              <Text>Vertical content: <strong>Overview</strong></Text>
            </TabsContent>
            <TabsContent value="Features">
              <Text>Vertical content: <strong>Features</strong></Text>
            </TabsContent>
            <TabsContent value="Pricing">
              <Text>Vertical content: <strong>Pricing</strong></Text>
            </TabsContent>
            <TabsContent value="Contact">
              <Text>Vertical content: <strong>Contact</strong></Text>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}