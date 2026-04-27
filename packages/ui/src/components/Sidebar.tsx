import { type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Drawer } from './Drawer';

/**
 * Sidebar - Navigation sidebar using Drawer as base
 *
 * Usage:
 * - open, onClose: visibility controls
 * - title: sidebar title
 * - navItems: array of { id, label, href, icon, count }
 * - user: { name, email, avatar, initials }
 * - footer: custom footer content
 * - children: custom content (replaces navItems)
 *
 * Uses Drawer component with edge="left" and custom content.
 */

interface SidebarNavItem {
  id: string;
  label: string;
  href?: string;
  icon?: LucideIcon;
  count?: number;
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
  const sidebarContent = (
    <>
      {children || (
        <nav className="flex flex-col gap-1" style={{ flex: 1 }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href || '#'}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="ghost"
                size="md"
                icon={item.icon}
                count={item.count}
                className="w-full justify-start"
              >
                {item.label}
              </Button>
            </a>
          ))}
        </nav>
      )}

      {(user || footer) && (
        <div className="pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          {user && (
            <div className="flex items-center gap-3">
              <Avatar
                size="sm"
                src={user.avatar}
                fallback={user.initials || user.name.slice(0, 2)}
                alt={user.name}
              />
              <div>
                <span className="font-medium block">{user.name}</span>
                <span className="text-sm text-text-muted">{user.email}</span>
              </div>
            </div>
          )}
          {footer}
        </div>
      )}
    </>
  );

  return (
    <Drawer
      open={open}
      onClose={onClose}
      edge="left"
      title={title}
      showFooter={false}
    >
      {sidebarContent}
    </Drawer>
  );
}