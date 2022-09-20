FROM node:14

WORKDIR /testapp
COPY package.json .
RUN yarn install
COPY . .
CMD yarn start