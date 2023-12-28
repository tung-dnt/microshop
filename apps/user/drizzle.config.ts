import type { Config } from 'drizzle-kit'

export default {
  schema: '../../packages/database/schema/users.ts',
  out: './drizzle',
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'postgres',
  },
} satisfies Config