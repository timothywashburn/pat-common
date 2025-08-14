import { Serialized } from "../../../utils";
import { ListData } from "../../models";

export interface GetListsResponse {
    lists: Serialized<ListData>[];
}