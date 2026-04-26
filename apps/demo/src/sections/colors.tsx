import { useToast } from '../hooks/useToast';
import { Button } from '@windswill/ui/components/Button';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';

const colors = [
  { name: 'gray-950', var: '--color-gray-950' },
  { name: 'gray-900', var: '--color-gray-900' },
  { name: 'gray-800', var: '--color-gray-800' },
  { name: 'gray-700', var: '--color-gray-700' },
  { name: 'gray-300', var: '--color-gray-300' },
  { name: 'white', var: '--color-white' },
];

const semantic = [
  { name: 'background', var: '--color-background' },
  { name: 'surface', var: '--color-surface' },
  { name: 'surface-raised', var: '--color-surface-raised' },
  { name: 'border', var: '--color-border' },
  { name: 'text', var: '--color-text' },
  { name: 'text-muted', var: '--color-text-muted' },
];

export default function Colors() {
  const toast = useToast();

  return (
    <div>
      <Heading level={1}>Colors & Tokens</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        The design system uses a three-layer token architecture: primitives, semantics, and components.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Primitive Palette</Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
          {colors.map((c) => (
            <div
              key={c.name}
              onClick={() => toast.success(`Copied: ${c.var}`)}
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{
                  height: 60,
                  background: `var(${c.var})`,
                  borderRadius: 8,
                  border: '1px solid var(--color-border)',
                  marginBottom: 8,
                }}
              />
              <Text style={{ fontSize: 12 }}>{c.name}</Text>
              <Text variant="muted" style={{ fontSize: 11 }}>{c.var}</Text>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Semantic Tokens</Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
          {semantic.map((c) => (
            <div
              key={c.name}
              onClick={() => toast.success(`Copied: ${c.var}`)}
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{
                  height: 60,
                  background: `var(${c.var})`,
                  borderRadius: 8,
                  border: '1px solid var(--color-border)',
                  marginBottom: 8,
                }}
              />
              <Text style={{ fontSize: 12 }}>{c.name}</Text>
              <Text variant="muted" style={{ fontSize: 11 }}>{c.var}</Text>
            </div>
          ))}
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
{`/* Using tokens in CSS */
.my-component {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}`}
        </pre>
      </section>
    </div>
  );
}