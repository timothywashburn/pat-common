import { z } from 'zod';
import { taskListIdSchema } from '../../id-types';
import { Serialized } from "../../../utils";
import { TaskData } from "../../models";

export const createTaskRequestSchema = z.object({
    name: z.string().min(1),
    notes: z.string().optional(),
    taskListId: taskListIdSchema
});

export type CreateTaskRequest = z.infer<typeof createTaskRequestSchema>;

export interface CreateTaskResponse {
    task: Serialized<TaskData>;
}