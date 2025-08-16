import { z } from 'zod';
import { personNoteIdSchema } from "../../../id-types";
import { Person } from "../../models";
import { Serialized } from "../../../../utils";

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
    person: Serialized<Person>;
}