import { Habit } from "../../models";
import { Serialized } from "../../../../utils";

export interface DeleteHabitEntryResponse {
    habit: Serialized<Habit>;
}