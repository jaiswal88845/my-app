FROM openjdk:17
EXPOSE 8080
ADD my-app-web/target/my-app.jar my-app.jar
ENTRYPOINT ["java","-jar","/my-app.jar"]