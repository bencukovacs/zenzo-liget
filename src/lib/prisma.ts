import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const prismaClients = new Map<string, PrismaClient>();

/**
 * Constructs the database connection string for a specific tenant.
 * Uses the TENANT_DB_URL_TEMPLATE environment variable and replaces {tenant_id} placeholder.
 *
 * @param tenantId - The unique identifier for the tenant
 * @returns The full database connection URL for the tenant
 * @throws Error if TENANT_DB_URL_TEMPLATE is not configured or tenantId format is invalid
 */
export function getTenantConnectionString(tenantId: string): string {
  const template = process.env.TENANT_DB_URL_TEMPLATE;
  if (!template) {
    throw new Error(
      'TENANT_DB_URL_TEMPLATE environment variable is not configured. ' +
        'Expected format: postgresql://user:password@host:5432/{tenant_id}_db'
    );
  }

  // Validate tenantId format (alphanumeric, underscores, hyphens only)
  if (!/^[a-zA-Z0-9_-]+$/.test(tenantId)) {
    throw new Error(
      `Invalid tenant ID format: "${tenantId}". ` +
        'Tenant ID must contain only alphanumeric characters, underscores, and hyphens.'
    );
  }

  return template.replace('{tenant_id}', tenantId);
}

/**
 * Gets or creates a PrismaClient instance for a specific tenant.
 * Clients are cached to prevent connection pool exhaustion.
 *
 * @param tenantId - The unique identifier for the tenant
 * @returns A PrismaClient connected to the tenant's database
 * @throws Error if tenant configuration is invalid or missing
 */
export function getPrismaClient(tenantId: string): PrismaClient {
  if (!prismaClients.has(tenantId)) {
    const connectionString = getTenantConnectionString(tenantId);
    const adapter = new PrismaPg({ connectionString });
    const client = new PrismaClient({ adapter });
    prismaClients.set(tenantId, client);
  }
  return prismaClients.get(tenantId)!;
}

/**
 * Disconnects all cached PrismaClient instances.
 * Use this for cleanup in tests or during application shutdown.
 */
export async function disconnectAllClients(): Promise<void> {
  const disconnectPromises = Array.from(prismaClients.values()).map((client) =>
    client.$disconnect()
  );
  await Promise.all(disconnectPromises);
  prismaClients.clear();
}

// Re-export PrismaClient type for convenience
export type { PrismaClient } from '@/generated/prisma';
