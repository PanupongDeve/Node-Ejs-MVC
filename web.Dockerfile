# create a file named Dockerfile
FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm update -g
RUN npm install -g yarn
RUN yarn install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]