import { z } from 'zod';
import { listIdSchema, listItemIdSchema, userIdSchema } from './id-types';
import { Serialized } from '../utils';

export enum ListType {
    TASKS = 'tasks',
    NOTES = 'notes'
}

export const listItemSchema = z.object({
    _id: listItemIdSchema,
    userId: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string(),
    notes: z.string().optional(),
    completed: z.boolean(),
    listId: listIdSchema
});

export const listSchema = z.object({
    _id: listIdSchema,
    userId: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string(),
    type: z.nativeEnum(ListType)
});

export const createListRequestSchema = z.object({
    name: z.string().min(1),
    type: z.nativeEnum(ListType)
});

export const updateListRequestSchema = z.object({
    name: z.string().min(1).optional(),
    type: z.nativeEnum(ListType).optional()
});

export const createListItemRequestSchema = z.object({
    name: z.string().min(1),
    notes: z.string().optional(),
    listId: listIdSchema
});

export const updateListItemRequestSchema = z.object({
    name: z.string().min(1).optional(),
    notes: z.string().nullish(),
    completed: z.boolean().optional(),
    listId: listIdSchema.optional()
});

export const completeListItemRequestSchema = z.object({
    completed: z.boolean()
});

export type ListItemData = z.infer<typeof listItemSchema>;
export type ListData = z.infer<typeof listSchema>;

export type CreateListRequest = z.infer<typeof createListRequestSchema>;
export type UpdateListRequest = z.infer<typeof updateListRequestSchema>;
export type CreateListItemRequest = z.infer<typeof createListItemRequestSchema>;
export type UpdateListItemRequest = z.infer<typeof updateListItemRequestSchema>;
export type CompleteListItemRequest = z.infer<typeof completeListItemRequestSchema>;

export interface CreateListResponse {
    list: Serialized<ListData>;
}

export interface GetListsResponse {
    lists: Serialized<ListData>[];
}

export interface GetListResponse {
    list: Serialized<ListData>;
}

export interface UpdateListResponse {
    list: Serialized<ListData>;
}

export interface DeleteListResponse {}

export interface CreateListItemResponse {
    listItem: Serialized<ListItemData>;
}

export interface GetListItemsResponse {
    listItems: Serialized<ListItemData>[];
}

export interface GetListItemResponse {
    listItem: Serialized<ListItemData>;
}

export interface UpdateListItemResponse {
    listItem: Serialized<ListItemData>;
}

export interface CompleteListItemResponse {
    listItem: Serialized<ListItemData>;
}

export interface DeleteListItemResponse {}