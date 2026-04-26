import { useStore, create } from 'zustand';
import { useMemo } from 'react';
import type { AppState, AppMode } from '../types/index.js';

interface AppStore extends AppState {
  setMode: (mode: AppMode) => void;
  setOnline: (isOnline: boolean) => void;
  setUser: (user: AppState['user']) => void;
  setSession: (session: AppState['session']) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  mode: 'offline',
  isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
  user: null,
  session: null,
  isLoading: false,
  setMode: (mode) => set({ mode }),
  setOnline: (isOnline) => set({ isOnline }),
  setUser: (user) => set({ user }),
  setSession: (session) => set({ session }),
  setLoading: (isLoading) => set({ isLoading }),
  logout: () => set({ user: null, session: null }),
}));

export function useAppMode(): AppMode {
  return useAppStore((state) => state.mode);
}

export function useIsOnline(): boolean {
  return useAppStore((state) => state.isOnline);
}

// Memoize return value to prevent new object on every render
export function useSession() {
  return useAppStore(
    useMemo(
      () => (state) => ({
        user: state.user,
        session: state.session,
        isLoading: state.isLoading,
      }),
      []
    )
  );
}

export function useThemeSetter() {
  const mode = useAppStore((state) => state.mode);
  return (theme: string) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };
}