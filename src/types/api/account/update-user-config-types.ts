import { z } from "zod";
import { UserConfig, userConfigSchema } from "../../models";

export const updateUserConfigRequestSchema = userConfigSchema
    .omit({ _id: true, createdAt: true, updatedAt: true })
    .deepPartial()
    .strict();

export type UpdateUserConfigRequest = z.infer<typeof updateUserConfigRequestSchema>;

export interface UpdateUserConfigResponse {
    user: UserConfig
}