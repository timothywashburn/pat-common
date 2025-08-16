import { ItemId, UserId } from "../../id-types";

export interface ItemData {
    _id: ItemId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    dueDate?: Date;
    notes?: string;
    completed: boolean;
    urgent: boolean;
    category?: string;
    type?: string;
}