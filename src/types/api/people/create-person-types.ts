import { z } from 'zod';
import { PersonNoteId, personNoteIdSchema } from "../../id-types";

export const createPersonRequestSchema = z.object({
    name: z.string().min(1),
    properties: z.array(z.object({
        key: z.string().min(1),
        value: z.string().min(1)
    })).optional(),
    notes: z.array(personNoteIdSchema).optional()
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
        notes: Array<PersonNoteId>;
    };
}