@echo off
echo Starting AI Farmer Advisory System...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if MongoDB is running
echo Checking MongoDB connection...
mongod --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Warning: MongoDB not found in PATH
    echo Please make sure MongoDB is installed and running
    echo You can download MongoDB from https://www.mongodb.com/try/download/community
    echo.
)

REM Install dependencies
echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

REM Start the server
echo.
echo Starting server...
echo The application will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
node server.js

pause
