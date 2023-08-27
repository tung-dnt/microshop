#!/bin/sh

echo "🤖 Generating prisma clients..."

while IFS= read -r service || [[ "$service" ]]; do
  pnpm prisma generate --schema packages/prisma/schemas/${service}/${service}.prisma
done < scripts/microservices.txt

echo "Database clients generated!"