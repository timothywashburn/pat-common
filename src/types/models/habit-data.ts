import { DateOnlyString } from "../misc-types";
import { HabitEntryId, HabitId, UserId } from "../id-types";

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
    INCOMPLETE = 'incomplete'
}

export interface HabitEntryData {
    _id: HabitEntryId;
    habitId: HabitId;
    userId: UserId;
    date: DateOnlyString;
    status: HabitEntryStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface HabitData {
    _id: HabitId;
    userId: UserId;
    name: string;
    description?: string | null;
    notes?: string | null;
    frequency: HabitFrequency;
    rolloverTime: string;
    firstDay: DateOnlyString;
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

export type HabitEntry = HabitEntryData;

export type Habit = HabitData & {
    entries: HabitEntry[];
    stats: HabitStats;
}

export const toHabit = (data: HabitData, entries: HabitEntryData[], stats: HabitStats): Habit => {
    return {
        ...data,
        entries,
        stats
    };
}