# Stage 1: Build stage
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app

# Copy the Maven project files
COPY pom.xml .
COPY src ./src

# Build the application using Maven
RUN mvn clean install

# Stage 2: Final stage
FROM openjdk:17-slim

WORKDIR /app

# Copy the JAR file built in the previous stage
COPY --from=build /app/target/shopping-cart-0.0.1-SNAPSHOT.jar .

# Command to run your application
CMD ["java", "-jar", "shopping-cart-0.0.1-SNAPSHOT.jar"]
