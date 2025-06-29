import { z } from 'zod';
import { ItemData, Serialized } from "../../models";

export const completeItemRequestSchema = z.object({
    completed: z.boolean()
});

export type CompleteItemRequest = z.infer<typeof completeItemRequestSchema>;

export interface CompleteItemResponse {
    item: Serialized<ItemData>;
}