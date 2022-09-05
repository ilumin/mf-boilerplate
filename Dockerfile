FROM gcr.io/rentspree-6789/rentspree-docker-base-image:node16-alpine as build-deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY .npmrc .npmrc
RUN npm install --silent --no-audit --no-fund

FROM build-deps as build
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm run build

FROM node:16-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY --from=build-deps /app/node_modules node_modules
COPY --from=build-deps /app/package*.json ./

COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

COPY kubernetes kubernetes

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
