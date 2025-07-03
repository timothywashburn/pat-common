import { z } from "zod";
import { Habit, HabitFrequency } from "../../models";
import { Serialized } from "../../../utils";

export const updateHabitRequestSchema = z.object({
    name: z.string().min(1, 'Name is required').trim().optional(),
    description: z.string().trim().nullish(),
    notes: z.string().trim().nullish(),
    frequency: z.nativeEnum(HabitFrequency).optional(),
    rolloverTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'rolloverTime must be in HH:MM format').optional()
});

export type UpdateHabitRequest = z.infer<typeof updateHabitRequestSchema>;

export interface UpdateHabitResponse {
    habit: Serialized<Habit>;
}