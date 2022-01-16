FROM node:16.13-alpine AS builder
COPY . /code
WORKDIR /code

RUN npm i
RUN rm -rf ./build
RUN npm run build

FROM caddy:latest
COPY --from=builder /code/build /usr/share/caddy
EXPOSE 3000


