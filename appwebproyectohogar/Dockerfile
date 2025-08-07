FROM openjdk:21-jdk-slim
ARG JAR_FILE=target/appwebproyectohogar.jar
COPY ${JAR_FILE} appwebproyectohogar.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "appwebproyectohogar.jar" ]