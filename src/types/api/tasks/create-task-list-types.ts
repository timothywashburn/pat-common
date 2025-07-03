import { z } from 'zod';
import { Serialized } from "../../../utils";
import { TaskListData } from "../../models";

export const createTaskListRequestSchema = z.object({
    name: z.string().min(1)
});

export type CreateTaskListRequest = z.infer<typeof createTaskListRequestSchema>;

export interface CreateTaskListResponse {
    taskList: Serialized<TaskListData>;
}