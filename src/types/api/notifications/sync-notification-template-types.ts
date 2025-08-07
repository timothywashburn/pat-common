import { z } from "zod";
import { Serialized } from "../../../utils";
import { NotificationTemplateData } from "../../models/notification-template-data";

// Request schema
export const syncNotificationTemplateRequestSchema = z.object({
    sync: z.boolean() // true to sync with parent, false to unsync
});

export type SyncNotificationTemplateRequest = z.infer<typeof syncNotificationTemplateRequestSchema>;

// Response schema
export const syncNotificationTemplateResponseSchema = z.object({
    success: z.boolean(),
    template: z.any().optional(), // Will be Serialized<NotificationTemplateData>
    error: z.string().optional()
});

export type SyncNotificationTemplateResponse = {
    success: boolean;
    template?: Serialized<NotificationTemplateData>;
    error?: string;
};