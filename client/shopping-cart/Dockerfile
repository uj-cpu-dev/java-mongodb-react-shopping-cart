# Stage 1: Build the React application
FROM node:16-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the built files using Nginx
FROM nginx:alpine
# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration (optional, adjust as needed)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx listens on
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
