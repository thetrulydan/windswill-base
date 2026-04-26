import { Button } from './Button';
import { IconButton } from './IconButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange?: (page: number) => void;
  siblingCount?: number;
}

export function Pagination({ page, totalPages, onChange, siblingCount = 1 }: PaginationProps) {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 5;
    const totalVisiblePages = Math.min(totalPageNumbers, totalPages);

    if (totalPages <= totalVisiblePages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    if (!showLeftDots && showRightDots) {
      return [1, ...range(2, 2 + siblingCount * 2 + 1), '...', totalPages];
    }

    if (showLeftDots && !showRightDots) {
      return [1, '...', ...range(totalPages - 2 - siblingCount * 2, totalPages - 1), totalPages];
    }

    return [1, '...', ...range(leftSiblingIndex, rightSiblingIndex), '...', totalPages];
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onChange?.(newPage);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <IconButton
        icon={ChevronLeft}
        size="sm"
        variant="secondary"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        label="Previous page"
      />

      {getPageNumbers().map((item, index) => {
        if (item === '...') {
          return (
            <span key={`ellipsis-${index}`} style={{ padding: '0 8px', color: 'var(--color-text-muted)' }}>
              ...
            </span>
          );
        }

        return (
          <Button
            key={item}
            size="sm"
            variant={page === item ? 'primary' : 'secondary'}
            onClick={() => handlePageChange(item as number)}
            style={{ minWidth: 36 }}
          >
            {item}
          </Button>
        );
      })}

      <IconButton
        icon={ChevronRight}
        size="sm"
        variant="secondary"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        label="Next page"
      />
    </div>
  );
}