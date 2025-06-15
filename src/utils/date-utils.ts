import { DateString } from "../types";

export const toDateString = (date: Date): DateString => {
    return date.toISOString() as DateString;
}