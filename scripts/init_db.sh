#!/bin/sh
read -p "Enter existing workspace name: " service
read -p "Choose DB driver ('pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'): " driver

cd packages/database

mkdir migrations/${service}
touch schema/${service}.ts
touch models/${service}.ts

echo "import type { Config } from 'drizzle-kit'

export default {
  schema: '../../packages/database/schema/${service}.ts',
  out: '../../packages/database/migrations/${service}', // migrations folder
  driver: '${driver}', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso',
  strict: true,
  verbose: true,
  dbCredentials: {
    host: '${service}_db',
    user: 'root',
    password: 'password',
    database: '${service}',
    port: 5432,
  },
} satisfies Config" > configs/${service}.config.ts

cd ../../apps/${service}
pnpm pkg set "scripts.db:push"="drizzle-kit push:pg --config=../../packages/database/configs/${service}.config.ts"
pnpm pkg set "scripts.db:generate"="drizzle-kit generate:pg --config=../../packages/database/configs/${service}.config.ts"
pnpm pkg set "scripts.db:migrate"="SERVICE_NAME=${service} tsx ../../packages/database/migrations/index.ts"
