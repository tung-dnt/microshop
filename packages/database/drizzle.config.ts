import type { Config } from 'drizzle-kit';

export default {
  schema: './schema/index.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'postgres',
  },
} satisfies Config;