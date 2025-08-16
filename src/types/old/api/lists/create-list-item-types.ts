import { z } from 'zod';
import { listIdSchema } from '../../../id-types';
import { Serialized } from "../../../../utils";
import { ListItemData } from "../../models";

export const createListItemRequestSchema = z.object({
    name: z.string().min(1),
    notes: z.string().optional(),
    listId: listIdSchema
});

export type CreateListItemRequest = z.infer<typeof createListItemRequestSchema>;

export interface CreateListItemResponse {
    listItem: Serialized<ListItemData>;
}