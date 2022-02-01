FROM node:16.13-alpine
WORKDIR /code
COPY . /code
RUN yarn install
RUN yarn run build
EXPOSE $PORT

