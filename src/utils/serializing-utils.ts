import {
    Habit,
    HabitData, HabitEntry,
    HabitEntryData,
    ItemData, Person,
    PersonData,
    PersonNoteData,
    NotificationTemplateData,
    ListItemData, ListData,
    ThoughtData,
    UserData
} from "../types";

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

    static serializeHabit(data: Habit): Serialized<Habit> {
        return this.serialize(data);
    }

    static deserializeHabit(data: Serialized<Habit>): Habit {
        return this.deserialize(data) as unknown as Habit;
    }

    static serializeHabitEntry(data: HabitEntry): Serialized<HabitEntry> {
        return this.serialize(data);
    }

    static deserializeHabitEntry(data: Serialized<HabitEntry>): HabitEntry {
        return this.deserialize(data) as unknown as HabitEntry;
    }

    static deserializeHabitDataEntry(data: Serialized<HabitEntryData>): HabitEntryData {
        return this.deserialize(data) as unknown as HabitEntryData;
    }

    static serializePerson(data: Person): Serialized<Person> {
        return this.serialize(data);
    }

    static deserializePerson(data: Serialized<Person>): Person {
        return this.deserialize(data) as unknown as Person;
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

    static serializeListItemData(data: ListItemData): Serialized<ListItemData> {
        return this.serialize(data);
    }

    static deserializeListItemData(data: Serialized<ListItemData>): ListItemData {
        return this.deserialize(data) as unknown as ListItemData;
    }

    static serializeListData(data: ListData): Serialized<ListData> {
        return this.serialize(data);
    }

    static deserializeListData(data: Serialized<ListData>): ListData {
        return this.deserialize(data) as unknown as ListData;
    }

    static serializeThoughtData(data: ThoughtData): Serialized<ThoughtData> {
        return this.serialize(data);
    }

    static deserializeThoughtData(data: Serialized<ThoughtData>): ThoughtData {
        return this.deserialize(data) as unknown as ThoughtData;
    }

    static serializeUserData(data: UserData): Serialized<UserData> {
        return this.serialize(data);
    }

    static deserializeUserData(data: Serialized<UserData>): UserData {
        return this.deserialize(data) as unknown as UserData;
    }

    static serializeNotificationTemplateData(data: NotificationTemplateData): Serialized<NotificationTemplateData> {
        return this.serialize(data);
    }

    static deserializeNotificationTemplateData(data: Serialized<NotificationTemplateData>): NotificationTemplateData {
        return this.deserialize(data) as unknown as NotificationTemplateData;
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