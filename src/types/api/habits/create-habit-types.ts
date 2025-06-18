import { z } from "zod";
import { Habit } from "../../models/habit-data";

export const createHabitRequestSchema = z.object({
    name: z.string().min(1, 'Name is required').trim(),
    description: z.string().trim().optional(),
    notes: z.string().trim().optional(),
    frequency: z.literal('daily'),
    rolloverTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'rolloverTime must be in HH:MM format')
});

export interface CreateHabitRequest {
    name: string;
    description?: string;
    notes?: string;
    frequency: 'daily';
    rolloverTime: string;
}

export interface CreateHabitResponse {
    habit: Habit;
}