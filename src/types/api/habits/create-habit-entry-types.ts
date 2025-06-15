import { z } from "zod";
import { Habit, HabitEntryStatus } from "../../models";
import { DateString, dateStringSchema } from "../../misc-types";

export const createHabitEntryRequestSchema = z.object({
    date: dateStringSchema,
    status: z.nativeEnum(HabitEntryStatus)
});

export interface CreateHabitEntryRequest {
    date: DateString;
    status: HabitEntryStatus;
}

export interface CreateHabitEntryResponse {
    habit: Habit;
}