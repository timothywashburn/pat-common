import { z } from 'zod';
import { notificationTemplateIdSchema, notificationInstanceIdSchema, userIdSchema } from './id-types';
import { Serialized } from '../utils';

export interface NotificationContext<T = any> {
    entityId: string;
    entityType: NotificationEntityType;
    entityData: T;
    userId: string;
}

export enum NotificationTemplateLevel {
    PARENT = 'parent',
    ENTITY = 'entity'
}

export enum NotificationEntityType {
    AGENDA_ITEM = 'agenda_item',

    AGENDA_PANEL = 'agenda_item',
    INBOX_PANEL = 'inbox_panel',
}

export enum NotificationSchedulerType {
    DAY_TIME = 'day_time',
    RELATIVE_DATE = 'relative_date',
}

export const notificationSchedulerDataSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal(NotificationSchedulerType.DAY_TIME),
        days: z.array(z.number().min(0).max(6)),
        time: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/), // HH:mm format
    }),
    z.object({
        type: z.literal(NotificationSchedulerType.RELATIVE_DATE),
        date: z.string(),
        offsetMinutes: z.number().int()
    })
])

export const notificationTemplateSchema = z.object({
    _id: notificationTemplateIdSchema,
    userId: userIdSchema,
    targetLevel: z.nativeEnum(NotificationTemplateLevel),
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string(),
    schedulerData: notificationSchedulerDataSchema,
    variantData: z.any(),
    active: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const createNotificationTemplateRequestSchema = z.object({
    targetLevel: z.nativeEnum(NotificationTemplateLevel),
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string().optional(),
    schedulerData: notificationSchedulerDataSchema,
    variantData: z.any(),
    active: z.boolean().default(true)
});

export const updateNotificationTemplateRequestSchema = z.object({
    schedulerData: notificationSchedulerDataSchema.optional(),
    variantData: z.any().optional(),
    active: z.boolean().optional()
});

export const entitySyncRequestSchema = z.object({
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string(),
    synced: z.boolean()
});

export const getEntitySyncRequestSchema = z.object({
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string()
});

export type NotificationTrigger = z.infer<typeof notificationSchedulerDataSchema>;
export type NotificationTemplateData = z.infer<typeof notificationTemplateSchema>;

export type CreateNotificationTemplateRequest = z.infer<typeof createNotificationTemplateRequestSchema>;
export type UpdateNotificationTemplateRequest = z.infer<typeof updateNotificationTemplateRequestSchema>;
export type EntitySyncRequest = z.infer<typeof entitySyncRequestSchema>;
export type GetEntitySyncRequest = z.infer<typeof getEntitySyncRequestSchema>;

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

export interface EntitySyncResponse {
    success: boolean;
    synced: boolean;
    templates?: Serialized<NotificationTemplateData>[];
    error?: string;
}

export interface GetEntitySyncResponse {
    success: boolean;
    synced: boolean;
    error?: string;
}