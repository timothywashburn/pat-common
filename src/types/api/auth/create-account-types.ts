import { z } from "zod";

export const createAccountRequestSchema = z.object({
    name: z.string().trim().min(1),
    email: z.string().trim().email(),
    password: z.string().min(4),
    skipVerificationEmail: z.boolean().optional()
});

export type CreateAccountRequest = z.infer<typeof createAccountRequestSchema>;

export interface CreateAccountResponse {
    id: string;
    name: string;
    email: string;
}