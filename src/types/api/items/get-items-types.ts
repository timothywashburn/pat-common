import { ItemData, Serialized } from "../../models";

export interface GetItemsResponse {
    items: Serialized<ItemData>[];
}