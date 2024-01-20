FROM --platform=arm64 node:10-alpine as builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . ./
USER node
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder ./home/node/app/build /usr/share/nginx/html