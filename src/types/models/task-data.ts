import { TaskId, TaskListId, UserId } from "../id-types";

export interface TaskData {
    _id: TaskId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    notes?: string | null;
    completed: boolean;
    taskListId: TaskListId;
}

export interface TaskListData {
    _id: TaskListId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
}