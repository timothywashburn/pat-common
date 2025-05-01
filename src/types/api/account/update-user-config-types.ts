import { z } from "zod";
import { UserData, userDataSchema } from "../../models";

export const updateUserConfigRequestSchema = userDataSchema
    .omit({ _id: true, createdAt: true, updatedAt: true })
    .deepPartial()
    .strict();

export type UpdateUserConfigRequest = z.infer<typeof updateUserConfigRequestSchema>;

export interface UpdateUserConfigResponse {
    user: UserData
}