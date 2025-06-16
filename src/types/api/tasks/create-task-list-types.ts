import { z } from 'zod';
import { TaskListId } from "../../id-types";

export const createTaskListRequestSchema = z.object({
    name: z.string().min(1)
});

export type CreateTaskListRequest = z.infer<typeof createTaskListRequestSchema>;

export interface CreateTaskListResponse {
    taskList: {
        id: TaskListId;
        name: string;
        createdAt: string;
        updatedAt: string;
    };
}