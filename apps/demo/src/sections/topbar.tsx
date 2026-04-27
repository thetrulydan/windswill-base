import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import * as LucideIcons from 'lucide-react';
import { Button } from '@windswill/ui/components/Button';

export default function TopbarSection() {
  const [showLeft, setShowLeft] = useState(true);
  const [showCenter, setShowCenter] = useState(true);
  const [showRight, setShowRight] = useState(true);

  return (
    <div>
      <Heading level={1}>TopBar</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Fixed header with left, center, and right slots.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Slots</Heading>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={showLeft} onChange={(e) => setShowLeft(e.target.checked)} />
            <span>Left</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={showCenter} onChange={(e) => setShowCenter(e.target.checked)} />
            <span>Center</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={showRight} onChange={(e) => setShowRight(e.target.checked)} />
            <span>Right</span>
          </label>
        </div>
      </section>

      <section>
        <div
          style={{
            height: 60,
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            background: 'var(--color-surface)',
            borderRadius: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {showLeft && (
              <>
                <LucideIcons.Menu size={20} />
                <Text style={{ fontWeight: 600 }}>My App</Text>
              </>
            )}
          </div>
          <div>
            {showCenter && <Text>Center Title</Text>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {showRight && (
              <>
                <Button size="sm" aria-label="Search" onClick={() => {}} icon={LucideIcons.Search} />
                <Button size="sm" aria-label="Settings" onClick={() => {}} icon={LucideIcons.Settings} />
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-text)', color: 'var(--color-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                  JD
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
