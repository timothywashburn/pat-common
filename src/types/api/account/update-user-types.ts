import { z } from "zod";
import { UserData, userDataSchema } from "../../models";

export const updateUserRequestSchema = userDataSchema
    // .omit({ _id: true, createdAt: true, updatedAt: true })
    .deepPartial()
    .strict();

export type UpdateUserRequest = z.infer<typeof updateUserRequestSchema>;

export interface UpdateUserResponse {
    user: UserData
}