import { create } from 'zustand';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  action?: { label: string; onClick: () => void };
  persistent?: boolean;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).slice(2);
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }));
    if (!toast.persistent) {
      setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
      }, 4000);
    }
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

export function useToast() {
  const { addToast, removeToast } = useToastStore();
  return {
    success: (message: string, action?: { label: string; onClick: () => void }) =>
      addToast({ type: 'success', message, action }),
    error: (message: string, action?: { label: string; onClick: () => void }) =>
      addToast({ type: 'error', message, action }),
    warning: (message: string, action?: { label: string; onClick: () => void }) =>
      addToast({ type: 'warning', message, action }),
    info: (message: string, action?: { label: string; onClick: () => void }) =>
      addToast({ type: 'info', message, action }),
    dismiss: removeToast,
  };
}