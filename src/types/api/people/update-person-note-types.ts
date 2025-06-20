import { z } from 'zod';
import { personIdSchema, PersonNoteId, personNoteIdSchema } from "../../id-types";
import { Person, PersonNoteData } from "../../models";

export const updatePersonNoteRequestSchema = z.object({
    content: z.string().min(1)
});

export type UpdatePersonNoteRequest = z.infer<typeof updatePersonNoteRequestSchema>;

export interface UpdatePersonNoteResponse {
    personNote: PersonNoteData;
}