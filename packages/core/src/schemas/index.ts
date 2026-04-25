import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1).max(255),
  avatarUrl: z.string().url().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const sessionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  expiresAt: z.date(),
  refreshToken: z.string().optional(),
});

export const syncQueueItemSchema = z.object({
  id: z.string().uuid(),
  operation: z.enum(['create', 'update', 'delete']),
  entityType: z.string(),
  entityId: z.string(),
  payload: z.unknown(),
  timestamp: z.date(),
  synced: z.boolean(),
});

export type UserInput = z.infer<typeof userSchema>;
export type SessionInput = z.infer<typeof sessionSchema>;
export type SyncQueueItemInput = z.infer<typeof syncQueueItemSchema>;