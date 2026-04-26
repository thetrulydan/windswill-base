import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import * as LucideIcons from 'lucide-react';

export default function SidebarDemoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Heading level={1}>Sidebar</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Slide-out navigation overlay with nav links and footer slot.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Demo</Heading>
        <Button onClick={() => setIsOpen(true)}>Open Sidebar</Button>

        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 40,
              }}
            />
            <aside
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: 280,
                background: 'var(--color-surface)',
                borderRight: '1px solid var(--color-border)',
                zIndex: 50,
                padding: 20,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <Text style={{ fontWeight: 600, fontSize: 18 }}>Navigation</Text>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>
                  <LucideIcons.X size={20} />
                </button>
              </div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['Dashboard', 'Projects', 'Tasks', 'Team', 'Reports'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      padding: '10px 12px',
                      borderRadius: 6,
                      color: 'var(--color-text)',
                      textDecoration: 'none',
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, paddingTop: 16, borderTop: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-text)', color: 'var(--color-background)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    JD
                  </div>
                  <div>
                    <Text style={{ fontWeight: 500 }}>John Doe</Text>
                    <Text variant="muted" style={{ fontSize: 12 }}>john@example.com</Text>
                  </div>
                </div>
              </div>
            </aside>
          </>
        )}
      </section>
    </div>
  );
}

function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 16px',
        borderRadius: 6,
        border: 'none',
        background: 'var(--color-text)',
        color: 'var(--color-background)',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}