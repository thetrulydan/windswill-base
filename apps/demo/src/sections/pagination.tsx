import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Pagination } from '@windswill/ui/components/Pagination';

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
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
        <Text variant="muted" style={{ marginTop: 12 }}>Page {page} of {totalPages}</Text>
      </section>
    </div>
  );
}