import { z } from "zod";
import { Habit, HabitEntryStatus } from "../../models";
import { DateOnlyString, dateOnlyStringSchema } from "../../misc-types";
import { createHabitRequestSchema } from "./create-habit-types";

export const createHabitEntryRequestSchema = z.object({
    date: dateOnlyStringSchema,
    status: z.nativeEnum(HabitEntryStatus)
});

export type CreateHabitEntryRequest = z.infer<typeof createHabitEntryRequestSchema>;

export interface CreateHabitEntryResponse {
    habit: Habit;
}