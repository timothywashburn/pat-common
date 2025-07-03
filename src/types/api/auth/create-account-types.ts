import { z } from "zod";
import { UserId } from "../../id-types";

export const createAccountRequestSchema = z.object({
    name: z.string().trim().min(1),
    email: z.string().trim().email(),
    password: z.string().min(4),
    skipVerificationEmail: z.boolean().optional()
});

export type CreateAccountRequest = z.infer<typeof createAccountRequestSchema>;

export interface CreateAccountResponse {
    id: UserId;
    name: string;
    email: string;
}