FROM node:12.2.0-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install react-scripts -g --silent
RUN npm install
RUN npm run build


FROM node:12.2.0-alpine
RUN npm install serve -g serve
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build .
CMD ["serve", "-p", "80", "-s", "."]doc


# docker build -t interventure-frontend:1.0.0 .
# docker run -p 3000:80 -d interventure-frontend:1.0.0