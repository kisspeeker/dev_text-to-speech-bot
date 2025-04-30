FROM node:23-alpine AS base

RUN apk update && apk add yarn@1.22.22

WORKDIR /app
COPY . .

FROM base AS prod-deps
RUN yarn install --frozen-lockfile --production

FROM base
COPY --from=prod-deps /app/node_modules ./node_modules

EXPOSE 80
CMD [ "yarn", "start" ]
