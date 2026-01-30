# Use lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build NestJS app
RUN npm run build

# Expose internal port
EXPOSE 3000

# Wait for Postgres and then start NestJS
CMD sh -c "npx wait-port postgres:5432 && node dist/main.js"
