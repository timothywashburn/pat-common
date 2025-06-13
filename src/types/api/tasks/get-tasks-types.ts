export interface GetTasksResponse {
    tasks: Array<{
        id: string;
        name: string;
        notes?: string;
        completed: boolean;
        taskListId: string;
        createdAt: string;
        updatedAt: string;
    }>;
}