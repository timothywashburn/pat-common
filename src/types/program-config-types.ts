import { z } from 'zod';

export const programConfigSchema = z.object({
    _requiredBuildVersions: z.object({
        iOS: z.number(),
        android: z.number()
    }),
    dev: z.object({
        authorizedEmails: z.array(z.string())
    }),
    discord: z.object({
        token: z.string(),
        clientId: z.string(),
        guildId: z.string(),
        logChannelId: z.string().optional()
    }),
    mailjet: z.object({
        apiKey: z.string(),
        secretKey: z.string()
    }),
    expo: z.object({
        token: z.string()
    }),
    redisUrl: z.string(),
    updatedAt: z.date(),
    createdAt: z.date()
});

export type ProgramConfigData = z.infer<typeof programConfigSchema>;