FROM node:25 AS builder

WORKDIR /build

COPY package.json ./
RUN npm install

COPY . .

FROM node:25-slim

WORKDIR /app

COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/app.js ./app.js

EXPOSE 3000
CMD ["node", "app.js"]


