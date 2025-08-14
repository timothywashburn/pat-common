import { z } from "zod";

export const userIdSchema = z.string().transform((val): UserId => val as UserId);
export type UserId = string & { readonly __brand: "UserId" };

export const authIdSchema = z.string().transform((val): AuthId => val as AuthId);
export type AuthId = string & { readonly __brand: "AuthId" };

export const itemIdSchema = z.string().transform((val): ItemId => val as ItemId);
export type ItemId = string & { readonly __brand: "ItemId" };

export const personIdSchema = z.string().transform((val): PersonId => val as PersonId);
export type PersonId = string & { readonly __brand: "PersonId" };

export const personNoteIdSchema = z.string().transform((val): PersonNoteId => val as PersonNoteId);
export type PersonNoteId = string & { readonly __brand: "PersonNoteId" };

export const thoughtIdSchema = z.string().transform((val): ThoughtId => val as ThoughtId);
export type ThoughtId = string & { readonly __brand: "ThoughtId" };

export const listIdSchema = z.string().transform((val): ListId => val as ListId);
export type ListId = string & { readonly __brand: "ListId" };

export const listItemIdSchema = z.string().transform((val): ListItemId => val as ListItemId);
export type ListItemId = string & { readonly __brand: "ListItemId" };

export const habitIdSchema = z.string().transform((val): ListId => val as ListId);
export type HabitId = string & { readonly __brand: "HabitId" };

export const habitEntryIdSchema = z.string().transform((val): ListId => val as ListId);
export type HabitEntryId = string & { readonly __brand: "HabitEntryId" };

export const notificationTemplateIdSchema = z.string().transform((val): NotificationTemplateId => val as NotificationTemplateId);
export type NotificationTemplateId = string & { readonly __brand: "NotificationTemplateId" };

export const notificationInstanceIdSchema = z.string().transform((val): NotificationInstanceId => val as NotificationInstanceId);
export type NotificationInstanceId = string & { readonly __brand: "NotificationInstanceId" };