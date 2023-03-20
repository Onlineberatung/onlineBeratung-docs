FROM node:18.0.0-alpine

EXPOSE 3000

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app

RUN yarn build

ENTRYPOINT ["yarn", "run", "serve"]