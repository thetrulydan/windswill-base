import { type ReactNode } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { Avatar } from './Avatar';

interface SidebarNavItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
}

interface SidebarUser {
  name: string;
  email: string;
  avatar?: string;
  initials?: string;
}

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  navItems?: SidebarNavItem[];
  user?: SidebarUser;
  footer?: ReactNode;
  children?: ReactNode;
}

export function Sidebar({ open, onClose, title = 'Navigation', navItems = [], user, footer, children }: SidebarProps) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
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
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <span style={{ fontWeight: 600, fontSize: 18 }}>{title}</span>
          <IconButton icon={X} size="sm" onClick={onClose} label="Close sidebar" />
        </div>

        {children || (
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href || '#'}
                style={{
                  padding: '10px 12px',
                  borderRadius: 0,
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {(user || footer) && (
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            paddingTop: 16,
            borderTop: '1px solid var(--color-border)',
          }}>
            {user && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar
                  size="sm"
                  src={user.avatar}
                  fallback={user.initials || user.name.slice(0, 2)}
                  alt={user.name}
                />
                <div>
                  <span style={{ fontWeight: 500, display: 'block' }}>{user.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{user.email}</span>
                </div>
              </div>
            )}
            {footer}
          </div>
        )}
      </aside>
    </>
  );
}