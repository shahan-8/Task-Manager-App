# Task Manager App

A full-stack task management application built with React and a Node.js/Express backend. It demonstrates how a frontend communicates with a REST API to create, view, update, complete, and delete tasks.

## Features

- Create new tasks
- View the task list
- Edit task descriptions
- Mark tasks as complete or incomplete
- Delete tasks
- REST API integration between frontend and backend
- Responsive React interface

## Tech Stack

**Frontend**
- React
- JavaScript
- Axios
- Lucide React
- CSS
- Vite

**Backend**
- Node.js
- Express.js
- REST API
- UUID for task identifiers

## Project Structure

```text
Task-Manager-App/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.js
│   └── package.json
├── postman/          # API testing resources
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/shahan-8/Task-Manager-App.git
cd Task-Manager-App
```

### 2. Install and Start the Backend

Open a terminal:

```bash
cd backend
npm install
npm run dev
```

Keep this terminal running. Check the backend terminal for the port it uses.

### 3. Install and Start the Frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite.

## API Configuration

The frontend must send requests to the URL where the Express backend is running. Check the API base URL in the frontend source and update it if your backend uses a different host or port.

## API Operations

The backend exposes task CRUD operations. The frontend uses Axios to communicate with the API. Refer to the backend route definitions for the exact endpoint paths and request body shape.

## What I Practiced

- Building reusable React components
- Managing UI state with React Hooks
- Making asynchronous HTTP requests with Axios
- Creating REST endpoints with Express
- Connecting frontend and backend applications
- Implementing CRUD workflows
- Testing API requests during development



## Future Improvements

- Persistent database storage
- User authentication
- Stronger validation and error handling
- Production deployment

## Author

Built by [Shahan](https://github.com/shahan-8).
