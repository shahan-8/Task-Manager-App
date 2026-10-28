# Todo App — Full-Stack CRUD Application

A full-stack Todo application built with React.js, Node.js, Express.js, and Axios. This project demonstrates how a React frontend communicates with a REST API to manage todo tasks.

## Features

- **Create Todos** — Add new tasks.
- **Read Todos** — Display the list of tasks.
- **Update Todos** — Edit task descriptions.
- **Complete Tasks** — Mark tasks as completed or incomplete.
- **Delete Todos** — Remove tasks.
- **REST API** — Handle todo operations using Express.js.
- **Responsive UI** — A user interface designed for everyday task management.

## Tech Stack

**Frontend**
- React.js
- JavaScript
- Axios
- Lucide React
- CSS

**Backend**
- Node.js
- Express.js
- REST API

## Project Structure

```text
todo-app/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd todo-app
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your repository's actual URL.

### 2. Start the Backend

```bash
cd backend
npm install
npm run dev
```

Keep the backend terminal running.

### 3. Start the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

### Configuration

Make sure the frontend API URL points to your running backend. Update the API URL and backend port to match your local configuration.

If environment variables are required, configure them locally using an appropriate `.env` file. Never commit real secrets to GitHub.

## What I Learned

- Building reusable React components.
- Managing state with React Hooks.
- Handling asynchronous API requests with Axios.
- Creating REST API endpoints with Express.js.
- Connecting a frontend application to a backend server.
- Implementing CRUD operations.

## Future Improvements

- MongoDB database integration.
- User authentication.
- Improved form validation and error handling.
- Deployment of the frontend and backend.

## Author

Developed as a full-stack JavaScript learning project.

If you find this project useful, consider giving the repository a star!
