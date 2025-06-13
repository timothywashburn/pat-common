import { z } from 'zod';

export const completeTaskRequestSchema = z.object({
    completed: z.boolean()
});

export type CompleteTaskRequest = z.infer<typeof completeTaskRequestSchema>;

export interface CompleteTaskResponse {
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