import { z } from "zod";

// Request schema - no body needed for DELETE
export const deleteNotificationTemplateRequestSchema = z.object({});

export type DeleteNotificationTemplateRequest = z.infer<typeof deleteNotificationTemplateRequestSchema>;

export interface DeleteNotificationTemplateResponse {}