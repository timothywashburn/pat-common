import { z } from "zod";
import { Serialized } from "../../../utils";
import {
    NotificationTemplateData,
    notificationTriggerTypeSchema,
    notificationTemplateDataSchema
} from "../../models";

// Request schema
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

export type UpdateNotificationTemplateRequest = z.infer<typeof updateNotificationTemplateRequestSchema>;

export const updateNotificationTemplateResponseSchema = z.object({
    template: notificationTemplateDataSchema,
});

export type UpdateNotificationTemplateResponse = {
    success: boolean;
    template?: Serialized<NotificationTemplateData>;
    error?: string;
};