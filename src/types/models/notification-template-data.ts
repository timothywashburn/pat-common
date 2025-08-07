import { z } from "zod";
import { NotificationTemplateId, UserId } from "../id-types";

export const notificationEntityTypeSchema = z.enum([
    // Individual entity types (notifications FOR the entity itself)
    'agenda', 'tasks', 'habits', 'inbox',
    'agenda_item', 'task_list', 'task', 'habit',
    
    // Parent template types (default templates for children)
    'agenda_defaults', 'tasks_defaults', 'habits_defaults'
]);
export type NotificationEntityType = z.infer<typeof notificationEntityTypeSchema>;

export const notificationTriggerTypeSchema = z.enum(['time_based', 'event_based', 'recurring']);
export type NotificationTriggerType = z.infer<typeof notificationTriggerTypeSchema>;

export const notificationTriggerSchema = z.object({
    type: notificationTriggerTypeSchema,
    conditions: z.record(z.any()), // flexible conditions object
    timing: z.record(z.any()) // timing configuration like "5 minutes before due"
});
export type NotificationTrigger = z.infer<typeof notificationTriggerSchema>;

export const notificationContentSchema = z.object({
    title: z.string(),
    body: z.string(),
    // Support for template variables like {{entity.name}}
    variables: z.record(z.string()).optional()
});
export type NotificationContent = z.infer<typeof notificationContentSchema>;

export const notificationTemplateDataSchema = z.object({
    _id: z.string().transform((val): NotificationTemplateId => val as NotificationTemplateId),
    userId: z.string().transform((val): UserId => val as UserId),
    entityType: notificationEntityTypeSchema,
    entityId: z.string().optional(), // null/undefined for panel-level templates
    name: z.string(),
    description: z.string().optional(),
    trigger: notificationTriggerSchema,
    content: notificationContentSchema,
    active: z.boolean().default(true),
    inheritedFrom: z.string().transform((val): NotificationTemplateId => val as NotificationTemplateId).optional(),
    customized: z.boolean().default(false), // true if user modified inherited template
    createdAt: z.date(),
    updatedAt: z.date()
});

export type NotificationTemplateData = z.infer<typeof notificationTemplateDataSchema>;

// Helper type for creating new templates (without _id, dates)
export const createNotificationTemplateSchema = notificationTemplateDataSchema.omit({
    _id: true,
    createdAt: true,
    updatedAt: true
});

export type CreateNotificationTemplateData = z.infer<typeof createNotificationTemplateSchema>;

// Entity sync state for inheritance
export const entitySyncStateSchema = z.object({
    userId: z.string().transform((val): UserId => val as UserId),
    entityType: notificationEntityTypeSchema,
    entityId: z.string(),
    synced: z.boolean().default(true), // true = inheriting from parent, false = has custom templates
    updatedAt: z.date()
});
export type EntitySyncState = z.infer<typeof entitySyncStateSchema>;