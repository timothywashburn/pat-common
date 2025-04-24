import { PersonId, UserId } from "../id-types";

export interface PersonProperty {
    key: string;
    value: string;
}

export interface PersonNote {
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
    notes: PersonNote[];
}