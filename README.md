# Personal Portfolio Website

This is a personal portfolio website built with Django (backend) and React (frontend).

## Project Structure

- `server/` - Django backend
- `client/` - React frontend

## Backend Setup (Django)

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create and activate virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://localhost:8000`

## Frontend Setup (React)

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

- Test endpoint: `http://localhost:8000/api/test/`

## Development

- Backend API is built with Django REST Framework
- Frontend is built with React and TypeScript
- CORS is configured to allow communication between frontend and backend 