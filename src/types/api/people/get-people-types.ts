import { PersonNoteId } from "../../id-types";
import { PersonData, PersonNoteData } from "../../models";

export interface GetPeopleResponse {
    people: Array<PersonData>;
}