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

export enum NotificationTriggerType {
    TIME_BASED = 'time_based',
    EVENT_BASED = 'event_based',
    RECURRING = 'recurring'
}

export const notificationTriggerTypeSchema = z.nativeEnum(NotificationTriggerType);

export const notificationTriggerSchema = z.object({
    type: notificationTriggerTypeSchema,
});

export const notificationTemplateSchema = z.object({
    _id: notificationTemplateIdSchema,
    userId: userIdSchema,
    targetLevel: z.nativeEnum(NotificationTemplateLevel),
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string(),
    // entityType: z.nativeEnum(NotificationEntityType),
    // entityId: z.string().optional(),
    trigger: notificationTriggerSchema,
    active: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const createNotificationTemplateRequestSchema = z.object({
    targetLevel: z.nativeEnum(NotificationTemplateLevel),
    targetEntityType: z.nativeEnum(NotificationEntityType),
    targetId: z.string().optional(),
    trigger: notificationTriggerSchema,
    active: z.boolean().default(true)
});

export const updateNotificationTemplateRequestSchema = z.object({
    trigger: z.object({
        type: notificationTriggerTypeSchema,
    }).optional(),
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

export type NotificationTrigger = z.infer<typeof notificationTriggerSchema>;
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