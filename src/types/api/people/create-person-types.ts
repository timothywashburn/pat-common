import { z } from 'zod';

export const createPersonRequestSchema = z.object({
    name: z.string().min(1),
    properties: z.array(z.object({
        key: z.string().min(1),
        value: z.string().min(1)
    })).optional(),
    notes: z.array(z.object({
        content: z.string().min(1)
    })).optional()
});

export type CreatePersonRequest = z.infer<typeof createPersonRequestSchema>;

export interface CreatePersonResponse {
    person: {
        id: string;
        name: string;
        properties: Array<{
            key: string;
            value: string;
        }>;
        notes: Array<{
            content: string;
            createdAt: string;
            updatedAt: string;
        }>;
    };
}