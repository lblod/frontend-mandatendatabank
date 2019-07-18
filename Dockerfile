FROM madnificent/ember:3.4.1 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod


FROM cecemel/ember-fastboot-proxy-service:0.3.0

ENV STATIC_FOLDERS_REGEX "^/(assets/|font/|files/|sitemap.xml)"

COPY --from=builder /app/dist /app
