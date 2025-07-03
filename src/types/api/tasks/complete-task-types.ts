import { z } from 'zod';
import { Serialized } from "../../../utils";
import { TaskData } from "../../models";

export const completeTaskRequestSchema = z.object({
    completed: z.boolean()
});

export type CompleteTaskRequest = z.infer<typeof completeTaskRequestSchema>;

export interface CompleteTaskResponse {
    task: Serialized<TaskData>;
}