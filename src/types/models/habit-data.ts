import { DateString, ToDateString } from "../misc-types";

export enum HabitFrequency {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    EVERY_N_DAYS = 'every_n_days',
    WEEKDAYS_ONLY = 'weekdays_only',
    CUSTOM = 'custom'
}

export enum HabitEntryStatus {
    COMPLETED = 'completed',
    EXCUSED = 'excused'
}

export interface HabitEntryData {
    _id: string;
    habitId: string;
    date: Date;
    status: HabitEntryStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface HabitData {
    _id: string;
    userId: string;
    name: string;
    description?: string;
    frequency: HabitFrequency;
    rolloverTime: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface HabitStats {
    totalDays: number;
    completedDays: number;
    excusedDays: number;
    missedDays: number;
    completionRate: number;
}

export type HabitEntry = ToDateString<HabitEntryData>;

export type Habit = ToDateString<HabitData> & {
    entries: HabitEntry[];
    stats: HabitStats;
}

export const toHabit = (data: HabitData, entries: HabitEntryData[], stats: HabitStats): Habit => {
    return {
        ...data,
        createdAt: data.createdAt.toISOString() as DateString,
        updatedAt: data.updatedAt.toISOString() as DateString,
        entries: entries.map(entry => ({
            ...entry,
            date: entry.date.toISOString() as DateString,
            createdAt: entry.createdAt.toISOString() as DateString,
            updatedAt: entry.updatedAt.toISOString() as DateString
        })),
        stats
    };
}