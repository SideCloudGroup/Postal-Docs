FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run docs:build

FROM caddy:2-alpine

COPY --from=builder /app/.vitepress/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
