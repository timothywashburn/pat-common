import { z } from "zod";
import { AuthTokens } from "../../auth-tokens";
import { PublicAuthData } from "../../models";

export const refreshAuthRequestSchema = z.object({
    refreshToken: z.string()
});

export type RefreshAuthRequest = z.infer<typeof refreshAuthRequestSchema>;

export interface RefreshAuthResponse {
    tokenData: AuthTokens;
    authData: PublicAuthData;
}