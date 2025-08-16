import { AuthData } from '../types';
import { HabitData, HabitEntryData, HabitStats, Habit } from '../types';

export type PublicAuthData = Pick<AuthData, 'email' | 'emailVerified'> & { readonly __brand: unique symbol };

export function toPublicAuthData(data: AuthData): PublicAuthData {
    return {
        email: data.email,
        emailVerified: data.emailVerified
    } as PublicAuthData;
}

export const toHabit = (data: HabitData, entries: HabitEntryData[], stats: HabitStats): Habit => {
    return {
        ...data,
        entries,
        stats
    };
};