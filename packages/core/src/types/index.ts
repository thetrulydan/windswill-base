export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
  refreshToken?: string;
}

export type AppMode = 'offline' | 'local' | 'cloud';

export interface AppState {
  mode: AppMode;
  isOnline: boolean;
  user: User | null;
  session: Session | null;
  isLoading: boolean;
}

export interface SyncQueueItem {
  id: string;
  operation: 'create' | 'update' | 'delete';
  entityType: string;
  entityId: string;
  payload: unknown;
  timestamp: Date;
  synced: boolean;
}

export interface Theme {
  id: string;
  name: string;
  isDark: boolean;
}

export interface StorageAdapter {
  get<T>(key: string): Promise<T | undefined>;
  set<T>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}