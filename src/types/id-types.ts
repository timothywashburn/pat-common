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