import { NotificationTemplateData, NotificationEntityType } from "./notification-template-data";

export interface NotificationContext<T = any> {
    entityId: string;
    entityType: NotificationEntityType;
    entityData: T;
    userId: string;
    // Additional context for template variable replacement
    variables: Record<string, any>;
}

export interface INotifiable<T = any> {
    /**
     * Get the ID of this notifiable entity
     */
    getId(): string;
    
    /**
     * Get the entity type for notification purposes
     */
    getNotificationEntityType(): NotificationEntityType;
    
    /**
     * Get context data for notification template variables
     */
    getNotificationContext(): NotificationContext<T>;
    
    /**
     * Get inherited notification templates from parent entities
     */
    getInheritedNotificationTemplates(): Promise<NotificationTemplateData[]>;
    
    /**
     * Get custom notification templates specific to this entity
     */
    getCustomNotificationTemplates(): Promise<NotificationTemplateData[]>;
    
    /**
     * Get all effective notification templates (inherited + custom)
     */
    getAllNotificationTemplates(): Promise<NotificationTemplateData[]>;
    
    /**
     * Register notification triggers when entity is created/updated
     */
    registerNotificationTriggers(): Promise<void>;
    
    /**
     * Remove notification triggers when entity is deleted
     */
    removeNotificationTriggers(): Promise<void>;
}