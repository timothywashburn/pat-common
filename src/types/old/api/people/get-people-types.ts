import { Person } from "../../models";
import { Serialized } from "../../../../utils";

export interface GetPeopleResponse {
    people: Serialized<Person>[];
}