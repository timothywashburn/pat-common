import { z } from "zod";
import { NotificationInstanceId, NotificationTemplateId, UserId } from "../id-types";

export const notificationStatusSchema = z.enum(['scheduled', 'sent', 'failed', 'cancelled']);
export type NotificationStatus = z.infer<typeof notificationStatusSchema>;

export const notificationInstanceDataSchema = z.object({
    _id: z.string().transform((val): NotificationInstanceId => val as NotificationInstanceId),
    templateId: z.string().transform((val): NotificationTemplateId => val as NotificationTemplateId),
    userId: z.string().transform((val): UserId => val as UserId),
    entityId: z.string(), // ID of the specific entity this notification is for
    scheduledFor: z.date(),
    status: notificationStatusSchema,
    sentAt: z.date().optional(),
    content: z.object({
        title: z.string(),
        body: z.string(),
        data: z.record(z.any()).optional() // additional data for the notification
    }),
    redisId: z.string(), // link to Redis scheduled notification for coordination
    error: z.string().optional(), // error message if status is 'failed'
    createdAt: z.date(),
    updatedAt: z.date()
});

export type NotificationInstanceData = z.infer<typeof notificationInstanceDataSchema>;

// Helper type for creating new instances (without _id, dates, status)
export const createNotificationInstanceSchema = notificationInstanceDataSchema.omit({
    _id: true,
    status: true,
    sentAt: true,
    error: true,
    createdAt: true,
    updatedAt: true
}).extend({
    status: notificationStatusSchema.default('scheduled')
});

export type CreateNotificationInstanceData = z.infer<typeof createNotificationInstanceSchema>;