import { z } from 'zod';
import { personIdSchema } from "../../../id-types";
import { PersonNoteData } from "../../models";
import { Serialized } from "../../../../utils";

export const createPersonNoteRequestSchema = z.object({
    personId: personIdSchema,
    content: z.string().min(1)
});

export type CreatePersonNoteRequest = z.infer<typeof createPersonNoteRequestSchema>;

export interface CreatePersonNoteResponse {
    personNote: Serialized<PersonNoteData>;
}