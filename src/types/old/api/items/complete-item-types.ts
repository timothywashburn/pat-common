import { z } from 'zod';
import { ItemData } from "../../models";
import { Serialized } from "../../../../utils";

export const completeItemRequestSchema = z.object({
    completed: z.boolean()
});

export type CompleteItemRequest = z.infer<typeof completeItemRequestSchema>;

export interface CompleteItemResponse {
    item: Serialized<ItemData>;
}