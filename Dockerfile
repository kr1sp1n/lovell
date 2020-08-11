FROM node:lts-alpine3.11 AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY src ./src

FROM base AS dev
CMD [ "yarn", "dev" ]