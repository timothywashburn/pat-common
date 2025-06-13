import { z } from 'zod';

export const updateTaskListRequestSchema = z.object({
    name: z.string().min(1).optional()
});

export type UpdateTaskListRequest = z.infer<typeof updateTaskListRequestSchema>;

export interface UpdateTaskListResponse {
    taskList: {
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
    };
}