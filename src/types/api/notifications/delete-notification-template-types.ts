import { z } from "zod";

// Request schema - no body needed for DELETE
export const deleteNotificationTemplateRequestSchema = z.object({});

export type DeleteNotificationTemplateRequest = z.infer<typeof deleteNotificationTemplateRequestSchema>;

// Response schema
export const deleteNotificationTemplateResponseSchema = z.object({
    success: z.boolean(),
    error: z.string().optional()
});

export type DeleteNotificationTemplateResponse = z.infer<typeof deleteNotificationTemplateResponseSchema>;