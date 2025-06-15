import { Habit } from "../../models/habit-data";

export interface GetHabitsResponse {
    habits: Habit[];
}