FROM node:16.9 as build
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY --from=build ./usr/src/app/build /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80