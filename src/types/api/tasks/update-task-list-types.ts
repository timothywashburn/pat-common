import { z } from 'zod';
import { Serialized } from "../../../utils";
import { TaskListData, TaskListType } from "../../models";

export const updateTaskListRequestSchema = z.object({
    name: z.string().min(1).optional(),
    type: z.nativeEnum(TaskListType).optional()
});

export type UpdateTaskListRequest = z.infer<typeof updateTaskListRequestSchema>;

export interface UpdateTaskListResponse {
    taskList: Serialized<TaskListData>;
}