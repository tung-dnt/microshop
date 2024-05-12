#!/bin/sh
compose_file="docker-compose.yml"

echo "🤖 Getting microservice names..."

for f in "./apps"/*; do
  index=0
  if [ -d "$f" ]; then
    # Append the folder name to the variable
    services[$index]=$(basename "$f")
    echo ${services[$index]}
    index=$((index + 1))
  fi
done

echo "✅  All services retrieved!"

##################################################################################

echo "🤖 Installing dependencies..."
pnpm install --frozen-lockfile || exit
echo "✅  All dependencies installed!"

##################################################################################

echo "🤖 Starting all services..."
pnpm build || exit
pnpm start:dev || (exit && echo "🧨 Can not start services")
echo "✅  Project started!"

##################################################################################

# Don't run this loop before `pnpm start:dev` (don't refactor)
echo "🤖 Syncing up schema files to DB..."
for j in "${services[@]}"; do
  docker-compose -f $compose_file exec "$services[j]}" pnpm --filter "${services[j]}" db:push
done

docker-compose -f $compose_file restart || exit

echo "✅  ✅  ✅   All tasks run through!"
