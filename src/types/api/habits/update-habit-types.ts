import { z } from "zod";
import { Habit } from "../../models";

export const updateHabitRequestSchema = z.object({
    name: z.string().min(1, 'Name is required').trim().optional(),
    description: z.string().trim().optional(),
    frequency: z.literal('daily').optional(),
    rolloverTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'rolloverTime must be in HH:MM format').optional()
});

export interface UpdateHabitRequest {
    name?: string;
    description?: string;
    frequency?: 'daily';
    rolloverTime?: string;
}

export interface UpdateHabitResponse {
    habit: Habit;
}