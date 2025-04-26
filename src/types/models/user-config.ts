import { PANEL_TYPES, PanelType } from "../panels";
import { z } from "zod";
import { AuthId, UserId, userIdSchema } from "../id-types";

const panelSchema = z.object({
    type: z.enum(PANEL_TYPES),
    visible: z.boolean()
});

export type Panel = z.infer<typeof panelSchema>;

// export interface Panel {
//     type: PanelType;
//     visible: boolean;
// }

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

export type UserConfig = z.infer<typeof userConfigSchema>;

// export interface UserConfig {
//     _id: UserId;
//     createdAt: Date;
//     updatedAt: Date;
//
//     name: string;
//     timezone: string;
//     discordID?: string;
//     itemListTracking?: {
//         channelId: string;
//         messageId: string;
//     };
//     iosApp: {
//         panels: Panel[];
//         itemCategories: string[];
//         itemTypes: string[];
//         propertyKeys: string[];
//     };
// }