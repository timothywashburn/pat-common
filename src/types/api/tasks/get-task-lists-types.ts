export interface GetTaskListsResponse {
    taskLists: Array<{
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
    }>;
}