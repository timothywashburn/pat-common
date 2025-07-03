import { ItemData } from "../../models";
import { Serialized } from "../../../utils";

export interface GetItemsResponse {
    items: Serialized<ItemData>[];
}