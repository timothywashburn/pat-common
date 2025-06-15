import { z } from "zod";

export type DateString = string & { readonly __brand: "DateString" };
export const dateSchema = z.string()
    .refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid date string",
    })
    .transform(val => new Date(val));