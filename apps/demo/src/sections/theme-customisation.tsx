import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

const tokens = [
  { name: 'Background', var: '--color-background', default: '#0a0a0a' },
  { name: 'Surface', var: '--color-surface', default: '#171717' },
  { name: 'Surface Raised', var: '--color-surface-raised', default: '#262626' },
  { name: 'Border', var: '--color-border', default: '#404040' },
  { name: 'Text', var: '--color-text', default: '#fafafa' },
  { name: 'Text Muted', var: '--color-text-muted', default: '#a3a3a3' },
  { name: 'Primary BG', var: '--button-primary-bg', default: '#ffffff' },
  { name: 'Primary Text', var: '--button-primary-text', default: '#0a0a0a' },
];

export default function ThemeCustomisationSection() {
  const toast = useToast();
  const [overrides, setOverrides] = useState<Record<string, string>>({});

  const updateToken = (token: string, value: string) => {
    const newOverrides = { ...overrides, [token]: value };
    setOverrides(newOverrides);
    document.documentElement.style.setProperty(token, value);
  };

  const resetTheme = () => {
    setOverrides({});
    tokens.forEach((t) => {
      document.documentElement.style.setProperty(t.var, t.default);
    });
    toast.info('Theme reset to defaults');
  };

  const copyTheme = () => {
    const css = Object.entries(overrides)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');
    const themeCSS = `[data-theme="custom"] {\n${css}\n}`;
    navigator.clipboard.writeText(themeCSS);
    toast.success('Theme CSS copied to clipboard');
  };

  return (
    <div>
      <Heading level={1}>Theme Customisation</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Edit semantic tokens live and export custom themes.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Semantic Tokens</Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {tokens.map((token) => (
            <div key={token.var} style={{ padding: 12, background: 'var(--color-surface)', borderRadius: 8, border: '1px solid var(--color-border)' }}>
              <Text style={{ fontWeight: 500, display: 'block', marginBottom: 8 }}>{token.name}</Text>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  type="color"
                  value={overrides[token.var] || token.default}
                  onChange={(e) => updateToken(token.var, e.target.value)}
                  style={{ width: 32, height: 32, padding: 0, border: 'none', borderRadius: 4, cursor: 'pointer' }}
                />
                <input
                  type="text"
                  value={overrides[token.var] || token.default}
                  onChange={(e) => updateToken(token.var, e.target.value)}
                  style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid var(--color-border)', background: 'var(--color-background)', color: 'var(--color-text)', fontSize: 12, fontFamily: 'monospace' }}
                />
              </div>
              <Text variant="muted" style={{ fontSize: 10, marginTop: 4 }}>{token.var}</Text>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Actions</Heading>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="secondary" onClick={copyTheme}>Copy Theme CSS</Button>
          <Button variant="ghost" onClick={resetTheme}>Reset to Default</Button>
        </div>
      </section>
    </div>
  );
}