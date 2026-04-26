import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

export default function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const toast = useToast();

  const close = (method: string) => {
    setIsOpen(false);
    toast.info(`Modal closed via ${method}`);
  };

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
            <button
              key={s}
              onClick={() => setSize(s)}
              style={{
                padding: '8px 16px',
                borderRadius: 6,
                border: size === s ? 'none' : '1px solid var(--color-border)',
                background: size === s ? 'var(--color-text)' : 'transparent',
                color: size === s ? 'var(--color-background)' : 'var(--color-text)',
                cursor: 'pointer',
              }}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
        <Button onClick={() => setIsOpen(true)}>Open Modal ({size})</Button>
      </section>

      {isOpen && (
        <>
          <div
            onClick={() => close('backdrop')}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 50,
            }}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: size === 'sm' ? 400 : size === 'lg' ? 720 : 560,
              maxWidth: '90vw',
              maxHeight: '80vh',
              background: 'var(--color-surface)',
              borderRadius: 0,
              border: '1px solid var(--color-border)',
              zIndex: 51,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontWeight: 600, fontSize: 18 }}>Modal Title</Text>
              <button
                onClick={() => close('× button')}
                style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', fontSize: 20 }}
              >
                ×
              </button>
            </div>
            <div style={{ padding: 20, overflow: 'auto', flex: 1 }}>
              <Text>This is the modal body. It can contain any content.</Text>
              <Text variant="muted" style={{ marginTop: 12 }}>
                Try clicking the backdrop or the × button to see different close behaviors.
              </Text>
            </div>
            <div style={{ padding: '12px 20px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <Button variant="ghost" onClick={() => close('Cancel')}>Cancel</Button>
              <Button onClick={() => close('Confirm')}>Confirm</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}