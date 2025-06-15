import { z } from "zod";
import { HabitWithEntries } from "../../models/habit-data";

export const createHabitEntryRequestSchema = z.object({
    date: z.date(),
    status: z.enum(['completed', 'excused', 'missed'])
});

export interface CreateHabitEntryRequest {
    date: Date;
    status: 'completed' | 'excused' | 'missed';
}

export interface CreateHabitEntryResponse {
    habit: HabitWithEntries;
}