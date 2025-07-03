import { Serialized } from "../../../utils";
import { TaskListData } from "../../models";

export interface GetTaskListsResponse {
    taskLists: Serialized<TaskListData>[];
}