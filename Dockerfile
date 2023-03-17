FROM node:18.0.0-alpine

WORKDIR /app
EXPOSE 3000
COPY package.json /app
RUN yarn
COPY . /app

RUN yarn build

ENTRYPOINT ["yarn", "run", "serve"]