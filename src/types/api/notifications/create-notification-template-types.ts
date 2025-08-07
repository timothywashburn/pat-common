import { z } from "zod";
import { Serialized } from "../../../utils";
import { NotificationTemplateData, CreateNotificationTemplateData, notificationEntityTypeSchema, notificationTriggerTypeSchema } from "../../models/notification-template-data";

// Request schema
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

export type CreateNotificationTemplateRequest = z.infer<typeof createNotificationTemplateRequestSchema>;

// Response schema
export const createNotificationTemplateResponseSchema = z.object({
    success: z.boolean(),
    template: z.any().optional(), // Will be Serialized<NotificationTemplateData>
    error: z.string().optional()
});

export type CreateNotificationTemplateResponse = {
    success: boolean;
    template?: Serialized<NotificationTemplateData>;
    error?: string;
};