import { PersonNoteId } from "../../id-types";

export interface GetPeopleResponse {
    people: Array<{
        id: string;
        name: string;
        properties: Array<{
            key: string;
            value: string;
        }>;
        notes: Array<PersonNoteId>;
    }>;
}