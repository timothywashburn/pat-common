import { z } from "zod";

export const registerRequestSchema = z.object({
    name: z.string().trim().min(1),
    email: z.string().trim().email(),
    password: z.string().min(4),
    skipVerificationEmail: z.boolean().optional()
});

export type RegisterRequest = z.infer<typeof registerRequestSchema>;

export interface RegisterResponse {
    id: string;
    name: string;
    email: string;
}