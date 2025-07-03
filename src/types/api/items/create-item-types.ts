import { z } from 'zod';
import { ItemData } from "../../models";
import { Serialized } from "../../../utils";

export const createItemRequestSchema = z.object({
    name: z.string().min(1),
    dueDate: z.string().optional(),
    notes: z.string().optional(),
    urgent: z.boolean().optional().default(false),
    category: z.string().optional(),
    type: z.string().optional()
});

export type CreateItemRequest = z.infer<typeof createItemRequestSchema>;

export interface CreateItemResponse {
    item: Serialized<ItemData>;
}