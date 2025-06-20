import { z } from 'zod';
import { personIdSchema, PersonNoteId, personNoteIdSchema } from "../../id-types";

export const updatePersonRequestSchema = z.object({
    name: z.string().min(1).optional(),
    properties: z.array(z.object({
        key: z.string().min(1),
        value: z.string().min(1)
    })).optional(),
    notes: z.array(personNoteIdSchema).optional()
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
        notes: Array<PersonNoteId>;
    };
}