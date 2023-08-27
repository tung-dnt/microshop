#!/bin/sh
read -p "Enter existing workspace name : " service
echo $service >> scripts/microservices.txt

cd apps/${service}

pnpm add @prisma/client@5.3.1 @shared/prisma prisma@5.3.1

pnpm pkg set "scripts.db:push"="pnpm prisma db push"
pnpm pkg set "scripts.seed"="pnpm prisma db seed"
pnpm pkg set "prisma.schema"="../../packages/prisma/schemas/${service}/${service}.prisma"
pnpm pkg set "prisma.seed"="ts-node ../../packages/prisma/schemas/${service}/seed.ts"

cd src
mkdir "db"
cd db
# Create DB service file
echo "import { Injectable, OnModuleInit } from '@nestjs/common'
      import { PrismaClient } from '@prisma/${service}'
      import { softDelete } from '@shared/prisma'

      @Injectable()
      export class PrismaService extends PrismaClient implements OnModuleInit {
        async onModuleInit() {
          this.\$use(softDelete)
          await this.\$connect()
        }
      }" > "prisma.service.ts"

cd ../../../../packages/prisma/schemas
mkdir ${service}
cd ${service}

echo "DATABASE_URL=\"postgresql://root:password@${service}_db:5432/${service}\"" > .env

# Initialize base config of schema
echo "
generator client {
  provider           = \"prisma-client-js\"
  previewPermissions = [\"fullTextSearch\"]
  output             = \"../../../../node_modules/@prisma/${service}\"
}

datasource db {
  provider = \"postgresql\"
  url      = env(\"DATABASE_URL\")
}
" > "${service}.prisma"

pnpm prisma format