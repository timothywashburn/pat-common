import { z } from 'zod';
import { Serialized } from "../../../../utils";
import { ThoughtData } from "../../models";

export const updateThoughtRequestSchema = z.object({
    content: z.string().min(1)
});

export type UpdateThoughtRequest = z.infer<typeof updateThoughtRequestSchema>;

export interface UpdateThoughtResponse {
    thought: Serialized<ThoughtData>;
}