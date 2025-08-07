import { z } from "zod";
import { Serialized } from "../../../utils";
import { NotificationInstanceData } from "../../models/notification-instance-data";

// Request schema - query parameters
export const getNotificationInstancesRequestSchema = z.object({
    status: z.string().optional(), // filter by status
    templateId: z.string().optional(), // filter by template
    entityId: z.string().optional(), // filter by entity
    limit: z.number().optional(), // pagination
    offset: z.number().optional() // pagination
});

export type GetNotificationInstancesRequest = z.infer<typeof getNotificationInstancesRequestSchema>;

// Response schema
export const getNotificationInstancesResponseSchema = z.object({
    success: z.boolean(),
    instances: z.array(z.any()).optional(), // Will be Serialized<NotificationInstanceData>[]
    total: z.number().optional(),
    error: z.string().optional()
});

export type GetNotificationInstancesResponse = {
    success: boolean;
    instances?: Serialized<NotificationInstanceData>[];
    total?: number;
    error?: string;
};