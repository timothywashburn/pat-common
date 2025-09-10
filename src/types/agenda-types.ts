import { z } from 'zod';
import { itemIdSchema, userIdSchema } from './id-types';
import { Serialized } from '../utils';

export const agendaItemSchema = z.object({
    _id: itemIdSchema,
    userId: userIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string().min(1),
    dueDate: z.date().optional(),
    notes: z.string().optional(),
    completed: z.boolean(),
    urgent: z.boolean(),
    category: z.string().optional(),
    type: z.string().optional()
});

export const createAgendaItemRequestSchema = z.object({
    name: z.string().min(1),
    dueDate: z.string().optional(),
    notes: z.string().optional(),
    urgent: z.boolean().optional().default(false),
    category: z.string().optional(),
    type: z.string().optional()
});

export const updateAgendaItemRequestSchema = z.object({
    name: z.string().min(1).optional(),
    dueDate: z.string().nullish(),
    notes: z.string().nullish(),
    urgent: z.boolean().optional(),
    category: z.string().nullish(),
    type: z.string().nullish()
});

export const completeAgendaItemRequestSchema = z.object({
    completed: z.boolean()
});

export type AgendaItemData = z.infer<typeof agendaItemSchema>;

export type CreateAgendaItemRequest = z.infer<typeof createAgendaItemRequestSchema>;
export type UpdateAgendaItemRequest = z.infer<typeof updateAgendaItemRequestSchema>;
export type CompleteAgendaItemRequest = z.infer<typeof completeAgendaItemRequestSchema>;

export interface CreateAgendaItemResponse {
    agendaItem: Serialized<AgendaItemData>;
}

export interface GetAgendaItemsResponse {
    agendaItems: Serialized<AgendaItemData>[];
}

export interface UpdateAgendaItemResponse {
    agendaItem: Serialized<AgendaItemData>;
}

export interface CompleteAgendaItemResponse {
    agendaItem: Serialized<AgendaItemData>;
}

export interface DeleteAgendaItemResponse {}