import { z } from 'zod';

export const updatePersonRequestSchema = z.object({
    name: z.string().min(1).optional(),
    properties: z.array(z.object({
        key: z.string().min(1),
        value: z.string().min(1)
    })).optional(),
    notes: z.array(z.object({
        content: z.string().min(1)
    })).optional()
});

export type UpdatePersonRequest = z.infer<typeof updatePersonRequestSchema>;

export interface UpdatePersonResponse {
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