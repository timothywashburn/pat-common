import { PANEL_TYPES } from "../panels";
import { z } from "zod";
import { userIdSchema } from "../id-types";

const panelSchema = z.object({
    type: z.enum(PANEL_TYPES),
    visible: z.boolean()
});

export const userConfigSchema = z.object({
    _id: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string().min(1),
    timezone: z.string().refine((tz: string) => {
        try {
            Intl.DateTimeFormat(undefined, { timeZone: tz });
            return true;
        } catch (e) {
            return false;
        }
    }, { message: "Invalid timezone" }),
    discordID: z.string().optional(),
    itemListTracking: z.object({
        channelId: z.string(),
        messageId: z.string()
    }).optional(),
    iosApp: z.object({
        panels: z.array(panelSchema),
        itemCategories: z.array(z.string()),
        itemTypes: z.array(z.string()),
        propertyKeys: z.array(z.string())
    })
});

export type Panel = z.infer<typeof panelSchema>;
export type UserConfig = z.infer<typeof userConfigSchema>;