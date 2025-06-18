import { z } from "zod";

export const userIdSchema = z.string().transform((val): UserId => val as UserId);
export type UserId = string & { readonly __brand: "UserId" };

export const authIdSchema = z.string().transform((val): AuthId => val as AuthId);
export type AuthId = string & { readonly __brand: "AuthId" };

export const itemIdSchema = z.string().transform((val): ItemId => val as ItemId);
export type ItemId = string & { readonly __brand: "ItemId" };

export const personIdSchema = z.string().transform((val): PersonId => val as PersonId);
export type PersonId = string & { readonly __brand: "PersonId" };

export const thoughtIdSchema = z.string().transform((val): ThoughtId => val as ThoughtId);
export type ThoughtId = string & { readonly __brand: "ThoughtId" };

export const taskListIdSchema = z.string().transform((val): TaskListId => val as TaskListId);
export type TaskListId = string & { readonly __brand: "TaskListId" };

export const taskIdSchema = z.string().transform((val): TaskId => val as TaskId);
export type TaskId = string & { readonly __brand: "TaskId" };

export const habitIdSchema = z.string().transform((val): TaskListId => val as TaskListId);
export type HabitId = string & { readonly __brand: "HabitId" };

export const habitEntryIdSchema = z.string().transform((val): TaskListId => val as TaskListId);
export type HabitEntryId = string & { readonly __brand: "HabitEntryId" };