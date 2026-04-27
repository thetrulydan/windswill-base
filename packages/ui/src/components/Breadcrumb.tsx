import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './Button';

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
        if (isLast) {
          return (
            <span key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {defaultSeparator}
              <Button variant="active" size="md">
                {item.label}
              </Button>
            </span>
          );
        }
        return (
          <span key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {index > 0 && defaultSeparator}
            {item.href ? (
              <a href={item.href} style={{ textDecoration: 'none' }}>
                <Button variant="underline" size="md">
                  {item.label}
                </Button>
              </a>
            ) : (
              <span style={{ color: 'var(--color-text-muted)' }}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}