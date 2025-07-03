import { z } from 'zod';
import { taskListIdSchema } from '../../id-types';
import { Serialized } from "../../../utils";
import { TaskData } from "../../models";

export const updateTaskRequestSchema = z.object({
    name: z.string().min(1).optional(),
    notes: z.string().nullish(),
    completed: z.boolean().optional(),
    taskListId: taskListIdSchema.optional()
});

export type UpdateTaskRequest = z.infer<typeof updateTaskRequestSchema>;

export interface UpdateTaskResponse {
    task: Serialized<TaskData>;
}