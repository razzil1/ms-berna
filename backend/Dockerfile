FROM node:12.2.0-alpine

# set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]


# docker build -t interventure-backend:1.0.0 .
# docker run -p 8080:8080 -d interventure-backend:1.0.0
