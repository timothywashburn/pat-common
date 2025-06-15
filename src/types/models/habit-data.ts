import { TaskId, TaskListId, UserId } from "../id-types";

export interface HabitEntryData {
    _id: string;
    habitId: string;
    date: string;
    status: 'completed' | 'excused' | 'missed';
    createdAt: Date;
    updatedAt: Date;
}

export interface HabitData {
    _id: string;
    userId: string;
    name: string;
    description?: string;
    frequency: 'daily';
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

export interface HabitWithEntries {
    id: string;
    name: string;
    description?: string;
    frequency: 'daily';
    rolloverTime: string;
    createdAt: Date;
    updatedAt: Date;
    entries: HabitEntryData[];
    stats: HabitStats;
}