import { useState } from 'react';
import { Heading } from '@windswill/ui/components/Heading';
import { Text } from '@windswill/ui/components/Text';
import { Button } from '@windswill/ui/components/Button';
import { useToast } from '../hooks/useToast';

export default function ConfirmDialogSection() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [closeOpen, setCloseOpen] = useState(false);
  const toast = useToast();

  return (
    <div>
      <Heading level={1}>ConfirmDialog</Heading>
      <Text variant="muted" style={{ marginBottom: 32 }}>
        Modal variant for destructive confirmations. Bold title, muted body, CANCEL + PROCEED buttons.
      </Text>

      <section style={{ marginBottom: 32 }}>
        <Heading level={3} style={{ marginBottom: 16 }}>Delete Confirmation</Heading>
        <Button variant="destructive" onClick={() => setDeleteOpen(true)}>Delete item</Button>

        {deleteOpen && (
          <>
            <div
              onClick={() => setDeleteOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 50 }}
            />
            <div
              style={{
                position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 400, maxWidth: '90vw', background: 'var(--color-surface)', borderRadius: 0,
                border: '1px solid var(--color-border)', zIndex: 51, padding: 24,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 18, display: 'block', marginBottom: 8 }}>
                Delete this item?
              </Text>
              <Text variant="muted">
                This action cannot be undone. The item will be permanently removed.
              </Text>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
                <Button variant="ghost" onClick={() => { setDeleteOpen(false); toast.warning('Deletion cancelled'); }}>
                  CANCEL
                </Button>
                <Button variant="destructive" onClick={() => { setDeleteOpen(false); toast.success('Item deleted'); }}>
                  PROCEED
                </Button>
              </div>
            </div>
          </>
        )}
      </section>

      <section>
        <Heading level={3} style={{ marginBottom: 16 }}>Unsaved Changes</Heading>
        <Button variant="primary" onClick={() => setCloseOpen(true)}>Close unsaved form</Button>

        {closeOpen && (
          <>
            <div
              onClick={() => setCloseOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 50 }}
            />
            <div
              style={{
                position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 400, maxWidth: '90vw', background: 'var(--color-surface)', borderRadius: 0,
                border: '1px solid var(--color-border)', zIndex: 51, padding: 24,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 18, display: 'block', marginBottom: 8 }}>
                Close without saving?
              </Text>
              <Text variant="muted">
                You have unsaved changes that will be lost.
              </Text>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
                <Button variant="ghost" onClick={() => { setCloseOpen(false); toast.info('Cancelled'); }}>
                  CANCEL
                </Button>
                <Button variant="destructive" onClick={() => { setCloseOpen(false); toast.warning('Form closed'); }}>
                  PROCEED
                </Button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}