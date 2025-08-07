import { z } from "zod";
import { Serialized } from "../../../utils";
import { NotificationTemplateData } from "../../models/notification-template-data";

// Request schema - no body needed for GET
export const getNotificationTemplatesRequestSchema = z.object({});

export type GetNotificationTemplatesRequest = z.infer<typeof getNotificationTemplatesRequestSchema>;

// Response schema
export const getNotificationTemplatesResponseSchema = z.object({
    success: z.boolean(),
    templates: z.array(z.any()).optional(), // Will be Serialized<NotificationTemplateData>[]
    error: z.string().optional()
});

export type GetNotificationTemplatesResponse = {
    success: boolean;
    templates?: Serialized<NotificationTemplateData>[];
    error?: string;
};