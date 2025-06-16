import { z } from 'zod';
import { TaskId, TaskListId, taskListIdSchema } from '../../id-types';

export const createTaskRequestSchema = z.object({
    name: z.string().min(1),
    notes: z.string().optional(),
    taskListId: taskListIdSchema
});

export type CreateTaskRequest = z.infer<typeof createTaskRequestSchema>;

export interface CreateTaskResponse {
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