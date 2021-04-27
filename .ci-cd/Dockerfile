FROM nginx:stable-alpine AS runner
EXPOSE 80

RUN apk add --no-cache --update curl
COPY .ci-cd/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# builder
FROM node:10.15.0-alpine AS builder
WORKDIR /app

COPY ./. ./
RUN npm install && npm run build

# back to runner
FROM runner
COPY --from=builder /app/dist/tobacco/ /usr/share/nginx/html


