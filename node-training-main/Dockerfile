FROM node:20-bookworm-slim

WORKDIR /app

COPY ["./package.json", "./package-lock.json", "./"] ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD node dist/index.js