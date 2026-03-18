# Employee Portal Backend

## Overview

This is the Spring Boot backend for the Employee Portal Application.

It exposes REST endpoints for employee CRUD operations and uses:

- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database
- Flyway migrations
- MapStruct

## Java and Tooling Requirements

Use the following versions locally:

- Java `17`
- Maven `3.9+` recommended

## Local Installation

1. Clone or pull the repository.
2. Open a terminal in the backend folder:

```bash
cd EmployeePortalApp
```

3. Build and install the project locally:

```bash
mvn clean install -DskipTests
```

This command will download dependencies, compile the project, and prepare it for local execution.

## Running the Backend

To start the Spring Boot application locally:

```bash
mvn spring-boot:run
```

The backend runs locally on:

```text
http://localhost:8080
```

## Local Database

This project uses an in-memory H2 database for local development.

H2 console:

```text
http://localhost:8080/h2-console
```

JDBC URL:

```text
jdbc:h2:mem:employee_db
```

Username:

```text
sa
```

Password:

```text
(leave blank)
```

## Notes

- Flyway migrations create the schema and load seed employee data automatically.
- The backend is intended to support the frontend CRUD flows required by the assessment.
- If you want to run the full application locally, start this backend first and then start the frontend.

For frontend setup, go to:

- [`../employee-portal-frontend/README.md`](../employee-portal-frontend/README.md)
