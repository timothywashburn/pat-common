import { z } from "zod";
import { AuthTokens } from "../../auth-tokens";
import { PublicAuthData, UserData } from "../../models";

export const signInRequestSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export type SignInRequest = z.infer<typeof signInRequestSchema>;

export interface SignInResponse {
    tokenData: AuthTokens;
    authData: PublicAuthData;
    user: UserData;
}