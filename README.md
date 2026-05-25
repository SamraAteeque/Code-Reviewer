# AI Code Reviewer

A full-stack AI-powered code analysis tool that helps developers improve their code quality by providing instant, AI-generated reviews and feedback. The application consists of a React frontend and a Node.js backend utilizing the Google Gemini API.

## Project Structure

This repository is divided into two main parts:

- **[Frontend](./Frontend):** A React + Vite application that provides a syntax-highlighted code editor and displays the AI's markdown-formatted feedback.
- **[BackEnd](./BackEnd):** An Express.js server that securely handles requests from the frontend and communicates with the Google Generative AI API to generate code reviews.

## Features

- **Real-time Code Editing:** Write or paste code with syntax highlighting using PrismJS.
- **Instant AI Feedback:** Get comprehensive code reviews, including bug detection, optimization suggestions, and best practices.
- **Markdown Support:** Feedback is beautifully rendered using React Markdown.
- **Secure API Handling:** Backend server securely manages the AI API keys.

## Setup Instructions

To run this project locally, you will need to start both the frontend and backend servers.

### 1. Backend Setup
Navigate to the `BackEnd` directory, install dependencies, and configure your Gemini API key.
```bash
cd BackEnd
npm install
# Create a .env file with your GEMINI_API_KEY
npm start
```

### 2. Frontend Setup
In a new terminal, navigate to the `Frontend` directory, install dependencies, and start the development server.
```bash
cd Frontend
npm install
npm run dev
```

## Technologies Used
- **Frontend:** React, Vite, Axios, PrismJS, React Markdown
- **Backend:** Node.js, Express, `@google/generative-ai`, CORS, Dotenv
