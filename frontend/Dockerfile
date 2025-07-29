# Stage 1: Build React App
FROM node:18 AS builder
WORKDIR /app

# Copy package files first (for cache)
COPY package*.json ./

# Clean and install dependencies properly
RUN rm -rf node_modules && npm install --legacy-peer-deps

# Copy rest of app
COPY . .

# Build static files
RUN CI=false npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

