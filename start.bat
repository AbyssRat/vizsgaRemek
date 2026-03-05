@echo off
:: Start Backend
start "Backend" cmd /k "cd /d backend && npm install && npm run dev"

:: Give backend a few seconds to start (optional)
timeout /t 3 /nobreak >nul

:: Start Frontend
start "Frontend" cmd /k "cd /d frontend\front_end && npm install && npm run dev"

:: Open frontend in default browser
start "" "http://localhost:5173"

echo Backend and Frontend started.
pause
