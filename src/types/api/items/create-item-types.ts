import { z } from 'zod';
import { ItemData } from "../../models";

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
    item: ItemData;
}