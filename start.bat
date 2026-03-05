@echo off
SETLOCAL

:: =====================
:: Check Node installation
:: =====================
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install it first: https://nodejs.org/
    pause
    exit /b
)

npm -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo npm is not installed. Please install Node.js (npm comes with it).
    pause
    exit /b
)

:: =====================
:: Install dependencies
:: =====================
echo Installing all dependencies...
npm install --workspaces

IF %ERRORLEVEL% NEQ 0 (
    echo Failed to install dependencies.
    pause
    exit /b
)

:: =====================
:: Start backend + frontend
:: =====================
echo Starting backend and frontend...
npx concurrently "npm run start --workspace backend" "npm run start --workspace frontend"

ENDLOCAL
