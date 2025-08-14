import { ListItemId, ListId, UserId } from "../id-types";

export enum ListType {
    TASKS = 'tasks',
    NOTES = 'notes'
}

export interface ListItemData {
    _id: ListItemId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    notes?: string;
    completed: boolean;
    listId: ListId;
}

export interface ListData {
    _id: ListId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    type: ListType;
}