import { HabitData, HabitEntryData, ItemData, PersonData, PersonNoteData, TaskData, UserData } from "../types";

export type Serialized<T> = T extends Date
    ? string
    : T extends Date | undefined
        ? string | undefined
        : T extends Date | null
            ? string | null
            : T extends (infer U)[]
                ? Serialized<U>[]
                : T extends object
                    ? { [K in keyof T]: Serialized<T[K]> }
                    : T;

export class Serializer {
    static serialize<T>(obj: T): Serialized<T> {
        return serializeRecursive(obj) as Serialized<T>;
    }

    static deserialize<T>(obj: Serialized<T>): T {
        return deserializeRecursive(obj) as T;
    }

    static serializeItemData(data: ItemData): Serialized<ItemData> {
        return this.serialize(data);
    }

    static deserializeItemData(data: Serialized<ItemData>): ItemData {
        return this.deserialize(data) as unknown as ItemData;
    }

    static serializeHabitData(data: HabitData): Serialized<HabitData> {
        return this.serialize(data);
    }

    static deserializeHabitData(data: Serialized<HabitData>): HabitData {
        return this.deserialize(data) as unknown as HabitData;
    }

    static serializeHabitDataEntry(data: HabitEntryData): Serialized<HabitEntryData> {
        return this.serialize(data);
    }

    static deserializeHabitDataEntry(data: Serialized<HabitEntryData>): HabitEntryData {
        return this.deserialize(data) as unknown as HabitEntryData;
    }

    static serializePersonData(data: PersonData): Serialized<PersonData> {
        return this.serialize(data);
    }

    static deserializePersonData(data: Serialized<PersonData>): PersonData {
        return this.deserialize(data) as unknown as PersonData;
    }

    static serializePersonNoteData(data: PersonNoteData): Serialized<PersonNoteData> {
        return this.serialize(data);
    }

    static deserializePersonNoteData(data: Serialized<PersonNoteData>): PersonNoteData {
        return this.deserialize(data) as unknown as PersonNoteData;
    }

    static serializeTaskData(data: TaskData): Serialized<TaskData> {
        return this.serialize(data);
    }

    static deserializeTaskData(data: Serialized<TaskData>): TaskData {
        return this.deserialize(data) as unknown as TaskData;
    }

    static serializeTaskListData(data: TaskData[]): Serialized<TaskData[]> {
        return this.serialize(data);
    }

    static serializeUserData(data: UserData): Serialized<UserData> {
        return this.serialize(data);
    }

    static deserializeUserData(data: Serialized<UserData>): UserData {
        return this.deserialize(data) as unknown as UserData;
    }
}

function serializeRecursive(obj: any): any {
    if (obj === null || obj === undefined) {
        return obj;
    }

    if (obj instanceof Date) {
        return obj.toISOString();
    }

    if (Array.isArray(obj)) {
        return obj.map(item => serializeRecursive(item));
    }

    if (typeof obj === 'object') {
        const result: any = {};
        for (const [key, value] of Object.entries(obj)) {
            result[key] = serializeRecursive(value);
        }
        return result;
    }

    return obj;
}

function deserializeRecursive(obj: any): any {
    if (obj === null || obj === undefined) {
        return obj;
    }

    if (typeof obj === 'string' && isISODateString(obj)) {
        return new Date(obj);
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deserializeRecursive(item));
    }

    if (typeof obj === 'object') {
        const result: any = {};
        for (const [key, value] of Object.entries(obj)) {
            result[key] = deserializeRecursive(value);
        }
        return result;
    }

    return obj;
}

function isISODateString(value: string): boolean {
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
    return isoRegex.test(value) && !isNaN(Date.parse(value));
}