# SaaS Admin Dashboard - API Documentation

## Overview

This document provides comprehensive documentation for the SaaS Admin Dashboard backend API built with FastAPI. The API serves as the backend for a client management system with user authentication and commission tracking capabilities.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Database Models](#database-models)
3. [Authentication](#authentication)
4. [API Endpoints](#api-endpoints)
5. [Data Schemas](#data-schemas)
6. [Environment Configuration](#environment-configuration)
7. [Docker Setup](#docker-setup)
8. [Error Handling](#error-handling)

## Architecture Overview

### Tech Stack
- **Framework**: FastAPI
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy
- **Authentication**: JWT (JSON Web Tokens) with python-jose
- **Password Hashing**: SHA256 (for demo purposes)
- **Validation**: Pydantic
- **Deployment**: Docker & Docker Compose

### Project Structure
```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application entry point
│   ├── db.py               # Database configuration
│   ├── models.py           # SQLAlchemy models
│   ├── schemas.py          # Pydantic schemas
│   └── routers/
│       ├── __init__.py
│       ├── auth.py         # Authentication endpoints
│       └── clients.py     # Client management endpoints
├── Dockerfile
├── requirements.txt
└── README.md
```

## Database Models

### User Model
Represents system users with authentication capabilities.

```python
class User(Base):
    __tablename__ = "users"
    id: Integer (Primary Key)
    email: String (Unique, Indexed)
    name: String
    hashed_password: String
    is_active: Boolean (Default: True)
    created_at: DateTime (Auto-generated)
```

### Client Model
Represents clients managed by the system.

```python
class Client(Base):
    __tablename__ = "clients"
    id: Integer (Primary Key)
    name: String
    email: String (Unique, Indexed)
    phone: String (Optional)
    created_at: DateTime (Auto-generated)
```

### Commission Model
Tracks commission data associated with clients.

```python
class Commission(Base):
    __tablename__ = "commissions"
    id: Integer (Primary Key)
    client_id: Integer (Foreign Key to clients.id)
    amount: Numeric(12, 2)
    source: String (Optional)
    created_at: DateTime (Auto-generated)
```

## Authentication

The API uses JWT-based authentication with Bearer tokens.

### Security Configuration
- **Algorithm**: HS256
- **Token Expiration**: 30 minutes (configurable)
- **Password Hashing**: SHA256 (note: for production, use bcrypt)

### Authentication Flow
1. User registers with email/password
2. User signs in to receive JWT access token
3. Include token in Authorization header for protected endpoints
4. Token validates user identity and authorization

## API Endpoints

### Base URL
- **Local Development**: `http://localhost:8000`
- **Docker**: `http://backend:8000`

### Health Check

#### GET /healthz
Check API health status.

**Response:**
```json
{
  "status": "ok"
}
```

### Authentication Endpoints

#### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "is_active": true,
  "created_at": "2025-11-12T10:30:00Z"
}
```

**Errors:**
- `400`: Email already registered

#### POST /auth/token
Login using OAuth2 password flow (form data).

**Request Body (form-data):**
```
username: user@example.com
password: securepassword123
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "is_active": true,
    "created_at": "2025-11-12T10:30:00Z"
  }
}
```

**Errors:**
- `401`: Incorrect email or password

#### POST /auth/signin
Login using JSON data.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response:** Same as `/auth/token`

#### GET /auth/me
Get current authenticated user information.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Response:**
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "is_active": true,
  "created_at": "2025-11-12T10:30:00Z"
}
```

**Errors:**
- `401`: Invalid or expired token

### Client Management Endpoints

All client endpoints require authentication.

#### POST /clients/
Create a new client.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Request Body:**
```json
{
  "name": "Acme Corporation",
  "email": "contact@acme.com",
  "phone": "+1-555-0123"
}
```

**Response (201):**
```json
{
  "id": 1,
  "name": "Acme Corporation",
  "email": "contact@acme.com",
  "phone": "+1-555-0123",
  "created_at": "2025-11-12T10:30:00Z"
}
```

**Errors:**
- `400`: Client with this email already exists
- `401`: Authentication required

#### GET /clients/
List all clients with pagination.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Query Parameters:**
- `skip` (optional): Number of records to skip (default: 0)
- `limit` (optional): Maximum records to return (default: 100)

**Example:** `GET /clients/?skip=0&limit=50`

**Response:**
```json
[
  {
    "id": 1,
    "name": "Acme Corporation",
    "email": "contact@acme.com",
    "phone": "+1-555-0123",
    "created_at": "2025-11-12T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Tech Solutions Inc",
    "email": "info@techsolutions.com",
    "phone": "+1-555-0456",
    "created_at": "2025-11-12T11:00:00Z"
  }
]
```

**Errors:**
- `401`: Authentication required

#### GET /clients/{client_id}
Get a specific client by ID.

**Headers:**
```
Authorization: Bearer <access_token>
```

**Response:**
```json
{
  "id": 1,
  "name": "Acme Corporation",
  "email": "contact@acme.com",
  "phone": "+1-555-0123",
  "created_at": "2025-11-12T10:30:00Z"
}
```

**Errors:**
- `404`: Client not found
- `401`: Authentication required

## Data Schemas

### Input Schemas (Request Bodies)

#### UserCreate
```json
{
  "email": "string (email format, required)",
  "name": "string (required)",
  "password": "string (required)"
}
```

#### UserSignIn
```json
{
  "email": "string (email format, required)",
  "password": "string (required)"
}
```

#### ClientCreate
```json
{
  "name": "string (required)",
  "email": "string (email format, required)",
  "phone": "string (optional)"
}
```

#### CommissionCreate
```json
{
  "client_id": "integer (required)",
  "amount": "decimal (required)",
  "source": "string (optional)"
}
```

### Output Schemas (Response Bodies)

#### UserRead
```json
{
  "id": "integer",
  "email": "string",
  "name": "string",
  "is_active": "boolean",
  "created_at": "datetime (ISO format)"
}
```

#### Token
```json
{
  "access_token": "string",
  "token_type": "string",
  "user": "UserRead object"
}
```

#### ClientRead
```json
{
  "id": "integer",
  "name": "string",
  "email": "string",
  "phone": "string or null",
  "created_at": "datetime (ISO format)"
}
```

#### CommissionRead
```json
{
  "id": "integer",
  "client_id": "integer",
  "amount": "decimal",
  "source": "string or null",
  "created_at": "datetime (ISO format)"
}
```

## Environment Configuration

### Required Environment Variables

```bash
# Database Configuration
DATABASE_URL=postgresql://saasuser:saaspass@db:5432/saasdb

# JWT Configuration
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# PostgreSQL Configuration (for Docker)
POSTGRES_USER=saasuser
POSTGRES_PASSWORD=saaspass
POSTGRES_DB=saasdb
```

### Default Values
If environment variables are not set, the following defaults are used:
- `SECRET_KEY`: "your-secret-key-here"
- `ALGORITHM`: "HS256"
- `ACCESS_TOKEN_EXPIRE_MINUTES`: 30
- `DATABASE_URL`: "postgresql://saasuser:saaspass@db:5432/saasdb"

## Docker Setup

### Services

#### Database (PostgreSQL)
- **Image**: postgres:15
- **Port**: 5432
- **Volumes**: Persistent data storage
- **Health Check**: Monitors database availability

#### Backend (FastAPI)
- **Build**: Custom Dockerfile in `/backend`
- **Port**: 8000
- **Dependencies**: PostgreSQL database
- **Health Check**: `/healthz` endpoint
- **Volumes**: Hot reload during development

#### Frontend (React/Vite)
- **Port**: 7000
- **Dependencies**: Backend service
- **Environment**: Development with hot reload

### Starting the Application

```bash
# Build and start all services
docker compose up --build

# Start in detached mode
docker compose up -d

# Stop all services
docker compose down

# Remove volumes and orphaned containers
docker compose down --volumes --remove-orphans
```

### Development Workflow

1. **Initial Setup**:
   ```bash
   docker compose build
   docker compose up
   ```

2. **Database Migrations**: Handled automatically on startup via SQLAlchemy's `create_all()`

3. **Hot Reload**: Backend code changes are reflected automatically due to volume mounting

## Error Handling

### Standard HTTP Status Codes

- **200**: Success
- **201**: Created
- **400**: Bad Request (validation errors, duplicate resources)
- **401**: Unauthorized (authentication required or failed)
- **404**: Not Found
- **422**: Unprocessable Entity (Pydantic validation errors)
- **500**: Internal Server Error

### Error Response Format

```json
{
  "detail": "Error message description"
}
```

### Common Error Scenarios

1. **Authentication Errors**:
   - Missing or invalid JWT token
   - Expired token
   - Incorrect credentials

2. **Validation Errors**:
   - Invalid email format
   - Missing required fields
   - Type mismatches

3. **Business Logic Errors**:
   - Duplicate email registration
   - Client not found
   - Resource conflicts

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (React development)
- `http://localhost:7000` (Vite development)
- `http://frontend:7000` (Docker frontend service)

All methods and headers are allowed for these origins.

## API Testing

### Using curl

**Register User:**
```bash
curl -X POST "http://localhost:8000/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","password":"testpass123"}'
```

**Login:**
```bash
curl -X POST "http://localhost:8000/auth/signin" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"testpass123"}'
```

**Create Client:**
```bash
curl -X POST "http://localhost:8000/clients/" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"name":"Test Client","email":"client@test.com","phone":"+1234567890"}'
```

### Interactive API Documentation

FastAPI automatically generates interactive API documentation:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## Security Considerations

### Current Implementation
- JWT tokens for authentication
- SHA256 password hashing (demo purposes)
- CORS restrictions
- SQL injection protection via SQLAlchemy ORM

### Production Recommendations
1. Replace SHA256 with bcrypt for password hashing
2. Use environment variables for all secrets
3. Implement rate limiting
4. Add request validation and sanitization
5. Use HTTPS in production
6. Implement proper logging and monitoring
7. Add database migrations with Alembic
8. Implement proper error logging

## Future Enhancements

### Planned Features
1. Commission tracking endpoints
2. User role-based access control
3. Client activity logging
4. Revenue analysis endpoints
5. Data export capabilities
6. Email notifications
7. API versioning
8. Comprehensive test suite

### Database Improvements
1. Alembic migrations
2. Database connection pooling
3. Read replicas for scaling
4. Data archiving strategies

This documentation provides a complete overview of the SaaS Admin Dashboard backend API structure and usage patterns.