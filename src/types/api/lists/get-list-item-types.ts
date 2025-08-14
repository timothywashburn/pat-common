import { Serialized } from "../../../utils";
import { ListItemData } from "../../models";

export interface GetListItemResponse {
    listItems: Serialized<ListItemData>[];
}