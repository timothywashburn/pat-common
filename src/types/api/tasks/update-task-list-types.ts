import { z } from 'zod';
import { TaskListId } from "../../id-types";

export const updateTaskListRequestSchema = z.object({
    name: z.string().min(1).optional()
});

export type UpdateTaskListRequest = z.infer<typeof updateTaskListRequestSchema>;

export interface UpdateTaskListResponse {
    taskList: {
        id: TaskListId;
        name: string;
        createdAt: string;
        updatedAt: string;
    };
}