import { z } from 'zod';
import { listIdSchema } from '../../id-types';
import { Serialized } from "../../../utils";
import { ListItemData } from "../../models";

export const updateListItemRequestSchema = z.object({
    name: z.string().min(1).optional(),
    notes: z.string().nullish(),
    completed: z.boolean().optional(),
    listId: listIdSchema.optional()
});

export type UpdateListItemRequest = z.infer<typeof updateListItemRequestSchema>;

export interface UpdateListItemResponse {
    listItem: Serialized<ListItemData>;
}