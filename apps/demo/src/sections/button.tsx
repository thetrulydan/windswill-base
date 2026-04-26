import { useState } from 'react';
import { Button } from '@windswill/ui/components/Button';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import { Plus, Trash, ArrowRight, Search, Settings } from 'lucide-react';

const variants = ['primary', 'secondary', 'ghost', 'destructive', 'noPadding', 'active'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export default function ButtonSection() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleClick = (variant: string, size: string) => {
    toast.success(`Button clicked: ${variant} ${size}`);
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div>
      <Heading level={1}>Button</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Buttons trigger actions. Use primary for main actions, secondary for alternatives, ghost for subtle actions.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Variants × Sizes</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {sizes.map((size) => (
            <div key={size} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <Text style={{ width: 50, fontSize: 12 }}>{size}</Text>
              {variants.map((variant) => (
                <Button
                  key={variant}
                  variant={variant}
                  size={size}
                  onClick={() => handleClick(variant, size)}
                >
                  {variant}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>States</Heading>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button loading={loading} onClick={handleLoading}>
            Loading
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="active">Active</Button>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>With Icons</Heading>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button icon={Plus}>Add Item</Button>
          <Button variant="secondary" icon={ArrowRight}>Continue</Button>
          <Button variant="ghost" icon={Search}>Search</Button>
          <Button variant="destructive" icon={Trash}>Delete</Button>
          <Button variant="active" icon={Settings}>Settings</Button>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginTop: 12 }}>
          <Button icon={Plus} size="sm">Add</Button>
          <Button icon={Plus} size="md">Add</Button>
          <Button icon={Plus} size="lg">Add</Button>
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Usage</Heading>
        <pre style={{
          background: 'var(--color-surface)',
          padding: 16,
          borderRadius: 8,
          overflow: 'auto',
          fontSize: 13,
        }}>
{`<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>`}
        </pre>
      </section>
    </div>
  );
}