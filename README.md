# Employee Portal Application

Developed by Simranjeet Singh.

## Project Intent

This project was built as an Employee Portal application that serves a CRUD purpose.

The main goal is to provide a minimal but complete employee management workflow where a user can:

- list employees by department
- view employee details
- create employees
- update employee records
- delete employees

This repository contains:

- a React frontend in [`employee-portal-frontend`](./employee-portal-frontend)
- a Spring Boot backend in [`EmployeePortalApp`](./EmployeePortalApp)

## Project Requirements

Below are the requirements this project was created on.

### 1) Functional Requirements (MVP)

1. List Employees
   List all employees in the dept, sort by name.
2. Employee Details by ID
   Fetch by `employeeId`.
3. Update Employee
   Update the name or contact Number of an Employee.
4. Delete Employee
   Delete employee by ID.
5. Create Employee
   Optional but recommended for completeness.

### 2) Tech Stack to Use

- Frontend: React Native or React JS
- Backend: Spring Boot (Java 17+), Spring Web, Spring Data JPA, H2 or any DB (H2 acceptable for local)
- Build a Spring Boot REST API with CRUD endpoints backing the above features
- Platform: Either Web application or Mobile application

### 3) Ideal Candidate

- Understands HTTP/REST, JSON, and state management
- Familiar with React Native basics (components, hooks, navigation) and Spring Boot (controllers, services, repositories/JPA)

## PDF Generated With Codex

For interview review, the generated project PDF is available here:

- [EmployeePortal_Codebook.pdf](./EmployeePortal_Codebook.pdf)

This PDF separates the frontend and backend sections and includes the source files for reviewer walkthrough.

## Where to Go Next

For installation and local setup, head to the project-specific Markdown files:

- Frontend setup: [`employee-portal-frontend/README.md`](./employee-portal-frontend/README.md)
- Backend setup: [`EmployeePortalApp/README.md`](./EmployeePortalApp/README.md)
