import { z } from 'zod';

export const versionQuerySchema = z.object({
    iOSBuildVersion: z.number().optional(),
    androidBuildVersion: z.number().optional()
});

export const versionResponseSchema = z.object({
    minIOSBuildVersion: z.number(),
    minAndroidBuildVersion: z.number(),
    updateRequired: z.boolean()
});

export type VersionQuery = z.infer<typeof versionQuerySchema>;
export type VersionResponse = z.infer<typeof versionResponseSchema>;