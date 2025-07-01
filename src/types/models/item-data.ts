import { ItemId, UserId } from "../id-types";

export interface ItemData {
    _id: ItemId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    dueDate?: Date;
    notes?: string;
    completed: boolean;
    urgent: boolean;
    category?: string;
    type?: string;
}

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

export function serialize<T>(obj: T): Serialized<T> {
    return serializeRecursive(obj) as Serialized<T>;
}

export function deserialize<T>(obj: Serialized<T>): T {
    return deserializeRecursive(obj) as T;
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

export function serializeItemData(item: ItemData): Serialized<ItemData> {
    return serialize(item);
}

export function deserializeItemData(apiData: Serialized<ItemData>): ItemData {
    return deserialize(apiData) as unknown as ItemData;
}