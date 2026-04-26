import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
}

export function Breadcrumb({ items, separator }: BreadcrumbProps) {
  const defaultSeparator = separator || <ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />;

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {index > 0 && defaultSeparator}
            {item.href && !isLast ? (
              <a href={item.href} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                {item.label}
              </a>
            ) : (
              <span style={{ color: isLast ? 'var(--color-text)' : 'var(--color-text-muted)' }}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}