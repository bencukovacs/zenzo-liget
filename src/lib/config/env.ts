/**
 * Type-safe environment variable access utilities.
 * All environment variables should be accessed through this module.
 */

function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Required environment variable ${key} is not set. ` +
        'Check your .env.local file or deployment configuration.'
    );
  }
  return value;
}

function getOptionalEnv(key: string, defaultValue: string): string {
  return process.env[key] || defaultValue;
}

/**
 * Environment configuration object with type-safe getters.
 * All environment access goes through lazy getters to enable testing with vi.stubEnv.
 */
export const env = {
  // Database
  DATABASE_URL: () => getRequiredEnv('DATABASE_URL'),
  TENANT_DB_URL_TEMPLATE: () => getRequiredEnv('TENANT_DB_URL_TEMPLATE'),

  // Auth
  NEXTAUTH_URL: () => getOptionalEnv('NEXTAUTH_URL', 'http://localhost:3000'),
  NEXTAUTH_SECRET: () => getRequiredEnv('NEXTAUTH_SECRET'),

  // Email (optional for now)
  RESEND_API_KEY: () => getOptionalEnv('RESEND_API_KEY', ''),

  // Environment detection
  isDevelopment: () => process.env.NODE_ENV === 'development',
  isProduction: () => process.env.NODE_ENV === 'production',
  isTest: () => process.env.NODE_ENV === 'test',
} as const;

export type Env = typeof env;
