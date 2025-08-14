import { z } from 'zod';
import { Serialized } from "../../../utils";
import { ListItemData } from "../../models";

export const completeListItemRequestSchema = z.object({
    completed: z.boolean()
});

export type CompleteListItemRequest = z.infer<typeof completeListItemRequestSchema>;

export interface CompleteListItemResponse {
    listItem: Serialized<ListItemData>;
}