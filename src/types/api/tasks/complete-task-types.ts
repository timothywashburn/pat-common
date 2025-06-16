import { z } from 'zod';
import { TaskId } from "../../id-types";

export const completeTaskRequestSchema = z.object({
    completed: z.boolean()
});

export type CompleteTaskRequest = z.infer<typeof completeTaskRequestSchema>;

export interface CompleteTaskResponse {
    task: {
        id: TaskId;
        name: string;
        notes?: string;
        completed: boolean;
        taskListId: string;
        createdAt: string;
        updatedAt: string;
    };
}