import { z } from "zod";
import { UserId } from "../../id-types";
import { UserConfig, userConfigSchema } from "../../models";

export const updateUserConfigRequestSchema = userConfigSchema
    .omit({ _id: true, createdAt: true, updatedAt: true })
    .partial()
    .strict();

export type UpdateUserConfigRequest = z.infer<typeof updateUserConfigRequestSchema>;

const test: UpdateUserConfigRequest | null = null;
test!.iosApp

export interface UpdateUserConfigResponse {
    user: UserConfig
}