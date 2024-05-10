#!/bin/sh
read -p "Enter workspace name : " workspace

cd apps

nest new ${workspace} --package-manager pnpm --language TS --skip-git --strict

pnpm add @shared/utils @shared/constants @shared/database class-validator@0.14.0 dayjs@1.11.10 drizzle-orm@0.29.1 lodash@4.17.21 class-transformer@0.5.1 --filter ${workspace}
pnpm add -D tsconfig eslint-config-custom @shared/types @types/lodash drizzle-kit@0.20.7 eslint-plugin-unused-imports@3.0.0 eslint-plugin-simple-import-sort@10.0.0 eslint-plugin-import-newlines@1.3.4  --filter ${workspace}

cd ${workspace}

echo "
FROM node:18-alpine as base

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

CMD pnpm --filter ${workspace} start:dev" > "Dockerfile"
