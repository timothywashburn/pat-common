import { z } from 'zod';
import { Serialized } from "../../../utils";
import { ListData, ListType } from "../../models";

export const createListRequestSchema = z.object({
    name: z.string().min(1),
    type: z.nativeEnum(ListType)
});

export type CreateListRequest = z.infer<typeof createListRequestSchema>;

export interface CreateListResponse {
    list: Serialized<ListData>;
}