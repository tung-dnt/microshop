#!/bin/sh
compose_file="docker-compose.dev.yml"

echo "🤖 Getting microservice names from file..."
while IFS= read -r line; do
  index=0
  services[$index]=$line
  index=$((index + 1))

  echo "Service: ${line}"
done < scripts/microservices.txt
echo "✅  All services retrieved!"

##################################################################################

echo "🤖 Installing dependencies..."
pnpm install --frozen-lockfile
echo "✅  All dependencies installed!"

##################################################################################

echo "🤖 Starting all services..."
pnpm build
pnpm start:dev
echo "✅  Project started!"

##################################################################################

# Don't run this loop before `pnpm start:dev` (don't refactor)
echo "🤖 Syncing up schema files to DB..."
for j in "${services[@]}"; do
  docker-compose -f $compose_file exec "${services[j]}" pnpm --filter "${services[j]}" db:push
done

docker-compose -f $compose_file restart

echo "✅  ✅  ✅   All tasks run through!"