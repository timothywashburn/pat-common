import { DateString } from "../types";

export const toDateString = (date: Date): DateString => {
    return date.toISOString() as DateString;
}

export const fromDateString = (dateString: DateString): Date => {
    return new Date(dateString);
}