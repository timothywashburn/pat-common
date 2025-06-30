import { ThoughtId, UserId } from "../id-types";

export interface ThoughtData {
    id: ThoughtId;
    userId: UserId;
    createdAt: Date;
    updatedAt: Date;
    content: string;
}