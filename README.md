# FirstStep

A simple Node.js backend application demonstrating basic Express.js setup and deployment concepts.

## Description

This project is a beginner-friendly example of a backend application using Node.js and Express. It includes basic routes and shows how to set up environment variables with dotenv. The goal is to illustrate the fundamentals of backend development and deployment.

## Features

- Basic Express server setup
- Environment variable configuration
- Simple API endpoints
- Ready for deployment

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd firststep
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   PORT=5000
   ```

## Usage

Start the server:
```bash
npm start
```

The server will run on the port specified in your `.env` file (default: 5000).

## API Endpoints

- `GET /` - Returns "Hello World!"
- `GET /ME` - Returns "I am Yashraj"
- `GET /about` - Returns an HTML page with information about the developer

## Deployment

This application can be deployed to various platforms like Heroku, Vercel, or any Node.js hosting service. Make sure to set the `PORT` environment variable in your deployment environment.

## Technologies Used

- Node.js
- Express.js
- dotenv

## Author

Yashraj

## License

ISC