import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getPrismaClient, getTenantConnectionString, disconnectAllClients } from './prisma';

describe('getTenantConnectionString', () => {
  beforeEach(() => {
    vi.stubEnv('TENANT_DB_URL_TEMPLATE', 'postgresql://user:pass@host:5432/{tenant_id}_db');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should replace {tenant_id} with actual tenant ID', () => {
    const result = getTenantConnectionString('liget');
    expect(result).toBe('postgresql://user:pass@host:5432/liget_db');
  });

  it('should throw error for missing TENANT_DB_URL_TEMPLATE', () => {
    vi.stubEnv('TENANT_DB_URL_TEMPLATE', '');
    expect(() => getTenantConnectionString('liget')).toThrow('TENANT_DB_URL_TEMPLATE');
  });

  it('should throw error for invalid tenant ID format', () => {
    expect(() => getTenantConnectionString('invalid tenant!')).toThrow('Invalid tenant ID format');
  });

  it('should accept valid tenant ID formats', () => {
    expect(() => getTenantConnectionString('liget')).not.toThrow();
    expect(() => getTenantConnectionString('zenzo-liget')).not.toThrow();
    expect(() => getTenantConnectionString('tenant_123')).not.toThrow();
  });
});

describe('getPrismaClient', () => {
  beforeEach(() => {
    vi.stubEnv('TENANT_DB_URL_TEMPLATE', 'postgresql://user:pass@host:5432/{tenant_id}_db');
  });

  afterEach(async () => {
    vi.unstubAllEnvs();
    await disconnectAllClients();
  });

  it('should return cached client for same tenant', () => {
    const client1 = getPrismaClient('liget');
    const client2 = getPrismaClient('liget');
    expect(client1).toBe(client2);
  });

  it('should return different clients for different tenants', () => {
    const client1 = getPrismaClient('liget');
    const client2 = getPrismaClient('other-tenant');
    expect(client1).not.toBe(client2);
  });
});

describe('disconnectAllClients', () => {
  beforeEach(() => {
    vi.stubEnv('TENANT_DB_URL_TEMPLATE', 'postgresql://user:pass@host:5432/{tenant_id}_db');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should clear all cached clients', async () => {
    // Create some clients
    const client1 = getPrismaClient('tenant1');
    getPrismaClient('tenant2'); // Create second client (value not used directly)

    // Disconnect all
    await disconnectAllClients();

    // Get clients again - should be new instances
    const newClient1 = getPrismaClient('tenant1');
    expect(newClient1).not.toBe(client1);
  });
});
