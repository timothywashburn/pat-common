import { z } from 'zod';
import { ItemData, Serialized } from "../../models";

export const updateItemRequestSchema = z.object({
    name: z.string().min(1).optional(),
    dueDate: z.string().nullish(),
    notes: z.string().nullish(),
    urgent: z.boolean().optional(),
    category: z.string().nullish(),
    type: z.string().nullish()
});

export type UpdateItemRequest = z.infer<typeof updateItemRequestSchema>;

export interface UpdateItemResponse {
    item: Serialized<ItemData>;
}