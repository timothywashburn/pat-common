import { z } from 'zod';
import { taskListIdSchema } from '../../id-types';

export const createTaskRequestSchema = z.object({
    name: z.string().min(1),
    notes: z.string().optional(),
    taskListId: taskListIdSchema
});

export type CreateTaskRequest = z.infer<typeof createTaskRequestSchema>;

export interface CreateTaskResponse {
    task: {
        id: string;
        name: string;
        notes?: string;
        completed: boolean;
        taskListId: string;
        createdAt: string;
        updatedAt: string;
    };
}