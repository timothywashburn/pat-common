import { z } from 'zod';
import { userIdSchema } from './id-types';
import { Serialized } from '../utils';
import { ModuleType } from '../enums';

export const moduleSchema = z.object({
    type: z.nativeEnum(ModuleType),
    visible: z.boolean()
});

export const deviceSchema = z.object({
    pushToken: z.string()
});

export const userSchema = z.object({
    _id: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    sandbox: z.object({
        discordId: z.string().optional(),
        devices: z.array(deviceSchema)
    }),
    name: z.string().min(1),
    timezone: z.string().refine((tz: string) => {
        try {
            Intl.DateTimeFormat(undefined, { timeZone: tz });
            return true;
        } catch (e) {
            return false;
        }
    }),
    config: z.object({
        modules: z.array(moduleSchema),
        agenda: z.object({
            itemCategories: z.array(z.string()),
            itemTypes: z.array(z.string())
        }),
        people: z.object({
            propertyKeys: z.array(z.string())
        })
    })
});

export const updateUserRequestSchema = userSchema
    .omit({ _id: true, createdAt: true, updatedAt: true })
    .deepPartial()
    .strict();

export type UserModuleData = z.infer<typeof moduleSchema>;
export type UserDeviceData = z.infer<typeof deviceSchema>;
export type UserData = z.infer<typeof userSchema>;

export type UpdateUserRequest = z.infer<typeof updateUserRequestSchema>;

export interface GetUserResponse {
    user: Serialized<UserData>;
}

export interface UpdateUserResponse {
    user: Serialized<UserData>;
}