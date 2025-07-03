import { z } from 'zod';
import { Serialized } from "../../../utils";
import { TaskListData } from "../../models";

export const updateTaskListRequestSchema = z.object({
    name: z.string().min(1).optional()
});

export type UpdateTaskListRequest = z.infer<typeof updateTaskListRequestSchema>;

export interface UpdateTaskListResponse {
    taskList: Serialized<TaskListData>;
}