import type { Config } from 'drizzle-kit'

export default {
  schema: '../../packages/database/schema/product.ts',
  out: '../../packages/database/migrations/product', // migrations folder
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso',
  strict: true,
  verbose: true,
  dbCredentials: {
    host: 'product_db',
    user: 'root',
    password: 'password',
    database: 'postgres',
    port: 5432,
  },
} satisfies Config
