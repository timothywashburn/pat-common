import { z } from "zod";
import { Habit } from "../../models";
import { DateString, dateStringSchema } from "../../misc-types";

export const createHabitEntryRequestSchema = z.object({
    dateString: dateStringSchema,
    status: z.enum(['completed', 'excused'])
});

export interface CreateHabitEntryRequest {
    dateString: DateString;
    status: 'completed' | 'excused';
}

export interface CreateHabitEntryResponse {
    habit: Habit;
}