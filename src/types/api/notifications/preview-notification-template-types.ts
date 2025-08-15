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

export interface PreviewNotificationTemplateResponse {
    preview: {
        title: string;
        body: string;
        variables: Record<string, any>;
    };
    missingVariables: string[];
}