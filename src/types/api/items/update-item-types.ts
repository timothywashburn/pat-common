import { z } from 'zod';

export const updateItemRequestSchema = z.object({
    name: z.string().min(1).optional(),
    dueDate: z.string().nullish(),
    notes: z.string().optional(),
    urgent: z.boolean().optional(),
    category: z.string().nullish(),
    type: z.string().nullish()
});

export type UpdateItemRequest = z.infer<typeof updateItemRequestSchema>;

export interface UpdateItemResponse {
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