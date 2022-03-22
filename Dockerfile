FROM node:14.17.1-alpine

COPY node_modules /www/node_modules
COPY .nuxt /www/.nuxt
COPY package.json /www
COPY nuxt.config.js /www

WORKDIR /www

EXPOSE 3000

CMD ./node_modules/nuxt/bin/nuxt.js start

