# Full Stack E-Commerce Application

This project demonstrates a full-stack application with a React frontend, a Java backend utilizing Spring Boot, and a MongoDB database. The application leverages Docker Compose for a streamlined development and deployment experience.

## Prerequisites:

- Docker Desktop: https://www.docker.com/products/docker-desktop/
- Docker Compose: https://docs.docker.com/compose/install/
- Node.js and npm (or yarn): https://nodejs.org/en
- Java Development Kit (JDK): https://www.oracle.com/java/technologies/downloads/
- Basic understanding of React, Java, Spring Boot, and MongoDB

## 1. Frontend (React):

The **client** directory contains the React application code. You can use your preferred method to set up the React project (e.g., create-react-app).

## 2. Backend (Java):

The **server** directory houses the Java backend application using Spring Boot. It's recommended to use a tool like Spring Initializr (https://start.spring.io/) to generate a basic Spring Boot project with dependencies for web and MongoDB.

## 3. Docker Compose:

The **docker-compose.yml** file defines the service configuration for both the frontend and backend applications, as well as the MongoDB database:

## Explanation:

### Services:
**client**: Builds the React application image using the Dockerfile in the client directory. Exposes port 3000 and mounts the local frontend directory as a volume for development convenience.

**server**: Builds the Spring Boot application image using the Dockerfile in the backend directory. Exposes port 8080, sets the SPRING_DATA_MONGODB_URI environment variable for connecting to MongoDB, and depends on the mongo service to ensure the database is ready.

**mongo**: Uses the official mongo:latest image to run a MongoDB instance. Exposes port 27017 and optionally defines a volume (mongo-data) to persist data.

### Volumes:
The client service mounts the local client directory as a volume, allowing for code changes to reflect within the container without rebuilding the image.
The mongo-data volume (uncomment in docker-compose.yml if desired) persists MongoDB data between container restarts.

## 4. Running the Application:

Open a terminal in the project directory.
Run ``` docker-compose up -d ``` to build and start all services in detached mode.
The frontend application should be accessible at http://localhost:3000 in your browser.
The backend API will be available at http://localhost:8080 (endpoints specific to your Spring Boot application).
