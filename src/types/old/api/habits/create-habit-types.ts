import { z } from "zod";
import { Habit, HabitFrequency } from "../../models";
import { Serialized } from "../../../../utils";

export const createHabitRequestSchema = z.object({
    name: z.string().min(1, 'Name is required').trim(),
    description: z.string().trim().optional(),
    notes: z.string().trim().optional(),
    frequency: z.nativeEnum(HabitFrequency),
    rolloverTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'rolloverTime must be in HH:MM format')
});

export type CreateHabitRequest = z.infer<typeof createHabitRequestSchema>;

export interface CreateHabitResponse {
    habit: Serialized<Habit>;
}