import { z } from "zod";
import { dateSchema, DateString } from "../../misc-types";
import { Habit } from "../../models";

export const createHabitEntryRequestSchema = z.object({
    date: dateSchema,
    status: z.enum(['completed', 'excused'])
});

export interface CreateHabitEntryRequest {
    date: DateString;
    status: 'completed' | 'excused';
}

export interface CreateHabitEntryResponse {
    habit: Habit;
}