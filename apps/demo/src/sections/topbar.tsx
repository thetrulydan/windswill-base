import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Topbar } from '@windswill/ui/components/Topbar';
import { Button } from '@windswill/ui/components/Button';
import { Checkbox } from '@windswill/ui/components/Checkbox';
import * as LucideIcons from 'lucide-react';

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
            <Checkbox checked={showLeft} onCheckedChange={(checked) => setShowLeft(!!checked)} />
            <span>Left</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Checkbox checked={showCenter} onCheckedChange={(checked) => setShowCenter(!!checked)} />
            <span>Center</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Checkbox checked={showRight} onCheckedChange={(checked) => setShowRight(!!checked)} />
            <span>Right</span>
          </label>
        </div>
      </section>

      <section>
        <Topbar
          left={
            showLeft && (
              <>
                <LucideIcons.Menu size={20} />
                <Text style={{ fontWeight: 600 }}>My App</Text>
              </>
            )
          }
          center={showCenter ? <Text>Center Title</Text> : undefined}
          right={
            showRight && (
              <>
                <Button size="sm" aria-label="Search" onClick={() => {}} icon={LucideIcons.Search} />
                <Button size="sm" aria-label="Settings" onClick={() => {}} icon={LucideIcons.Settings} />
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-text)', color: 'var(--color-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                  JD
                </div>
              </>
            )
          }
        />
      </section>
    </div>
  );
}
