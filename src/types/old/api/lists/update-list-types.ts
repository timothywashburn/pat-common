import { z } from 'zod';
import { Serialized } from "../../../../utils";
import { ListData, ListType } from "../../models";

export const updateListRequestSchema = z.object({
    name: z.string().min(1).optional(),
    type: z.nativeEnum(ListType).optional()
});

export type UpdateListRequest = z.infer<typeof updateListRequestSchema>;

export interface UpdateListResponse {
    list: Serialized<ListData>;
}