import { z } from "zod";
import { PANEL_TYPES } from "../../panels";

export const updateUserConfigRequestSchema = z.object({
    name: z.string().min(1).nullish(),
    timezone: z.string()
        .refine((tz: string) => {
            try {
                Intl.DateTimeFormat(undefined, { timeZone: tz });
                return true;
            } catch (e) {
                return false;
            }
        }, {
            message: "Invalid timezone"
        })
        .nullish(),
    discordID: z.string().nullish(),
    itemListTracking: z.object({
        channelId: z.string(),
        messageId: z.string()
    }).nullish(),
    iosApp: z.object({
        panels: z.array(z.object({
            type: z.enum(PANEL_TYPES),
            visible: z.boolean()
        })).optional(),
        itemCategories: z.array(z.string()).optional(),
        itemTypes: z.array(z.string()).optional(),
        propertyKeys: z.array(z.string()).optional()
    }).nullish()
}).strict();

export type UpdateUserConfigRequest = z.infer<typeof updateUserConfigRequestSchema>;

export interface UpdateUserConfigResponse {
    user: UpdateUserConfigRequest & {
        id: string;
    };
}