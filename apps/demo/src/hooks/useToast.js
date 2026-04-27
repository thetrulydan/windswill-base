import { create } from 'zustand';
export const useToastStore = create((set) => ({
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
        success: (message, action) => addToast({ type: 'success', message, action }),
        error: (message, action) => addToast({ type: 'error', message, action }),
        warning: (message, action) => addToast({ type: 'warning', message, action }),
        info: (message, action) => addToast({ type: 'info', message, action }),
        dismiss: removeToast,
    };
}
