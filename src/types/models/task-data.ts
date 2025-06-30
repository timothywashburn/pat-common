import { TaskId, TaskListId, UserId } from "../id-types";

export interface TaskData {
    id: TaskId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    notes?: string;
    completed: boolean;
    taskListId: TaskListId;
}

export interface TaskListData {
    id: TaskListId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
}