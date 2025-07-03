import { Serialized } from "../../../utils";
import { TaskData } from "../../models";

export interface GetTasksResponse {
    tasks: Serialized<TaskData>;
}