import { z } from 'zod';

export const createItemRequestSchema = z.object({
    name: z.string().min(1),
    dueDate: z.string().nullish(),
    notes: z.string().optional(),
    urgent: z.boolean().optional().default(false),
    category: z.string().nullish(),
    type: z.string().nullish()
});

export type CreateItemRequest = z.infer<typeof createItemRequestSchema>;

export interface CreateItemResponse {
    item: {
        id: string;
        name: string;
        dueDate?: string;
        notes?: string;
        completed: boolean;
        urgent: boolean;
        category?: string;
        type?: string;
    };
}