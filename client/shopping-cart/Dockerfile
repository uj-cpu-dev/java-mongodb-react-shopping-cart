# Use a Node.js base image with a specific version
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight Node.js image to serve the application
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/build ./build

# Install serve to run the production build
RUN npm install -g serve

# Set the command to run the production build using serve
CMD ["serve", "-s", "build", "-l", "3000"]
