#!/bin/sh
read -p "Enter existing workspace name : " service
echo $service >> scripts/microservices.txt

cd packages/database

mkdir migrations/${service}
touch schema/${service}.ts
touch models/${service}.ts

echo "import type { Config } from 'drizzle-kit'

export default {
  schema: '../schema/${service}.ts',
  out: '../migrations/${service}', // migrations folder
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso',
  strict: true,
  verbose: true,
  dbCredentials: {
    host: '${service}_db',
    user: 'root',
    password: 'password',
    database: 'microshop',
    port: 5432,
  },
} satisfies Config" > configs/${service}.config.ts

cd ../../apps/${service}
pnpm pkg set "scripts.db:push"="drizzle-kit push:pg --config=../../packages/database/configs/${service}.config.ts"
pnpm pkg set "scripts.db:generate"="drizzle-kit generate:pg --config=../../packages/database/configs/${service}.config.ts"
pnpm pkg set "scripts.db:migrate"="SERVICE_NAME=${service} tsx ../../packages/database/migrations/index.ts"
