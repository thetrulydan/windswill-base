import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={twMerge(clsx('w-full', className))}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          ...style,
        }}
        {...props}
      >
        {children}
      </table>
    );
  }
);

Table.displayName = 'Table';

export const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={twMerge(className)}
        style={{
          borderBottom: '1px solid var(--color-border)',
          ...style,
        }}
        {...props}
      >
        {children}
      </thead>
    );
  }
);

TableHeader.displayName = 'TableHeader';

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={twMerge(className)}
        style={style}
        {...props}
      >
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody';

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={twMerge(className)}
        style={{
          borderBottom: '1px solid var(--color-border)',
          ...style,
        }}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

export const TableHead = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={twMerge(clsx('text-left', className))}
        style={{
          padding: '0.75rem 1rem',
          fontSize: '0.6875rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--color-text-muted)',
          ...style,
        }}
        {...props}
      >
        {children}
      </th>
    );
  }
);

TableHead.displayName = 'TableHead';

export const TableCell = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={twMerge(className)}
        style={{
          padding: '0.75rem 1rem',
          fontSize: '0.9375rem',
          color: 'var(--color-text)',
          ...style,
        }}
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell';