import { z } from "zod";
import { AuthTokens } from "../../auth-tokens";
import { PublicAuthData } from "../../models";

export const refreshTokenRequestSchema = z.object({
    refreshToken: z.string()
});

export type RefreshTokenRequest = z.infer<typeof refreshTokenRequestSchema>;

export interface RefreshAuthResponse {
    tokenData: AuthTokens;
    authData: PublicAuthData;
}