import { ToDateString } from "../misc-types";
import { toDateString } from "../../utils";

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
        createdAt: toDateString(data.createdAt),
        updatedAt: toDateString(data.updatedAt),
        entries: entries.map(entry => ({
            ...entry,
            date: toDateString(entry.date),
            createdAt: toDateString(entry.createdAt),
            updatedAt: toDateString(entry.updatedAt)
        })),
        stats
    };
}