FROM node:10 AS build-env
ARG AUTH_TOKEN
ADD . /app

WORKDIR /app

RUN npm ci --only=production
RUN rm /app/.npmrc
FROM gcr.io/distroless/nodejs:10
COPY --from=build-env /app /app
WORKDIR /app
EXPOSE 3000
HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f -s http://localhost:3000/health || exit 1
CMD ["app.js"]