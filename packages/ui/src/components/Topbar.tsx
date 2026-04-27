import { type ReactNode } from 'react';

type TopbarProps = {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
};

export function Topbar({ left, center, right }: TopbarProps) {
  return (
    <header
      style={{
        height: 60,
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        background: 'var(--color-surface)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{left}</div>
      <div>{center}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{right}</div>
    </header>
  );
}