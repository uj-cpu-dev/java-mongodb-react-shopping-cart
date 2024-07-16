# Stage 1: Build the Java application
FROM maven:3.8.5-eclipse-temurin-17 as builder

# Set the working directory
WORKDIR /app

# Copy the Maven project file and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and build the application
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Prepare the production environment
FROM eclipse-temurin:17-jre-focal

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/target/*.jar /app/app.jar

# Expose the application port
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java","-jar","/app/app.jar"]
