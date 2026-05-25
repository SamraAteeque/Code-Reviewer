# AI Code Reviewer - Backend

The Node.js and Express backend for the AI Code Reviewer application. It serves as the API gateway between the frontend application and the Google Generative AI (Gemini) API.

## Features

- **AI Integration:** Utilizes `@google/generative-ai` to analyze code snippets and generate detailed, constructive feedback.
- **CORS Configuration:** Configured to securely accept requests from the deployed frontend.
- **Environment Variables:** Securely manages the Gemini API key using `dotenv`.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A Google Gemini API Key

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Create a `.env` file in the root of the `BackEnd` directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3000
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Tech Stack
- Node.js
- Express
- Google Generative AI API
- CORS
- Dotenv
