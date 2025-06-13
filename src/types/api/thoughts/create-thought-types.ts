import { z } from 'zod';

export const createThoughtRequestSchema = z.object({
    content: z.string().min(1)
});

export type CreateThoughtRequest = z.infer<typeof createThoughtRequestSchema>;

export interface CreateThoughtResponse {
    thought: {
        id: string;
        content: string;
    };
}