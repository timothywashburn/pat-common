import { z } from 'zod';
import { taskListIdSchema } from '../../id-types';

export const updateTaskRequestSchema = z.object({
    name: z.string().min(1).optional(),
    notes: z.string().optional(),
    completed: z.boolean().optional(),
    taskListId: taskListIdSchema.optional()
});

export type UpdateTaskRequest = z.infer<typeof updateTaskRequestSchema>;

export interface UpdateTaskResponse {
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