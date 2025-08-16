import { z } from 'zod';
import { thoughtIdSchema, userIdSchema } from '../id-types';
import { Serialized } from '../../utils';

export const thoughtSchema = z.object({
    _id: thoughtIdSchema,
    userId: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    content: z.string()
});

export const createThoughtRequestSchema = z.object({
    content: z.string().min(1)
});

export const updateThoughtRequestSchema = z.object({
    content: z.string().min(1)
});

export type ThoughtData = z.infer<typeof thoughtSchema>;

export type CreateThoughtRequest = z.infer<typeof createThoughtRequestSchema>;
export type UpdateThoughtRequest = z.infer<typeof updateThoughtRequestSchema>;

export interface CreateThoughtResponse {
    thought: Serialized<ThoughtData>;
}

export interface GetThoughtsResponse {
    thoughts: Serialized<ThoughtData>[];
}

export interface GetThoughtResponse {
    thought: Serialized<ThoughtData>;
}

export interface UpdateThoughtResponse {
    thought: Serialized<ThoughtData>;
}

export interface DeleteThoughtResponse {
    deleted: boolean;
}