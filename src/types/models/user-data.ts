import { z } from "zod";
import { userIdSchema } from "../id-types";
import { ModuleType } from "../../enums";

const moduleSchema = z.object({
    type: z.nativeEnum(ModuleType),
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
        modules: z.array(moduleSchema),
        agenda: z.object({
            itemCategories: z.array(z.string()),
            itemTypes: z.array(z.string())
        }),
        people: z.object({
            propertyKeys: z.array(z.string())
        }),
    })
});

export type Module = z.infer<typeof moduleSchema>;
export type UserData = z.infer<typeof userDataSchema>;