import { z } from 'zod';
import { TaskId, TaskListId, taskListIdSchema } from '../../id-types';

export const updateTaskRequestSchema = z.object({
    name: z.string().min(1).optional(),
    notes: z.string().nullish(),
    completed: z.boolean().optional(),
    taskListId: taskListIdSchema.optional()
});

export type UpdateTaskRequest = z.infer<typeof updateTaskRequestSchema>;

export interface UpdateTaskResponse {
    task: {
        id: TaskId;
        name: string;
        notes?: string;
        completed: boolean;
        taskListId: TaskListId;
        createdAt: string;
        updatedAt: string;
    };
}