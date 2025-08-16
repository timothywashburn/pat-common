import { z } from 'zod';
import { authIdSchema, userIdSchema } from '../id-types';

export const authTokensSchema = z.object({
    accessToken: z.string(),
    refreshToken: z.string()
});

export const tokenPayloadSchema = z.object({
    authId: z.string(),
    userId: z.string()
});

export const refreshTokenPayloadSchema = tokenPayloadSchema.extend({
    tokenId: z.string()
});

export const authDataSchema = z.object({
    _id: authIdSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: userIdSchema,
    email: z.string(),
    passwordHash: z.string(),
    emailVerified: z.boolean()
});

export const publicAuthDataSchema = z.object({
    email: z.string(),
    emailVerified: z.boolean()
});

export const createAccountRequestSchema = z.object({
    name: z.string().trim().min(1),
    email: z.string().trim().email(),
    password: z.string().min(4),
    skipVerificationEmail: z.boolean().optional()
});

export const signInRequestSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export const refreshAuthRequestSchema = z.object({
    refreshToken: z.string()
});

export const resendVerificationRequestSchema = z.object({
    email: z.string().email()
});

export const verifyEmailQuerySchema = z.object({
    token: z.string().optional()
});

export type AuthTokens = z.infer<typeof authTokensSchema>;
export type TokenPayload = z.infer<typeof tokenPayloadSchema>;
export type RefreshTokenPayload = z.infer<typeof refreshTokenPayloadSchema>;
export type AuthData = z.infer<typeof authDataSchema>;
export type PublicAuthData = z.infer<typeof publicAuthDataSchema> & { readonly __brand: unique symbol };

export type CreateAccountRequest = z.infer<typeof createAccountRequestSchema>;
export type SignInRequest = z.infer<typeof signInRequestSchema>;
export type RefreshAuthRequest = z.infer<typeof refreshAuthRequestSchema>;
export type ResendVerificationRequest = z.infer<typeof resendVerificationRequestSchema>;
export type VerifyEmailQuery = z.infer<typeof verifyEmailQuerySchema>;

export interface CreateAccountResponse {
    id: string;
    name: string;
    email: string;
}

export interface SignInResponse {
    tokenData: AuthTokens;
    authData: PublicAuthData;
    user: any;
}

export interface RefreshAuthResponse {
    tokenData: AuthTokens;
    authData: PublicAuthData;
}

export interface ResendVerificationResponse {
    sent: boolean;
}

export interface VerifyEmailResponse {
    verified: boolean;
}