import { z } from 'zod';
import { personNoteIdSchema } from "../../id-types";
import { Person } from "../../models";
import { Serialized } from "../../../utils";

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
    person: Serialized<Person>;
}