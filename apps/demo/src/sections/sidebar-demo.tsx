import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { Sidebar } from '@windswill/ui/components/Sidebar';
import { LayoutDashboard, FolderKanban, CheckSquare, Users, BarChart3, Settings } from 'lucide-react';

export default function SidebarDemoSection() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', href: '#', icon: LayoutDashboard, count: 3 },
    { id: 'projects', label: 'Projects', href: '#', icon: FolderKanban, count: 12 },
    { id: 'tasks', label: 'Tasks', href: '#', icon: CheckSquare, count: 48 },
    { id: 'team', label: 'Team', href: '#', icon: Users, count: 5 },
    { id: 'reports', label: 'Reports', href: '#', icon: BarChart3 },
    { id: 'settings', label: 'Settings', href: '#', icon: Settings },
  ];

  return (
    <div>
      <Heading level={1}>Sidebar</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Slide-out navigation overlay with nav links and footer slot.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Demo</Heading>
        <Button onClick={() => setIsOpen(true)}>Open Sidebar</Button>

        <Sidebar
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Navigation"
          navItems={navItems}
          user={{
            name: 'John Doe',
            email: 'john@example.com',
            initials: 'JD',
          }}
        />
      </section>
    </div>
  );
}