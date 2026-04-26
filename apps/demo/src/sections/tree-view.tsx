import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { useToast } from '../hooks/useToast';
import * as LucideIcons from 'lucide-react';

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  badge?: string;
}

const initialTree: TreeNode[] = [
  {
    id: '1',
    label: 'Documents',
    children: [
      { id: '1-1', label: 'Work', children: [
        { id: '1-1-1', label: 'Project Proposal.pdf' },
        { id: '1-1-2', label: 'Budget.xlsx' },
      ]},
      { id: '1-2', label: 'Personal', children: [
        { id: '1-2-1', label: 'Resume.pdf' },
        { id: '1-2-2', label: 'Notes.txt' },
      ]},
    ],
  },
  {
    id: '2',
    label: 'Images',
    badge: '12',
    children: [
      { id: '2-1', label: 'Screenshots' },
      { id: '2-2', label: 'Photos' },
    ],
  },
  { id: '3', label: 'readme.md' },
];

export default function TreeViewSection() {
  const [tree, setTree] = useState(initialTree);
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['1', '2']));
  const toast = useToast();

  const toggle = (id: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) newExpanded.delete(id);
    else newExpanded.add(id);
    setExpanded(newExpanded);
  };

  const renderNode = (node: TreeNode, depth: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded.has(node.id);

    return (
      <div key={node.id}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            paddingLeft: depth * 20 + 12,
            cursor: hasChildren ? 'pointer' : 'default',
            borderRadius: 0,
          }}
          onClick={() => hasChildren && toggle(node.id)}
        >
          {hasChildren ? (
            <LucideIcons.ChevronRight
              size={14}
              style={{
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
                color: 'var(--color-text-muted)',
              }}
            />
          ) : (
            <span style={{ width: 14 }} />
          )}
          <LucideIcons.Folder size={16} style={{ color: 'var(--color-text-muted)' }} />
          <span style={{ flex: 1 }}>{node.label}</span>
          {node.badge && (
            <span style={{ background: 'var(--color-surface-raised)', padding: '2px 6px', fontSize: '0.6875rem' }}>
              {node.badge}
            </span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Heading level={1}>TreeView</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Hierarchical expandable tree with drag-reorder support.
      </Text>

      <section>
        <div style={{ border: '1px solid var(--color-border)', padding: 8 }}>
          {tree.map((node) => renderNode(node))}
        </div>
        <Text variant="muted" style={{ marginTop: 16 }}>
          Click folders to expand/collapse. Badge shows item count.
        </Text>
      </section>
    </div>
  );
}