import { z } from 'zod';
import { personIdSchema, PersonNoteId, personNoteIdSchema } from "../../id-types";
import { Person, PersonNoteData } from "../../models";

export const updatePersonRequestSchema = z.object({
    name: z.string().min(1).optional(),
    properties: z.array(z.object({
        key: z.string().min(1),
        value: z.string().min(1)
    })).optional(),
    noteIds: z.array(personNoteIdSchema).optional()
});

export type UpdatePersonRequest = z.infer<typeof updatePersonRequestSchema>;

export interface UpdatePersonResponse {
    person: Person;
}