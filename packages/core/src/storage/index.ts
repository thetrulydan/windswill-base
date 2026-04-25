import Dexie, { type Table } from 'dexie';
import type { User, Session, SyncQueueItem } from '../types/index.js';

export class WindswillDB extends Dexie {
  users!: Table<User, string>;
  sessions!: Table<Session, string>;
  syncQueue!: Table<SyncQueueItem, string>;

  constructor() {
    super('windswill');
    this.version(1).stores({
      users: 'id, email',
      sessions: 'id, userId',
      syncQueue: 'id, entityType, entityId, synced',
    });
  }
}

export const db = new WindswillDB();

export async function getUser(id: string): Promise<User | undefined> {
  return db.users.get(id);
}

export async function getSession(id: string): Promise<Session | undefined> {
  return db.sessions.get(id);
}

export async function saveUser(user: User): Promise<string> {
  return db.users.put(user);
}

export async function saveSession(session: Session): Promise<string> {
  return db.sessions.put(session);
}

export async function deleteSession(id: string): Promise<void> {
  return db.sessions.delete(id);
}

export async function getPendingSyncItems(): Promise<SyncQueueItem[]> {
  return db.syncQueue.where('synced').equals(0).toArray();
}

export async function addToSyncQueue(item: SyncQueueItem): Promise<string> {
  return db.syncQueue.put(item);
}

export async function markSynced(ids: string[]): Promise<void> {
  await db.syncQueue.where('id').anyOf(ids).modify({ synced: true });
}

export async function clearSynced(): Promise<void> {
  await db.syncQueue.where('synced').equals(1).delete();
}