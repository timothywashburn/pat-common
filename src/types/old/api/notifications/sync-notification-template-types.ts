import { z } from "zod";
import { Serialized } from "../../../../utils";
import { NotificationTemplateData } from "../../models/notification-template-data";

// Request schema
export const syncNotificationTemplateRequestSchema = z.object({
    sync: z.boolean() // true to sync with parent, false to unsync
});

export type SyncNotificationTemplateRequest = z.infer<typeof syncNotificationTemplateRequestSchema>;

export interface SyncNotificationTemplateResponse {
    template: Serialized<NotificationTemplateData>;
}