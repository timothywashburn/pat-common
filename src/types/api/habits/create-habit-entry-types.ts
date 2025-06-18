import { z } from "zod";
import { Habit, HabitEntryStatus } from "../../models";
import { DateOnlyString, dateOnlyStringSchema } from "../../misc-types";

export const createHabitEntryRequestSchema = z.object({
    date: dateOnlyStringSchema,
    status: z.nativeEnum(HabitEntryStatus)
});

export interface CreateHabitEntryRequest {
    date: DateOnlyString;
    status: HabitEntryStatus;
}

export interface CreateHabitEntryResponse {
    habit: Habit;
}