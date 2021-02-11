FROM node:14-buster
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
EXPOSE 4000
EXPOSE 5000
EXPOSE 6060
EXPOSE 44371
CMD ["yarn", "start"]
