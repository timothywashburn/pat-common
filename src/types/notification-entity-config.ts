import { z } from 'zod';

/**
 * Static parent resolver - entity always inherits from the same parent type
 */
export interface StaticParentResolver {
    type: 'static';
    parentType: string;
}

/**
 * Dynamic parent resolver - parent determined by entity properties
 */
export interface DynamicParentResolver {
    type: 'dynamic';
    parentProperty: string; // Property name on entity (e.g., 'category')
    parentTypePrefix: string; // Prefix for parent type (e.g., 'agenda_category_')
    fallbackParent: string; // Default parent if property is missing/empty
}

export type ParentResolver = StaticParentResolver | DynamicParentResolver;

/**
 * Configuration for a notification entity type
 */
export interface NotificationEntityConfig {
    entityType: string;
    parentResolver: ParentResolver;
    displayName: string;
    icon?: string;
    description?: string;
}

/**
 * Result of parent resolution for a specific entity instance
 */
export interface ParentResolutionResult {
    parentType: string;
    isDynamic: boolean;
    resolvedProperty?: string;
    usedFallback?: boolean;
}

/**
 * Zod schemas for validation
 */
export const staticParentResolverSchema = z.object({
    type: z.literal('static'),
    parentType: z.string()
});

export const dynamicParentResolverSchema = z.object({
    type: z.literal('dynamic'),
    parentProperty: z.string(),
    parentTypePrefix: z.string(),
    fallbackParent: z.string()
});

export const parentResolverSchema = z.union([
    staticParentResolverSchema,
    dynamicParentResolverSchema
]);

export const notificationEntityConfigSchema = z.object({
    entityType: z.string(),
    parentResolver: parentResolverSchema,
    displayName: z.string(),
    icon: z.string().optional(),
    description: z.string().optional()
});

/**
 * Type exports
 */
export type StaticParentResolverData = z.infer<typeof staticParentResolverSchema>;
export type DynamicParentResolverData = z.infer<typeof dynamicParentResolverSchema>;
export type ParentResolverData = z.infer<typeof parentResolverSchema>;
export type NotificationEntityConfigData = z.infer<typeof notificationEntityConfigSchema>;