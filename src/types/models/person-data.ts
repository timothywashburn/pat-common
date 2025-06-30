import { PersonId, PersonNoteId, UserId } from "../id-types";

export interface PersonProperty {
    key: string;
    value: string;
}

export interface PersonNoteData {
    id: PersonNoteId;
    personId: PersonId;
    userId: UserId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PersonData {
    id: PersonId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    properties: PersonProperty[];
    noteIds: PersonNoteId[];
}

export interface Person {
    id: PersonId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    properties: PersonProperty[];
    notes: PersonNoteData[];
}