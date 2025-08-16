import { z } from 'zod';
import { habitIdSchema, habitEntryIdSchema, userIdSchema } from '../id-types';
import { dateOnlyStringSchema } from '../misc-types';
import { Serialized } from '../../utils';

export enum HabitFrequency {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    EVERY_N_DAYS = 'every_n_days',
    WEEKDAYS_ONLY = 'weekdays_only',
    CUSTOM = 'custom'
}

export enum HabitEntryStatus {
    COMPLETED = 'completed',
    EXCUSED = 'excused',
    MISSED = 'missed'
}

export const habitEntrySchema = z.object({
    _id: habitEntryIdSchema,
    habitId: habitIdSchema,
    userId: userIdSchema,
    date: dateOnlyStringSchema,
    status: z.nativeEnum(HabitEntryStatus),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const habitDataSchema = z.object({
    _id: habitIdSchema,
    userId: userIdSchema,
    name: z.string(),
    description: z.string().nullable().optional(),
    notes: z.string().nullable().optional(),
    frequency: z.nativeEnum(HabitFrequency),
    rolloverTime: z.string(),
    firstDay: dateOnlyStringSchema,
    createdAt: z.date(),
    updatedAt: z.date()
});

export const habitStatsSchema = z.object({
    totalDays: z.number(),
    completedDays: z.number(),
    excusedDays: z.number(),
    missedDays: z.number(),
    completionRate: z.number()
});

export const habitSchema = habitDataSchema.extend({
    entries: z.array(habitEntrySchema),
    stats: habitStatsSchema
});

export const createHabitRequestSchema = z.object({
    name: z.string().min(1).trim(),
    description: z.string().trim().optional(),
    notes: z.string().trim().optional(),
    frequency: z.nativeEnum(HabitFrequency),
    rolloverTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
});

export const updateHabitRequestSchema = z.object({
    name: z.string().min(1).trim().optional(),
    description: z.string().trim().nullish(),
    notes: z.string().trim().nullish(),
    frequency: z.nativeEnum(HabitFrequency).optional(),
    rolloverTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
});

export const createHabitEntryRequestSchema = z.object({
    date: dateOnlyStringSchema,
    status: z.nativeEnum(HabitEntryStatus)
});

export type HabitEntryData = z.infer<typeof habitEntrySchema>;
export type HabitData = z.infer<typeof habitDataSchema>;
export type HabitStats = z.infer<typeof habitStatsSchema>;
export type Habit = z.infer<typeof habitSchema>;

export type CreateHabitRequest = z.infer<typeof createHabitRequestSchema>;
export type UpdateHabitRequest = z.infer<typeof updateHabitRequestSchema>;
export type CreateHabitEntryRequest = z.infer<typeof createHabitEntryRequestSchema>;

export interface CreateHabitResponse {
    habit: Serialized<Habit>;
}

export interface GetHabitsResponse {
    habits: Serialized<Habit>[];
}

export interface GetHabitResponse {
    habit: Serialized<Habit>;
}

export interface UpdateHabitResponse {
    habit: Serialized<Habit>;
}

export interface DeleteHabitResponse {}

export interface CreateHabitEntryResponse {
    habit: Serialized<Habit>;
}

export interface DeleteHabitEntryResponse {}