FROM eclipse-temurin:17.0.8.1_1-jdk-jammy

WORKDIR /app
COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src ./src
RUN ./mvnw clean install -DskipTests

CMD ["java", "-jar", "target/seu-app.jar"]
