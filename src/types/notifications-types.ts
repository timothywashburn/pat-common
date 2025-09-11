import { z } from 'zod';
import { notificationTemplateIdSchema, notificationDesyncIdSchema, userIdSchema } from './id-types';
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
    HABIT = 'habit',

    AGENDA_PANEL = 'agenda_panel',
    INBOX_PANEL = 'inbox_panel',
}

export enum NotificationSchedulerType {
    DAY_TIME = 'day_time',
    RELATIVE_DATE = 'relative_date',
}

export enum NotificationVariantType {
    AGENDA_ITEM_UPCOMING_DEADLINE = 'agenda_item_upcoming_deadline',
    HABIT_INCOMPLETE = 'habit_incomplete',
}

export const notificationSchedulerDataSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal(NotificationSchedulerType.DAY_TIME),
        days: z.array(z.number().min(0).max(6)),
        time: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/), // HH:mm format
    }),
    z.object({
        type: z.literal(NotificationSchedulerType.RELATIVE_DATE),
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

export const notificationDesyncSchema = z.object({
    _id: notificationDesyncIdSchema,
    userId: userIdSchema,
    targetId: z.string(),
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

export const getEntitySyncRequestSchema = z.object({
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string()
});

export const setEntitySyncRequestSchema = z.object({
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string(),
    synced: z.boolean()
});

export type NotificationTemplateData = z.infer<typeof notificationTemplateSchema>;
export type NotificationDesyncData = z.infer<typeof notificationDesyncSchema>;

export type CreateNotificationTemplateRequest = z.infer<typeof createNotificationTemplateRequestSchema>;
export type UpdateNotificationTemplateRequest = z.infer<typeof updateNotificationTemplateRequestSchema>;

export type GetEntitySyncRequest = z.infer<typeof getEntitySyncRequestSchema>;
export type SetEntitySyncRequest = z.infer<typeof setEntitySyncRequestSchema>;

export interface CreateNotificationTemplateResponse {
    template: Serialized<NotificationTemplateData>;
}

export interface GetNotificationTemplatesResponse {
    templates: Serialized<NotificationTemplateData>[];
}

export interface UpdateNotificationTemplateResponse {
    template: Serialized<NotificationTemplateData>;
}

export interface DeleteNotificationTemplateResponse {}

export interface GetEntitySyncResponse {
    synced: boolean;
}

export interface SetEntitySyncResponse {
    synced: boolean;
}