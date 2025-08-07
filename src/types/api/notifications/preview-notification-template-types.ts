import { z } from "zod";

// Request schema
export const previewNotificationTemplateRequestSchema = z.object({
    templateTitle: z.string(),
    templateBody: z.string(),
    entityType: z.string(),
    entityId: z.string(),
    variables: z.record(z.any()).optional()
});

export type PreviewNotificationTemplateRequest = z.infer<typeof previewNotificationTemplateRequestSchema>;

// Response schema
export const previewNotificationTemplateResponseSchema = z.object({
    success: z.boolean(),
    preview: z.object({
        title: z.string(),
        body: z.string(),
        variables: z.record(z.any())
    }).optional(),
    missingVariables: z.array(z.string()).optional(),
    error: z.string().optional()
});

export type PreviewNotificationTemplateResponse = z.infer<typeof previewNotificationTemplateResponseSchema>;