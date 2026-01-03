import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { env } from './env';

describe('env', () => {
  beforeEach(() => {
    vi.stubEnv('DATABASE_URL', 'postgresql://test:test@localhost:5432/test');
    vi.stubEnv('TENANT_DB_URL_TEMPLATE', 'postgresql://test:test@localhost:5432/{tenant_id}_db');
    vi.stubEnv('NEXTAUTH_SECRET', 'test-secret');
    vi.stubEnv('NODE_ENV', 'test');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('DATABASE_URL', () => {
    it('should return the DATABASE_URL when set', () => {
      expect(env.DATABASE_URL()).toBe('postgresql://test:test@localhost:5432/test');
    });

    it('should throw error when DATABASE_URL is not set', () => {
      vi.stubEnv('DATABASE_URL', '');
      expect(() => env.DATABASE_URL()).toThrow('Required environment variable DATABASE_URL is not set');
    });
  });

  describe('TENANT_DB_URL_TEMPLATE', () => {
    it('should return the TENANT_DB_URL_TEMPLATE when set', () => {
      expect(env.TENANT_DB_URL_TEMPLATE()).toBe('postgresql://test:test@localhost:5432/{tenant_id}_db');
    });

    it('should throw error when TENANT_DB_URL_TEMPLATE is not set', () => {
      vi.stubEnv('TENANT_DB_URL_TEMPLATE', '');
      expect(() => env.TENANT_DB_URL_TEMPLATE()).toThrow('Required environment variable TENANT_DB_URL_TEMPLATE is not set');
    });
  });

  describe('NEXTAUTH_URL', () => {
    it('should return the NEXTAUTH_URL when set', () => {
      vi.stubEnv('NEXTAUTH_URL', 'https://example.com');
      expect(env.NEXTAUTH_URL()).toBe('https://example.com');
    });

    it('should return default value when NEXTAUTH_URL is not set', () => {
      vi.stubEnv('NEXTAUTH_URL', '');
      expect(env.NEXTAUTH_URL()).toBe('http://localhost:3000');
    });
  });

  describe('NEXTAUTH_SECRET', () => {
    it('should return the NEXTAUTH_SECRET when set', () => {
      expect(env.NEXTAUTH_SECRET()).toBe('test-secret');
    });

    it('should throw error when NEXTAUTH_SECRET is not set', () => {
      vi.stubEnv('NEXTAUTH_SECRET', '');
      expect(() => env.NEXTAUTH_SECRET()).toThrow('Required environment variable NEXTAUTH_SECRET is not set');
    });
  });

  describe('RESEND_API_KEY', () => {
    it('should return the RESEND_API_KEY when set', () => {
      vi.stubEnv('RESEND_API_KEY', 'test-api-key');
      expect(env.RESEND_API_KEY()).toBe('test-api-key');
    });

    it('should return empty string when RESEND_API_KEY is not set', () => {
      vi.stubEnv('RESEND_API_KEY', '');
      expect(env.RESEND_API_KEY()).toBe('');
    });
  });

  describe('environment detection', () => {
    it('should detect test environment', () => {
      vi.stubEnv('NODE_ENV', 'test');
      expect(env.isTest()).toBe(true);
      expect(env.isDevelopment()).toBe(false);
      expect(env.isProduction()).toBe(false);
    });

    it('should detect development environment', () => {
      vi.stubEnv('NODE_ENV', 'development');
      expect(env.isDevelopment()).toBe(true);
      expect(env.isTest()).toBe(false);
      expect(env.isProduction()).toBe(false);
    });

    it('should detect production environment', () => {
      vi.stubEnv('NODE_ENV', 'production');
      expect(env.isProduction()).toBe(true);
      expect(env.isDevelopment()).toBe(false);
      expect(env.isTest()).toBe(false);
    });
  });
});
