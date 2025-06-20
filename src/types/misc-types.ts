import { z } from "zod";

export type DateOnlyString = string & { readonly __brand: "DateOnlyString" };

export const dateOnlyStringSchema = z.string()
    .refine(val => /^\d{4}-\d{2}-\d{2}$/.test(val), {
        message: "Invalid date-only string format, expected YYYY-MM-DD",
    })
    .transform(val => val as DateOnlyString);

export type DateString = string & { readonly __brand: "DateString" };