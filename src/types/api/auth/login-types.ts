import { z } from "zod";
import { AuthTokens } from "../../auth-tokens";
import { PublicAuthData, UserData } from "../../models";

export const loginRequestSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export type LoginRequest = z.infer<typeof loginRequestSchema>;

export interface LoginResponse {
    tokenData: AuthTokens;
    authData: PublicAuthData;
    user: UserData;
}