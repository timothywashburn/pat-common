import { z } from "zod";
import { Serialized } from "../../../../utils";
import { NotificationTemplateData } from "../../models/notification-template-data";

// Request schema - no body needed for GET
export const getNotificationTemplatesRequestSchema = z.object({});

export type GetNotificationTemplatesRequest = z.infer<typeof getNotificationTemplatesRequestSchema>;

export interface GetNotificationTemplatesResponse {
    templates: Serialized<NotificationTemplateData>[];
}