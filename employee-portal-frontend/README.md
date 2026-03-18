# Employee Portal Frontend

## Overview

This is the frontend for the Employee Portal Application.

It is built with React and Vite and provides the user interface for the employee CRUD flows:

- list employees by department
- view employee details
- create employees
- edit employees
- delete employees

## Requirements

Before installing this frontend locally, make sure you have the following:

- Node.js `24.13.1` recommended
- npm `11.8.0` recommended

If you prefer a safer compatibility target, using a recent Node.js LTS version is also reasonable, but this project was validated locally with the versions above.

## Important Libraries Used

These are the main frontend libraries worth calling out:

- `axios`
  Used for API communication with the Spring Boot backend.
- `react-router-dom`
  Used for client-side routing between list, details, create, and edit pages.
- `primereact`
  Used as the component library for forms, cards, data tables, dialogs, buttons, and UI structure.
- `primeicons`
  Used for icon support within PrimeReact components.

## Installation

1. Clone or pull the repository.
2. Open a terminal in the frontend folder:

```bash
cd employee-portal-frontend
```

3. Install dependencies:

```bash
npm install
```

## Running the Frontend

To start the development server:

```bash
npm run dev
```

The frontend runs on the default Vite development server, which is typically:

```text
http://localhost:5173
```

## Backend Dependency

This frontend depends on the backend API being available locally.

The API base URL currently points to:

```text
http://localhost:8080/api/employees
```

Before testing the full app, make sure the backend project is installed and running.

For backend setup, go to:

- [`../EmployeePortalApp/README.md`](../EmployeePortalApp/README.md)
