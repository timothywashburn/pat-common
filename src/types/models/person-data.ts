import { PersonId, PersonNoteId, UserId } from "../id-types";

export interface PersonProperty {
    key: string;
    value: string;
}

export interface PersonNoteData {
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PersonData {
    _id: PersonId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    properties: PersonProperty[];
    noteIds: PersonNoteId[];
}

export interface Person {
    _id: PersonId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    properties: PersonProperty[];
    notes: PersonNoteData[];
}