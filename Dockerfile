FROM madnificent/ember:3.16.0 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod


FROM semtech/ember-proxy-service:1.4.0

ENV STATIC_FOLDERS_REGEX "^/(assets|font|files|sitemap.xml|@appuniversum)/"

COPY --from=builder /app/dist /app
