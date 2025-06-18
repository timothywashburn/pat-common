import { z } from "zod";

export type DateOnlyString = string & { readonly __brand: "DateOnlyString" };

export const dateOnlyStringSchema = z.string()
    .refine(val => /^\d{4}-\d{2}-\d{2}$/.test(val), {
        message: "Invalid date-only string format, expected YYYY-MM-DD",
    })
    .transform(val => val as DateOnlyString);

export type DateString = string & { readonly __brand: "DateString" };

export const dateStringSchema = z.string()
    .refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid date string",
    })
    .transform(val => new Date(val));

export type ToDateString<T> = {
    [K in keyof T]: T[K] extends Date
        ? DateString
        : T[K] extends Array<infer U>
            ? Array<ToDateString<U>>
            : T[K] extends object
                ? ToDateString<T[K]>
                : T[K];
};