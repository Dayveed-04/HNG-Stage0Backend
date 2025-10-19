

Overview
This project is a Node.js backend server built with Express and TypeScript. It includes utilities for HTTP requests (Axios) and date/time manipulation (Luxon). The application is configured for both development and production environments.

Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js (v14 or higher) - Download here
npm (comes with Node.js) or yarn
Git (for cloning the repository)
Installation
1. Clone the Repository
git clone <repository-url>
cd HNG-Stage0Backend
2. Install Dependencies
Using npm:

npm install
Or using yarn:

yarn install
Dependencies
Production Dependencies
Package	Version	Purpose
express	^5.1.0	Web framework for building the server
axios	^1.12.2	HTTP client for making API requests
luxon	^3.7.2	Library for parsing, validating, and formatting dates/times
Development Dependencies
Package	Version	Purpose
Setup Instructions
Development Setup
npm run build
This creates a dist folder with compiled JavaScript files.

Running the Application
Development Mode
Start the development server with hot-reload enabled using Nodemon:

node server.js
The server will automatically restart whenever you make changes to files in the src directory.

Production Mode
Build the project:
npm run build
Start the production server:
npm start
The server will run from the compiled dist/server.js file.



PORT=3000

