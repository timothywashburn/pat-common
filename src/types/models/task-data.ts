import { TaskId, TaskListId, UserId } from "../id-types";

export enum TaskListType {
    TASKS = 'tasks',
    NOTES = 'notes'
}

export interface TaskData {
    _id: TaskId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    notes?: string;
    completed: boolean;
    taskListId: TaskListId;
}

export interface TaskListData {
    _id: TaskListId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    type: TaskListType;
}