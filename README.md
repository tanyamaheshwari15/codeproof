# CodeProof

CodeProof is an AI-powered coding practice platform designed to go beyond simply checking whether code produces the expected output.

The platform combines a coding workspace, problem solving, code execution, submissions, progress tracking, and an AI layer that can analyze a user's submitted code and evaluate whether they understand the solution they wrote.

## Features

- User authentication
- Protected application routes
- Coding problem browsing and filtering
- Problem details with examples and constraints
- Monaco-based coding workspace
- Java, C++, and Python language selection
- Code execution through Judge0
- Test-case based evaluation
- Code submission and submission history
- Submission details
- Progress tracking
- Account and settings pages
- Planned AI-powered code analysis
- Planned AI-generated questions based on the user's actual code
- Planned code-understanding evaluation

## Why CodeProof?

Traditional coding platforms mainly answer:

> Does this code produce the expected output?

CodeProof is intended to add another layer:

> Does the developer understand the code they submitted?

The planned AI workflow analyzes the submitted solution and can ask questions about its logic, variables, complexity, edge cases, and possible modifications.

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Tailwind CSS
- Monaco Editor
- Axios

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Cookie-based authentication

### Code Execution

- Judge0
- Docker
- WSL2 for local development

### Planned AI Layer

- LLM/API integration for code analysis and code-understanding questions

## Application Flow

```text
User
  ↓
React Frontend
  ↓
Monaco Code Editor
  ↓
Express Backend
  ↓
Judge0
  ↓
Docker Sandbox
  ↓
Execution Result
  ↓
Test Case Evaluation
  ↓
Submission
  ↓
AI Code Analysis
  ↓
Code Understanding Questions
```

## Project Structure

```text
codeproof/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── ...
│
├── frontend/
│   ├── src/
│   └── ...
│
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

## Local Development

### Prerequisites

Install:

- Node.js
- npm
- MongoDB
- Docker Desktop
- Git

For local code execution, CodeProof uses Judge0 running through Docker.

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd codeproof
```

### 2. Configure environment variables

Create a `.env` file in the backend directory using `.env.example` as a reference.

Do not commit your real `.env` file.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
JUDGE0_URL=http://localhost:2358
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 5. Start Judge0 locally

Judge0 must be running before using code execution.

The local development setup uses Docker and exposes the Judge0 API on:

```text
http://localhost:2358
```

### 6. Start the backend

From the backend directory:

```bash
npm run dev
```

### 7. Start the frontend

From the frontend directory:

```bash
npm run dev
```

Open the frontend URL shown by Vite.

## Environment Variables

The backend uses environment variables for configuration.

See `.env.example` for the required variable names.

| Variable | Purpose |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Authentication/session secret |
| `JUDGE0_URL` | URL of the Judge0 API |

Never commit real passwords, API keys, JWT secrets, or database credentials.

## Code Execution Architecture

CodeProof does not directly execute arbitrary user code inside the Node.js backend.

Instead:

```text
CodeProof Backend
      ↓
Judge0 API
      ↓
Sandboxed Execution
      ↓
stdout / stderr / compile output
      ↓
CodeProof
```

The backend sends the user's source code, selected language, and test-case input to Judge0.

The returned execution result is then compared with the expected output for the problem.

This separation is important because executing arbitrary submitted code directly inside the application server would create a significant security risk.

## Run vs Submit

The intended distinction is:

### Run

Used while solving a problem.

```text
Code
 ↓
Judge0
 ↓
Execute against test case
 ↓
Show result
```

### Submit

Used to evaluate and save a solution.

```text
Code
 ↓
Judge0
 ↓
Execute test cases
 ↓
Determine status
 ↓
Save Submission
 ↓
Show submission result
```

Possible execution outcomes include:

- Accepted
- Wrong Answer
- Compilation Error
- Runtime Error
- Time Limit Exceeded

## AI Code Understanding

The AI layer is intended to work after a submission.

A planned flow is:

```text
Problem
   ↓
User Solution
   ↓
Submission
   ↓
AI Analysis
   ↓
Questions about the actual code
   ↓
User Answers
   ↓
Understanding Evaluation
```

The AI analysis can focus on areas such as:

- Approach
- Time complexity
- Space complexity
- Important variables
- Control flow
- Edge cases
- Potential bugs
- Code quality
- Possible modifications

The goal is not only to determine whether the solution works, but also to help the developer understand and explain their own implementation.

## Screenshots

Screenshots will be added as the UI is finalized.

Planned screenshots include:

- Landing page
- Dashboard
- Problems page
- Problem details
- Coding workspace
- Test results
- Submissions
- AI code analysis

## Current Development Status

CodeProof is under active development.

Implemented areas currently include:

- Authentication
- Protected routes
- Dashboard UI
- Problem management
- Problem details
- Coding workspace
- Monaco Editor integration
- Language selection
- Test-case retrieval
- Submission creation and retrieval
- Submission details
- Local Judge0 execution environment

The execution pipeline is being integrated with the CodeProof backend.

AI analysis and code-understanding features are planned next.

## Future Improvements

- AI code analysis
- Code-specific interview questions
- Code-understanding evaluation
- Hidden test cases
- Better execution result UI
- Dashboard statistics
- Progress analytics
- More programming languages
- Deployment-ready Judge0 infrastructure
- Improved security and sandbox configuration
- Automated testing
- CI/CD

## License

This project is licensed under the terms in the [`LICENSE`](./LICENSE) file included in this repository.
