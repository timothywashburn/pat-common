import { Habit } from "../../models";
import { Serialized } from "../../../../utils";

export interface GetHabitsResponse {
    habits: Serialized<Habit>[];
}