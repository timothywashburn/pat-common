import { z } from 'zod';

export const createTaskListRequestSchema = z.object({
    name: z.string().min(1)
});

export type CreateTaskListRequest = z.infer<typeof createTaskListRequestSchema>;

export interface CreateTaskListResponse {
    taskList: {
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
    };
}