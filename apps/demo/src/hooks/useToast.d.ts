type ToastType = 'success' | 'error' | 'warning' | 'info';
interface Toast {
    id: string;
    type: ToastType;
    message: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    persistent?: boolean;
}
interface ToastStore {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}
export declare const useToastStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ToastStore>>;
export declare function useToast(): {
    success: (message: string, action?: {
        label: string;
        onClick: () => void;
    }) => void;
    error: (message: string, action?: {
        label: string;
        onClick: () => void;
    }) => void;
    warning: (message: string, action?: {
        label: string;
        onClick: () => void;
    }) => void;
    info: (message: string, action?: {
        label: string;
        onClick: () => void;
    }) => void;
    dismiss: (id: string) => void;
};
export {};
