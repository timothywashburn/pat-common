import { z } from 'zod';

export const updateThoughtRequestSchema = z.object({
    content: z.string().min(1)
});

export type UpdateThoughtRequest = z.infer<typeof updateThoughtRequestSchema>;

export interface UpdateThoughtResponse {
    thought: {
        id: string;
        content: string;
    };
}