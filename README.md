# SaaS Admin Dashboard

A full-stack SaaS Admin Dashboard application with React frontend and FastAPI backend, featuring authentication, client management, and real-time backend connection monitoring.

## Features

✅ **Authentication System**
- User registration and login
- JWT token-based authentication
- Protected routes and automatic token refresh
- Session management with localStorage

✅ **Frontend Features**
- React with TypeScript
- Modern UI with Tailwind CSS
- Real-time backend connection status indicator
- Client management interface
- Responsive dashboard design
- Protected routing system

✅ **Backend API**
- FastAPI with Python 3.11
- PostgreSQL database
- RESTful API endpoints
- JWT authentication middleware
- SQLAlchemy ORM
- CORS enabled for frontend integration

✅ **Full Integration**
- Dockerized full-stack application
- Frontend-backend API integration
- Database persistence
- Health check endpoints
- Environment-based configuration

## Architecture

```
├── Frontend (React + TypeScript)
│   ├── Authentication context
│   ├── API service layer
│   ├── Protected routing
│   └── Backend status monitoring
├── Backend (FastAPI + Python)
│   ├── Authentication (JWT)
│   ├── Client management API
│   ├── Database models
│   └── Health monitoring
└── Database (PostgreSQL)
    ├── User management
    └── Client data storage
```

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd SaaSAdminDashboard-main
```

### 2. Environment Setup
Copy the `.env` file (already provided):
```bash
# Database Configuration
POSTGRES_USER=saasuser
POSTGRES_PASSWORD=saaspass
POSTGRES_DB=saasdb
DATABASE_URL=postgresql://saasuser:saaspass@db:5432/saasdb

# JWT Configuration
SECRET_KEY=your-super-secret-jwt-key-change-this-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
```

### 3. Build and Start Services
```bash
# Build all services
docker compose build

# Start all services
docker compose up -d
```

### 4. Create Test User
```bash
docker compose exec backend python -c "
from app.db import SessionLocal
from app.models import User
from app.routers.auth import get_password_hash

db = SessionLocal()
try:
    user = User(
        email='admin@example.com',
        name='Admin User',
        hashed_password=get_password_hash('admin123')
    )
    db.add(user)
    db.commit()
    print('Test user created: admin@example.com / admin123')
finally:
    db.close()
"
```

### 5. Access the Application

- **Frontend**: http://localhost:7000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Database**: localhost:5432

## Login Credentials

Use these credentials to sign in:
- **Email**: `admin@example.com`
- **Password**: `admin123`

## API Endpoints

### Authentication
- `POST /auth/signin` - User sign in
- `POST /auth/register` - User registration
- `GET /auth/me` - Get current user info

### Client Management
- `GET /clients/` - List all clients
- `POST /clients/` - Create new client
- `GET /clients/{id}` - Get specific client

### Health Check
- `GET /healthz` - Backend health status

## Development

### Frontend Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Development
```bash
# Install Python dependencies
cd backend
pip install -r requirements.txt

# Run development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Database Management
```bash
# Access database
docker compose exec db psql -U saasuser -d saasdb

# View logs
docker compose logs backend
docker compose logs frontend
docker compose logs db
```

## Project Structure

```
├── src/                        # Frontend source code
│   ├── components/             # React components
│   │   ├── Layout.tsx         # Main layout with sidebar/header
│   │   ├── Header.tsx         # Header with user info & status
│   │   ├── Sidebar.tsx        # Navigation sidebar
│   │   ├── BackendStatus.tsx  # Connection status indicator
│   │   └── ProtectedRoute.tsx # Auth guard component
│   ├── contexts/              # React contexts
│   │   └── AuthContext.tsx    # Authentication state management
│   ├── services/              # API integration
│   │   └── api.ts            # Axios-based API client
│   ├── screens/               # Page components
│   │   ├── SignIn/           # Authentication pages
│   │   ├── Dashboard/        # Main dashboard
│   │   └── ClientDetails/    # Client management
│   └── index.tsx             # App entry point
├── backend/                   # Backend source code
│   └── app/                  # FastAPI application
│       ├── main.py           # FastAPI app initialization
│       ├── models.py         # Database models
│       ├── schemas.py        # Pydantic schemas
│       ├── db.py            # Database connection
│       └── routers/         # API route handlers
│           ├── auth.py      # Authentication endpoints
│           └── clients.py   # Client management endpoints
├── docker-compose.yml         # Docker orchestration
├── Dockerfile                 # Backend container definition
├── docker/frontend.Dockerfile # Frontend container definition
└── .env                      # Environment configuration
```

## Features Demo

### 1. Backend Connection Status
- Green dot: Backend connected
- Red dot: Backend disconnected  
- Yellow dot: Checking connection
- Auto-refresh every 30 seconds
- Visible in header and sign-in page

### 2. Authentication Flow
1. Navigate to http://localhost:7000
2. Use credentials: `admin@example.com` / `admin123`
3. Successful login redirects to dashboard
4. JWT token stored in localStorage
5. Protected routes require authentication
6. Logout clears session and redirects to sign-in

### 3. Client Management
- View list of all clients
- Add new clients with name, email, phone
- Real-time updates after client creation
- API integration with backend validation

## Troubleshooting

### Services Not Starting
```bash
# Check service status
docker compose ps

# View service logs
docker compose logs [service_name]

# Restart services
docker compose restart
```

### Database Connection Issues
```bash
# Ensure database is healthy
docker compose exec db pg_isready -U saasuser

# Reset database
docker compose down -v
docker compose up -d
```

### Frontend Build Issues
```bash
# Clean and rebuild
docker compose down
docker compose build frontend --no-cache
docker compose up -d
```

### API Authentication Issues
```bash
# Verify backend health
curl http://localhost:8000/healthz

# Test authentication
curl -X POST http://localhost:8000/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}'
```

## Production Considerations

1. **Security**
   - Change `SECRET_KEY` in `.env`
   - Use proper password hashing (bcrypt)
   - Enable HTTPS
   - Implement rate limiting

2. **Database**
   - Use managed PostgreSQL service
   - Implement database migrations
   - Add connection pooling
   - Regular backups

3. **Deployment**
   - Use production Docker images
   - Implement health checks
   - Set up monitoring and logging
   - Use environment-specific configurations

4. **Performance**
   - Enable Redis for caching
   - Implement API pagination
   - Optimize database queries
   - Add CDN for static assets

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review Docker logs for debugging

---

**Full-Stack Integration Complete** ✅
- Frontend: React + TypeScript + Tailwind CSS
- Backend: FastAPI + Python + PostgreSQL
- Authentication: JWT-based with session management
- Real-time: Backend connection monitoring
- Docker: Full containerization with health checks