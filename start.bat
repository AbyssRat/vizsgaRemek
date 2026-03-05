@echo off
:: =======================
:: CONFIGURATION
:: =======================
set XAMPP_PATH=C:\xampp
set MYSQL_EXE=%XAMPP_PATH%\mysql\bin\mysql.exe
set DB_NAME=book_rental_app
set SCHEMA_FILE=%~dp0adatbazis\schema.sql
set SEED_FILE=%~dp0adatbazis\seed.sql

:: =======================
:: START APACHE & MYSQL
:: =======================
echo Starting Apache...
start "" "%XAMPP_PATH%\apache_start.bat"

echo Starting MySQL...
start "" "%XAMPP_PATH%\mysql_start.bat"

:: Wait a few seconds for services to initialize
echo Waiting for MySQL to be ready...
timeout /t 5 /nobreak >nul

:: Loop to check if MySQL is up
:check_mysql
"%MYSQL_EXE%" -u root -e "quit" 2>nul
if errorlevel 1 (
    echo MySQL not ready yet... waiting 2 seconds
    timeout /t 2 /nobreak >nul
    goto check_mysql
)
echo MySQL is ready!

:: =======================
:: DROP OLD DATABASE
:: =======================
echo Dropping old database if it exists...
"%MYSQL_EXE%" -u root -e "DROP DATABASE IF EXISTS %DB_NAME%;"

:: =======================
:: IMPORT SCHEMA
:: =======================
echo Importing schema...
"%MYSQL_EXE%" -u root < "%SCHEMA_FILE%"

:: =======================
:: IMPORT SEED DATA
:: =======================
echo Importing seed data...
"%MYSQL_EXE%" -u root < "%SEED_FILE%"

:: =======================
:: START BACKEND
:: =======================
start "Backend" cmd /k "cd /d backend && npm install && npm run dev"

:: Wait a few seconds
timeout /t 3 /nobreak >nul

:: =======================
:: START FRONTEND
:: =======================
start "Frontend" cmd /k "cd /d frontend\front_end && npm install && npm run dev"

:: Open frontend in default browser
start "" "http://localhost:5173"

echo All done! Backend, frontend, and database are running.
pause
