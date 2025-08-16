import {
    NotificationEntityConfig,
    ParentResolver,
    ParentResolutionResult,
    StaticParentResolver,
    DynamicParentResolver
} from './types/notification-entity-config';

/**
 * Registry for managing notification entity configurations and parent resolution
 */
export class NotificationEntityRegistry {
    private static instance: NotificationEntityRegistry;
    private entityConfigs: Map<string, NotificationEntityConfig> = new Map();

    private constructor() {
        // Initialize with default configurations
        this.registerDefaultEntities();
    }

    /**
     * Get the singleton instance
     */
    static getInstance(): NotificationEntityRegistry {
        if (!NotificationEntityRegistry.instance) {
            NotificationEntityRegistry.instance = new NotificationEntityRegistry();
        }
        return NotificationEntityRegistry.instance;
    }

    /**
     * Register a new entity configuration
     */
    registerEntity(config: NotificationEntityConfig): void {
        this.entityConfigs.set(config.entityType, config);
    }

    /**
     * Get configuration for an entity type
     */
    getEntityConfig(entityType: string): NotificationEntityConfig | null {
        return this.entityConfigs.get(entityType) || null;
    }

    /**
     * Get all registered entity types
     */
    getEntityTypes(): string[] {
        return Array.from(this.entityConfigs.keys());
    }

    /**
     * Get all entity configurations
     */
    getAllConfigs(): NotificationEntityConfig[] {
        return Array.from(this.entityConfigs.values());
    }

    /**
     * Resolve the parent type for a specific entity instance
     */
    resolveParent(entityType: string, entityData: any): ParentResolutionResult | null {
        const config = this.entityConfigs.get(entityType);
        if (!config) {
            return null;
        }

        const resolver = config.parentResolver;

        if (resolver.type === 'static') {
            return this.resolveStaticParent(resolver);
        } else {
            return this.resolveDynamicParent(resolver, entityData);
        }
    }

    /**
     * Check if an entity type supports dynamic parent resolution
     */
    isDynamicParentType(entityType: string): boolean {
        const config = this.entityConfigs.get(entityType);
        return config?.parentResolver.type === 'dynamic' || false;
    }

    /**
     * Get the parent property name for dynamic resolution
     */
    getParentProperty(entityType: string): string | null {
        const config = this.entityConfigs.get(entityType);
        if (config?.parentResolver.type === 'dynamic') {
            return config.parentResolver.parentProperty;
        }
        return null;
    }

    /**
     * Get display name for an entity type
     */
    getDisplayName(entityType: string): string {
        const config = this.entityConfigs.get(entityType);
        return config?.displayName || entityType;
    }

    /**
     * Get icon for an entity type
     */
    getIcon(entityType: string): string | null {
        const config = this.entityConfigs.get(entityType);
        return config?.icon || null;
    }

    /**
     * Check if entity type exists
     */
    hasEntityType(entityType: string): boolean {
        return this.entityConfigs.has(entityType);
    }

    /**
     * Remove an entity configuration
     */
    unregisterEntity(entityType: string): boolean {
        return this.entityConfigs.delete(entityType);
    }

    /**
     * Clear all configurations
     */
    clear(): void {
        this.entityConfigs.clear();
    }

    /**
     * Resolve static parent type
     */
    private resolveStaticParent(resolver: StaticParentResolver): ParentResolutionResult {
        return {
            parentType: resolver.parentType,
            isDynamic: false
        };
    }

    /**
     * Resolve dynamic parent type based on entity data
     */
    private resolveDynamicParent(resolver: DynamicParentResolver, entityData: any): ParentResolutionResult {
        const propertyValue = entityData?.[resolver.parentProperty];
        
        if (propertyValue && typeof propertyValue === 'string' && propertyValue.trim()) {
            // Use the property value to construct the parent type
            const parentType = resolver.parentTypePrefix + propertyValue.trim();
            return {
                parentType,
                isDynamic: true,
                resolvedProperty: propertyValue.trim(),
                usedFallback: false
            };
        }

        // Fall back to default parent
        return {
            parentType: resolver.fallbackParent,
            isDynamic: true,
            usedFallback: true
        };
    }

    /**
     * Register default entity configurations
     */
    private registerDefaultEntities(): void {
        // Agenda Panel (static parent of agenda items)
        this.registerEntity({
            entityType: 'agenda_panel',
            parentResolver: {
                type: 'static',
                parentType: 'agenda_panel' // Self-referencing for panel level
            },
            displayName: 'Agenda Panel',
            icon: 'calendar',
            description: 'Default notification templates for all agenda items'
        });

        // Agenda Item (can have dynamic parent based on category)
        this.registerEntity({
            entityType: 'agenda_item',
            parentResolver: {
                type: 'dynamic',
                parentProperty: 'category',
                parentTypePrefix: 'agenda_category_',
                fallbackParent: 'agenda_panel'
            },
            displayName: 'Agenda Item',
            icon: 'calendar',
            description: 'Individual agenda item notifications'
        });

        // Inbox Panel
        this.registerEntity({
            entityType: 'inbox_panel',
            parentResolver: {
                type: 'static',
                parentType: 'inbox_panel' // Self-referencing for panel level
            },
            displayName: 'Inbox Panel',
            icon: 'mail',
            description: 'Inbox notification templates'
        });
    }
}

/**
 * Convenience function to get the singleton instance
 */
export function getNotificationEntityRegistry(): NotificationEntityRegistry {
    return NotificationEntityRegistry.getInstance();
}