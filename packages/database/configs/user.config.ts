import type { Config } from 'drizzle-kit'

export default {
  schema: '../schema/user.ts',
  out: '../migrations/user', // migrations folder
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso',
  strict: true,
  verbose: true,
  dbCredentials: {
    host: 'user_db',
    user: 'root',
    password: 'password',
    database: 'microshop',
    port: 5432,
  },
} satisfies Config