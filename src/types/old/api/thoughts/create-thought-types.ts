import { z } from 'zod';
import { Serialized } from "../../../../utils";
import { ThoughtData } from "../../models";

export const createThoughtRequestSchema = z.object({
    content: z.string().min(1)
});

export type CreateThoughtRequest = z.infer<typeof createThoughtRequestSchema>;

export interface CreateThoughtResponse {
    thought: Serialized<ThoughtData>;
}