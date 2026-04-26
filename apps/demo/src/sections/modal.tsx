import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Modal } from '@windswill/ui/components/Modal';

export default function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  const sizes = ['sm', 'md', 'lg'] as const;

  return (
    <div>
      <Heading level={1}>Modal</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Overlay dialog with title, body, and footer. Sizes: sm (400px), md (560px), lg (720px).
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Size Selector</Heading>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {sizes.map((s) => (
            <Button
              key={s}
              variant={size === s ? 'primary' : 'secondary'}
              onClick={() => setSize(s)}
            >
              {s.toUpperCase()}
            </Button>
          ))}
        </div>
        <Button onClick={() => setIsOpen(true)}>Open Modal ({size})</Button>
      </section>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        description="This is the modal body with a description."
        size={size}
        primaryButton={{ label: 'Confirm', onClick: () => setIsOpen(false) }}
        secondaryButton={{ label: 'Cancel', onClick: () => setIsOpen(false) }}
      >
        <Text>This is the modal body. It can contain any content.</Text>
      </Modal>
    </div>
  );
}