import { z } from 'zod';
import { personIdSchema, personNoteIdSchema, userIdSchema } from '../id-types';
import { Serialized } from '../../utils';

export const personPropertySchema = z.object({
    key: z.string(),
    value: z.string()
});

export const personNoteSchema = z.object({
    _id: personNoteIdSchema,
    personId: personIdSchema,
    userId: userIdSchema,
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const personDataSchema = z.object({
    _id: personIdSchema,
    userId: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string(),
    properties: z.array(personPropertySchema),
    noteIds: z.array(personNoteIdSchema)
});

export const personSchema = z.object({
    _id: personIdSchema,
    userId: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string(),
    properties: z.array(personPropertySchema),
    notes: z.array(personNoteSchema)
});

export const createPersonRequestSchema = z.object({
    name: z.string().min(1),
    properties: z.array(z.object({
        key: z.string().min(1),
        value: z.string().min(1)
    })).optional(),
    notes: z.array(personNoteIdSchema).optional()
});

export const updatePersonRequestSchema = z.object({
    name: z.string().min(1).optional(),
    properties: z.array(z.object({
        key: z.string().min(1),
        value: z.string().min(1)
    })).optional(),
    noteIds: z.array(personNoteIdSchema).optional()
});

export const createPersonNoteRequestSchema = z.object({
    personId: personIdSchema,
    content: z.string().min(1)
});

export const updatePersonNoteRequestSchema = z.object({
    content: z.string().min(1)
});

export type PersonPropertyData = z.infer<typeof personPropertySchema>;
export type PersonNoteData = z.infer<typeof personNoteSchema>;
export type PersonData = z.infer<typeof personDataSchema>;
export type Person = z.infer<typeof personSchema>;

export type CreatePersonRequest = z.infer<typeof createPersonRequestSchema>;
export type UpdatePersonRequest = z.infer<typeof updatePersonRequestSchema>;
export type CreatePersonNoteRequest = z.infer<typeof createPersonNoteRequestSchema>;
export type UpdatePersonNoteRequest = z.infer<typeof updatePersonNoteRequestSchema>;

export interface CreatePersonResponse {
    person: Serialized<Person>;
}

export interface GetPeopleResponse {
    people: Serialized<Person>[];
}

export interface GetPersonResponse {
    person: Serialized<Person>;
}

export interface UpdatePersonResponse {
    person: Serialized<Person>;
}

export interface DeletePersonResponse {}

export interface CreatePersonNoteResponse {
    personNote: Serialized<PersonNoteData>;
}

export interface GetPersonNotesResponse {
    personNotes: Serialized<PersonNoteData>[];
}

export interface UpdatePersonNoteResponse {
    personNote: Serialized<PersonNoteData>;
}

export interface DeletePersonNoteResponse {}