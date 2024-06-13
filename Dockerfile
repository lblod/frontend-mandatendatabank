FROM node:20.12 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM cecemel/ember-fastboot-proxy-service:0.6.0

ENV STATIC_FOLDERS_REGEX "^/(assets|font|files|sitemap.xml|@appuniversum)/"

COPY --from=builder /app/dist /app
