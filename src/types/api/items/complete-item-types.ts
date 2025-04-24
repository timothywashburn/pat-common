import { z } from 'zod';

export const completeItemRequestSchema = z.object({
    completed: z.boolean()
});

export type CompleteItemRequest = z.infer<typeof completeItemRequestSchema>;

export interface CompleteItemResponse {
    item: {
        id: string;
        name: string;
        completed: boolean;
        dueDate?: string;
        notes?: string;
    };
}