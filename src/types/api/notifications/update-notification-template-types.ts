import { z } from "zod";
import { Serialized } from "../../../utils";
import { NotificationTemplateData, notificationEntityTypeSchema, notificationTriggerTypeSchema } from "../../models/notification-template-data";

// Request schema
export const updateNotificationTemplateRequestSchema = z.object({
    name: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
    trigger: z.object({
        type: notificationTriggerTypeSchema,
        conditions: z.record(z.any()),
        timing: z.record(z.any())
    }).optional(),
    content: z.object({
        title: z.string().min(1).max(200),
        body: z.string().min(1).max(1000),
        variables: z.record(z.string()).optional()
    }).optional(),
    active: z.boolean().optional(),
    customized: z.boolean().optional()
});

export type UpdateNotificationTemplateRequest = z.infer<typeof updateNotificationTemplateRequestSchema>;

// Response schema
export const updateNotificationTemplateResponseSchema = z.object({
    success: z.boolean(),
    template: z.any().optional(), // Will be Serialized<NotificationTemplateData>
    error: z.string().optional()
});

export type UpdateNotificationTemplateResponse = {
    success: boolean;
    template?: Serialized<NotificationTemplateData>;
    error?: string;
};