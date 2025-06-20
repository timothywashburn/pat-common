import { z } from 'zod';
import { PersonNoteId } from "../../id-types";
import { PersonNoteData } from "../../models";

export const createPersonNoteRequestSchema = z.object({
    content: z.string().min(1)
});

export type CreatePersonNoteRequest = z.infer<typeof createPersonNoteRequestSchema>;

export interface CreatePersonNoteResponse {
    personNote: PersonNoteData;
}