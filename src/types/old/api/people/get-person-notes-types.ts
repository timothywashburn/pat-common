import { PersonNoteData } from "../../models";
import { Serialized } from "../../../../utils";

export interface GetPersonNotesResponse {
    personNotes: Serialized<PersonNoteData>[];
}