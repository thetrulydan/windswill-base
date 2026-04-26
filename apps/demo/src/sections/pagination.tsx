import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';

export default function PaginationSection() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  return (
    <div>
      <Heading level={1}>Pagination</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Page navigation for large datasets.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Button size="sm" variant="secondary" onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>Previous</Button>

          {[1, 2, 3, 4, 5, '...', 10].map((item, i) => (
            <Button
              key={i}
              size="sm"
              variant={page === item ? 'primary' : 'secondary'}
              onClick={() => typeof item === 'number' && setPage(item)}
              disabled={item === '...'}
              style={{ minWidth: 36 }}
            >
              {item}
            </Button>
          ))}

          <Button size="sm" variant="secondary" onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}>Next</Button>
        </div>
        <Text variant="muted" style={{ marginTop: 12 }}>Page {page} of {totalPages}</Text>
      </section>
    </div>
  );
}