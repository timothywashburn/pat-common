import { z } from 'zod';
import { notificationTemplateIdSchema, notificationInstanceIdSchema, userIdSchema } from './id-types';
import { Serialized } from '../utils';

export interface NotificationContext<T = any> {
    entityId: string;
    entityType: NotificationEntityType;
    entityData: T;
    userId: string;
    variables: Record<string, any>;
}

export const notificationEntityTypeSchema = z.enum([
    'agenda', 'tasks', 'habits', 'inbox',
    'agenda_item', 'habit',
    'agenda_defaults', 'habits_defaults'
]);

export const notificationStatusSchema = z.enum(['scheduled', 'sent', 'failed', 'cancelled']);

export const notificationTriggerTypeSchema = z.enum(['time_based', 'event_based', 'recurring']);

export const notificationTriggerSchema = z.object({
    type: notificationTriggerTypeSchema,
    conditions: z.record(z.any()),
    timing: z.record(z.any())
});

export const notificationContentSchema = z.object({
    title: z.string(),
    body: z.string(),
    variables: z.record(z.string()).optional()
});

export const notificationTemplateSchema = z.object({
    _id: notificationTemplateIdSchema,
    userId: userIdSchema,
    entityType: notificationEntityTypeSchema,
    entityId: z.string().optional(),
    name: z.string(),
    description: z.string().optional(),
    trigger: notificationTriggerSchema,
    content: notificationContentSchema,
    active: z.boolean(),
    inheritedFrom: notificationTemplateIdSchema.optional(),
    customized: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const createNotificationTemplateSchema = notificationTemplateSchema.omit({
    _id: true,
    createdAt: true,
    updatedAt: true
});

export const entitySyncStateSchema = z.object({
    userId: userIdSchema,
    entityType: notificationEntityTypeSchema,
    entityId: z.string(),
    synced: z.boolean(),
    updatedAt: z.date()
});

export const notificationInstanceSchema = z.object({
    _id: notificationInstanceIdSchema,
    templateId: notificationTemplateIdSchema,
    userId: userIdSchema,
    entityId: z.string(),
    scheduledFor: z.date(),
    status: notificationStatusSchema,
    sentAt: z.date().optional(),
    content: z.object({
        title: z.string(),
        body: z.string(),
        data: z.record(z.any()).optional()
    }),
    redisId: z.string(),
    error: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const createNotificationTemplateRequestSchema = z.object({
    entityType: notificationEntityTypeSchema,
    entityId: z.string().optional(),
    name: z.string().min(1).max(100),
    description: z.string().max(500).optional(),
    trigger: z.object({
        type: notificationTriggerTypeSchema,
        conditions: z.record(z.any()),
        timing: z.record(z.any())
    }),
    content: z.object({
        title: z.string().min(1).max(200),
        body: z.string().min(1).max(1000),
        variables: z.record(z.string()).optional()
    }),
    active: z.boolean().default(true),
    inheritedFrom: z.string().optional(),
    customized: z.boolean().default(false)
});

export const updateNotificationTemplateRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    trigger: z.object({
        type: notificationTriggerTypeSchema,
        conditions: z.record(z.any()),
        timing: z.record(z.any())
    }).optional(),
    content: z.object({
        title: z.string(),
        body: z.string(),
        variables: z.record(z.string()).optional()
    }).optional(),
    active: z.boolean().optional(),
    customized: z.boolean().optional()
});

export const syncNotificationTemplateRequestSchema = z.object({
    sync: z.boolean()
});

export const previewNotificationTemplateRequestSchema = z.object({
    templateTitle: z.string(),
    templateBody: z.string(),
    entityType: z.string(),
    entityId: z.string(),
    variables: z.record(z.any()).optional()
});

export const getNotificationInstancesRequestSchema = z.object({
    status: z.string().optional(),
    templateId: z.string().optional(),
    entityId: z.string().optional(),
    limit: z.number().optional(),
    offset: z.number().optional()
});

export type NotificationEntityType = z.infer<typeof notificationEntityTypeSchema>;
export type NotificationTriggerType = z.infer<typeof notificationTriggerTypeSchema>;
export type NotificationStatus = z.infer<typeof notificationStatusSchema>;
export type NotificationTrigger = z.infer<typeof notificationTriggerSchema>;
export type NotificationContent = z.infer<typeof notificationContentSchema>;
export type NotificationTemplateData = z.infer<typeof notificationTemplateSchema>;
export type CreateNotificationTemplateData = z.infer<typeof createNotificationTemplateSchema>;
export type EntitySyncState = z.infer<typeof entitySyncStateSchema>;
export type NotificationInstanceData = z.infer<typeof notificationInstanceSchema>;

export type CreateNotificationTemplateRequest = z.infer<typeof createNotificationTemplateRequestSchema>;
export type UpdateNotificationTemplateRequest = z.infer<typeof updateNotificationTemplateRequestSchema>;
export type SyncNotificationTemplateRequest = z.infer<typeof syncNotificationTemplateRequestSchema>;
export type PreviewNotificationTemplateRequest = z.infer<typeof previewNotificationTemplateRequestSchema>;
export type GetNotificationInstancesRequest = z.infer<typeof getNotificationInstancesRequestSchema>;

export interface CreateNotificationTemplateResponse {
    template: Serialized<NotificationTemplateData>;
}

export interface GetNotificationTemplatesResponse {
    templates: Serialized<NotificationTemplateData>[];
}

export interface GetNotificationTemplateResponse {
    template: Serialized<NotificationTemplateData>;
}

export interface UpdateNotificationTemplateResponse {
    template: Serialized<NotificationTemplateData>;
}

export interface DeleteNotificationTemplateResponse {}

export interface SyncNotificationTemplateResponse {
    synced: boolean;
}

export interface PreviewNotificationTemplateResponse {
    preview: {
        title: string;
        body: string;
        variables: Record<string, any>;
    };
    missingVariables: string[];
}

export interface GetNotificationInstancesResponse {
    success: boolean;
    instances?: Serialized<NotificationInstanceData>[];
    total?: number;
    error?: string;
}