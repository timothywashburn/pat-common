import { PersonNoteId } from "../../id-types";
import { PersonNoteData } from "../../models";

export interface GetPeopleResponse {
    people: Array<{
        id: string;
        name: string;
        properties: Array<{
            key: string;
            value: string;
        }>;
        notes: Array<PersonNoteData>;
    }>;
}