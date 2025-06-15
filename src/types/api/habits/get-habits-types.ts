import { HabitWithEntries } from "../../models/habit-data";

export interface GetHabitsResponse {
    habits: HabitWithEntries[];
}