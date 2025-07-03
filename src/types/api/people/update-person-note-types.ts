import { z } from 'zod';
import { PersonNoteData } from "../../models";
import { Serialized } from "../../../utils";

export const updatePersonNoteRequestSchema = z.object({
    content: z.string().min(1)
});

export type UpdatePersonNoteRequest = z.infer<typeof updatePersonNoteRequestSchema>;

export interface UpdatePersonNoteResponse {
    personNote: Serialized<PersonNoteData>;
}