import { Serialized } from "../../../../utils";
import { ListItemData } from "../../models";

export interface GetListItemsResponse {
    listItems: Serialized<ListItemData>[];
}