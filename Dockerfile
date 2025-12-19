# 1. Base Stage (Shared setup)
FROM node:18-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install

# 2. Development Stage (Targeted by docker-compose)
# --- This is the stage 'dev' that was missing ---
FROM base as dev
EXPOSE 3000
CMD ["npm", "run", "dev"]

# 3. Builder Stage (Compiles TS for production)
FROM base as builder
COPY . .
RUN npm run build

# 4. Production Stage (Final image for deployment)
FROM node:18-alpine as production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]