import { type ReactNode, useState, useCallback, createContext, useContext } from 'react';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  action?: ToastAction;
  persistent?: boolean;
}

interface ToastContextValue {
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

interface ToastStoreProviderProps {
  children?: ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export function ToastProvider({ children, position = 'top-right' }: ToastStoreProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...toast, id }]);
    if (!toast.persistent) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    }
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const positionStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 1000,
    ...(position === 'top-right' && { top: 16, right: 16 }),
    ...(position === 'top-left' && { top: 16, left: 16 }),
    ...(position === 'bottom-right' && { bottom: 16, right: 16 }),
    ...(position === 'bottom-left' && { bottom: 16, left: 16 }),
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div style={positionStyle}>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onDismiss={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  const { addToast } = context;
  return {
    success: (message: string, action?: ToastAction) => addToast({ type: 'success', message, action }),
    error: (message: string, action?: ToastAction) => addToast({ type: 'error', message, action }),
    warning: (message: string, action?: ToastAction) => addToast({ type: 'warning', message, action }),
    info: (message: string, action?: ToastAction) => addToast({ type: 'info', message, action }),
    dismiss: context.removeToast,
  };
}

export const useToastStore = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastStore must be used within a ToastProvider');
  }
  return context;
};

const iconColor: Record<ToastType, string> = {
  success: 'var(--color-success)',
  error: 'var(--color-error)',
  warning: 'var(--color-warning)',
  info: 'var(--color-info)',
};

interface ToastItemProps {
  toast: Toast;
  onDismiss: () => void;
}

function ToastItem({ toast, onDismiss }: ToastItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: '12px 16px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderLeft: `2px solid ${iconColor[toast.type]}`,
        marginBottom: 8,
        maxWidth: 400,
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ color: 'var(--color-text)', fontSize: 14 }}>{toast.message}</div>
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            style={{
              marginTop: 8,
              padding: 0,
              background: 'none',
              border: 'none',
              color: 'var(--color-text)',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              cursor: 'pointer',
              letterSpacing: '0.08em',
            }}
          >
            {toast.action.label}
          </button>
        )}
      </div>
      <IconButton
        icon={X}
        size="sm"
        onClick={onDismiss}
        label="Dismiss"
      />
    </div>
  );
}