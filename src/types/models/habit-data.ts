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

export interface HabitWithEntries extends HabitData {
    entries: HabitEntryData[];
    stats: HabitStats;
}