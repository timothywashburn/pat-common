import { z } from "zod";
import { userIdSchema } from "../id-types";
import { PanelType } from "../../enums";

const panelSchema = z.object({
    type: z.nativeEnum(PanelType),
    visible: z.boolean()
});

export const userDataSchema = z.object({
    _id: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),

    sandbox: z.object({
        discordId: z.string().optional()
    }).optional(),

    name: z.string().min(1),
    timezone: z.string().refine((tz: string) => {
        try {
            Intl.DateTimeFormat(undefined, { timeZone: tz });
            return true;
        } catch (e) {
            return false;
        }
    }, { message: "Invalid timezone" }),

    config: z.object({
        panels: z.array(panelSchema),
        agenda: z.object({
            itemCategories: z.array(z.string()),
            itemTypes: z.array(z.string())
        }),
        people: z.object({
            propertyKeys: z.array(z.string())
        }),
    })
});

export type Panel = z.infer<typeof panelSchema>;
export type UserData = z.infer<typeof userDataSchema>;