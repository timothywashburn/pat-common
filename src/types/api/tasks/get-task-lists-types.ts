import { TaskListId } from "../../id-types";

export interface GetTaskListsResponse {
    taskLists: Array<{
        id: TaskListId;
        name: string;
        createdAt: string;
        updatedAt: string;
    }>;
}