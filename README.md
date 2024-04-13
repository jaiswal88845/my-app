## technologies used
1. spring boot latest 3.2.4
2. Java 17
3. Junit Mockito
4. Mongodb: 
5. Spring security 
   5.1 Basic 
   5.2 Password Encoding with Bcrypt
   5.3 Session Management with [spring-session-data-mongodb](https://docs.spring.io/spring-session/reference/guides/boot-mongo.html)
   
## ################# MongoDB atlas ##########################
spring.data.mongodb.uri=mongodb+srv://jlj04071990:CAPITAL_G%40123@cluster0.mqit0w1.mongodb.net/
spring.data.mongodb.database=JLJ


## ################# #Project CICD1 Flow ####################

This project demonstrates a continuous integration and continuous deployment (CI/CD) workflow for a Java application with Docker integration. The workflow builds a Java project using Maven, then builds and pushes a Docker image to Docker Hub.

## Workflow Description

The CI/CD workflow consists of the following steps:

1. **Checkout Repository**: The workflow checks out the code repository to access the source code.

2. **Set up JDK 17**: JDK 17 is set up using the `actions/setup-java` action, along with Maven caching to improve workflow execution time.

3. **Build with Maven**: The Java project is built using Maven with the `mvn clean install` command. This compiles the code, runs tests, and packages the application.

4. **Build & Push Docker Image**: The workflow uses the `mr-smithers-excellent/docker-build-push` action to build a Docker image based on the provided Dockerfile (`Dockerfile`). The image is then tagged as `latest` and pushed to Docker Hub (`docker.io`) using Docker Hub credentials stored as secrets.

## Usage

To use this CI/CD workflow in your project:

1. Copy the contents of this repository to your project's repository.

2. Create or modify the `.github/workflows/main.yml` file with the contents of the provided workflow YAML.

3. Make sure you have a Dockerfile and Maven configuration (`pom.xml`) in your repository.

4. Configure the Docker Hub credentials (`DOCKER_USERNAME` and `DOCKER_PASSWORD`) as secrets in your GitHub repository settings.

5. Trigger the workflow by pushing code changes to the `master` branch or opening pull requests targeting the `master` branch.


## API description






