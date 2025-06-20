import { PersonNoteId } from "../../id-types";
import { Person, PersonData, PersonNoteData } from "../../models";

export interface GetPeopleResponse {
    people: Array<Person>;
}