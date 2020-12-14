FROM node:15.3.0

WORKDIR /runeql

COPY package.json yarn.lock ./
RUN yarn install --production

COPY src/ src/

EXPOSE 80

CMD ["yarn", "production"]