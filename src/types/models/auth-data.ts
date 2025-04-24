import { AuthId, UserId } from "../id-types";

export interface AuthData {
    _id: AuthId;
    createdAt: Date;
    updatedAt: Date;

    userId: UserId;
    email: string;
    passwordHash: string;
    emailVerified: boolean;
}

export type PublicAuthData = Pick<AuthData, 'email' | 'emailVerified'> & { readonly __brand: unique symbol };

export function toPublicAuthData(data: AuthData): PublicAuthData {
    return {
        email: data.email,
        emailVerified: data.emailVerified
    } as PublicAuthData;
}