import { z } from "zod";
import { Habit, HabitEntryStatus } from "../../models";
import { dateOnlyStringSchema } from "../../misc-types";
import { Serialized } from "../../../utils";

export const createHabitEntryRequestSchema = z.object({
    date: dateOnlyStringSchema,
    status: z.nativeEnum(HabitEntryStatus)
});

export type CreateHabitEntryRequest = z.infer<typeof createHabitEntryRequestSchema>;

export interface CreateHabitEntryResponse {
    habit: Serialized<Habit>;
}