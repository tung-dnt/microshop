#!/bin/sh
compose_file="docker-compose.yml"

echo "🤖 Installing dependencies..."
pnpm install --frozen-lockfile || exit
echo "✅  All dependencies installed!"

##################################################################################

echo "🤖 Starting all services..."
pnpm build || exit
docker-compose -f $compose_file up -d || (exit && echo "🧨 Can not start services")
echo "✅  Project started!"

##################################################################################
echo "🤖 Getting microservice names..."
index=0
for service in "./apps"/*; do
  base_service=$(basename "$service")
  if [[ -d "$service" && $base_service != "ui" ]]; then
    # Append the folder name to the variable
    services[$index]=$base_service
    index=$((index + 1))
    echo "$base_service"
  fi
done
echo "✅  All services retrieved!"

# Don't run this loop before `pnpm start:dev` (don't refactor)
echo "🤖 Syncing up schema files to DB..."
for service in "${services[@]}"; do
  docker-compose -f $compose_file exec $service pnpm --filter $service db:push
done

docker-compose -f $compose_file restart || exit

echo "🚀  All tasks run through!"
