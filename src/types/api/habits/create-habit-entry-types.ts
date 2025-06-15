import { z } from "zod";
import { HabitWithEntries } from "../../models/habit-data";

export const createHabitEntryRequestSchema = z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be in YYYY-MM-DD format'),
    status: z.enum(['completed', 'excused', 'missed'])
});

export interface CreateHabitEntryRequest {
    date: string;
    status: 'completed' | 'excused' | 'missed';
}

export interface CreateHabitEntryResponse {
    habit: HabitWithEntries;
}