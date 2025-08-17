import { z } from 'zod';
import { notificationTemplateIdSchema, notificationInstanceIdSchema, userIdSchema } from './id-types';
import { Serialized } from '../utils';

export interface NotificationContext<T = any> {
    entityId: string;
    entityType: NotificationEntityType;
    entityData: T;
    userId: string;
}

export enum TargetType {
    PARENT = 'parent',
    ENTITY = 'entity'
}

export enum NotificationParentType {
    AGENDA_PANEL = 'agenda_panel',
}

export enum NotificationEntityType {
    INBOX_PANEL = 'inbox_panel',
    AGENDA_PANEL = 'agenda_item',
    AGENDA_ITEM = 'agenda_item',
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
    targetType: z.nativeEnum(TargetType),
    targetId: z.string(),
    // entityType: z.nativeEnum(NotificationEntityType),
    // entityId: z.string().optional(),
    trigger: notificationTriggerSchema,
    active: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const createNotificationTemplateRequestSchema = z.object({
    entityType: z.nativeEnum(NotificationEntityType),
    entityId: z.string().optional(),
    trigger: z.object({
        type: notificationTriggerTypeSchema,
    }),
    active: z.boolean().default(true)
});

export const updateNotificationTemplateRequestSchema = z.object({
    trigger: z.object({
        type: notificationTriggerTypeSchema,
    }).optional(),
    active: z.boolean().optional()
});

export const entitySyncRequestSchema = z.object({
    entityType: z.nativeEnum(NotificationEntityType),
    entityId: z.string(),
    synced: z.boolean()
});

export const getEntitySyncRequestSchema = z.object({
    entityType: z.nativeEnum(NotificationEntityType),
    entityId: z.string()
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
    hasParentTemplates: boolean;
    error?: string;
}