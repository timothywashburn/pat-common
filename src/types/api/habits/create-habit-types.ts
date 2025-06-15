import { z } from "zod";
import { HabitWithEntries } from "../../models/habit-data";

const createHabitRequestSchema = z.object({
    name: z.string().min(1, 'Name is required').trim(),
    description: z.string().trim().optional(),
    frequency: z.literal('daily'),
    rolloverTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'rolloverTime must be in HH:MM format')
});

export interface CreateHabitRequest {
    name: string;
    description?: string;
    frequency: 'daily';
    rolloverTime: string;
}

export interface CreateHabitResponse {
    habit: HabitWithEntries;
}