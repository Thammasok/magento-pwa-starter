FROM node:14.17.5-alpine as build

COPY ["package*.json", "/app/"]

WORKDIR /app

# global environment setup : yarn + dependencies needed to support node-gyp
RUN apk --no-cache --virtual add \
    python \
    make \
    g++ \
    yarn

# install dependencies with yarn
RUN yarn install

# copy over the rest of the package files
COPY . /app

# copy configuration env file from host file system to venia-concept .env for build
COPY .env ./app/.env

ENV NODE_ENV=production

# build the app
RUN yarn build

# command to run application
CMD [ "yarn", "start" ]
