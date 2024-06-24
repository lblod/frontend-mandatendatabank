FROM node:20.12 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


# TODO: replace this with the tagged version when it's released
# https://github.com/redpencilio/fastboot-app-server-service/pull/9
FROM redpencil/fastboot-app-server:feature-node-20

COPY --from=builder /app/dist /app
