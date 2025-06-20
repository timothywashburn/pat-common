import { ItemId, UserId } from "../id-types";

export interface ItemData {
    _id: ItemId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    dueDate?: Date | null;
    notes?: string | null;
    completed: boolean;
    urgent: boolean;
    category?: string | null;
    type?: string | null;
}