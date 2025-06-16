import { TaskId, TaskListId } from "../../id-types";

export interface GetTasksResponse {
    tasks: Array<{
        id: TaskId;
        name: string;
        notes?: string;
        completed: boolean;
        taskListId: TaskListId;
        createdAt: string;
        updatedAt: string;
    }>;
}