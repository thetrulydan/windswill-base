import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import * as LucideIcons from 'lucide-react';

export default function BreadcrumbSection() {
  return (
    <div>
      <Heading level={1}>Breadcrumb</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Navigation path showing the user's location in a hierarchy.
      </Text>

      <section>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
          <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</a>
          <LucideIcons.ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />
          <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Products</a>
          <LucideIcons.ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />
          <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Electronics</a>
          <LucideIcons.ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />
          <span style={{ color: 'var(--color-text)' }}>Laptops</span>
        </nav>
      </section>
    </div>
  );
}