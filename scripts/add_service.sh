#!/bin/sh
read -p "Enter workspace name : " workspace

cd apps

nest new ${workspace} --package-manager pnpm --language TS --skip-git --strict

pnpm add @shared/utils lodash --filter ${workspace}
pnpm add -D tsconfig eslint-config-custom @shared/types @types/lodash --filter ${workspace}

cd ${workspace}

echo "FROM node:18-alpine as base
      
      # adding apk deps to avoid node-gyp related errors
      RUN apk add -f --update --no-cache --virtual .gyp nano bash libc6-compat python3 make g++ \
            && npm install --global turbo \
            && apk del .gyp
      
      RUN npm i --location=global --save-exact pnpm@8.6.11
      
      ###################################################################
      
      FROM base as pruned
      
      WORKDIR /app
      COPY . .
      RUN turbo prune --scope=${workspace} --docker

      RUN rm -rf out/full/apps/${workspace}/node_modules
      
      ###################################################################
      
      FROM pruned as build
      
      WORKDIR /app/build
      COPY --from=pruned /app/out/full .
      COPY --from=pruned /app/out/pnpm-lock.yaml .
      RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
      
      ###################################################################
      
      FROM node:18-alpine as run
      
      WORKDIR app
      COPY --from=build /app/build .
      RUN npm i --location=global --save-exact pnpm@8.6.11
      COPY ./scripts ./scripts
      RUN chmod -R 744 scripts
      RUN ./scripts/generate_db_clients.sh

      CMD pnpm --filter ${workspace} start:dev" > "Dockerfile.local"