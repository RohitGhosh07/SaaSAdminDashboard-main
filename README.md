# SaaS Admin Dashboard

A full-stack SaaS admin dashboard for managing clients, monitoring revenue, and tracking commissions. The repository contains a modern frontend (React + Vite + TypeScript + Tailwind) and a Python backend (FastAPI-style layout with Alembic migrations).

## Key Features
- Overview dashboard with key performance metrics
- Client management and detailed client profiles
- Revenue analysis and trend charts
- Client activity logs and transaction history
- Broking and mutual commission tracking
- Layout and theme customization

## Tech Stack
- Frontend: `React`, `TypeScript`, `Vite`, `Tailwind CSS`
- Backend: Python (FastAPI-style structure under `app/`), `Alembic` for migrations
- Bundler / tooling: `Vite`, `npm`

## Prerequisites
- Node.js (recommended 16+)
- npm (comes with Node.js)
- Python 3.9+ (for backend)
- PostgreSQL or another DB (if you plan to run the backend with persistence)

## Quick Start (Frontend)
1. Install dependencies:

```powershell
npm install
```

2. Run the dev server:

```powershell
npm run dev
```

3. Open the app in your browser at `http://localhost:5173` (Vite default)

Useful npm scripts (defined in `package.json`):
- `dev`: runs the development server
- `build`: builds a production bundle
- `preview`: locally preview a production build

## Quick Start (Backend)
The repository contains a Python backend layout under `app/` and Alembic migrations under `alembic/`. Steps below are general — adjust to your specific environment and dependency manager.

1. Create and activate a virtual environment:

```powershell
python -m venv .venv; .\.venv\Scripts\Activate.ps1
```

2. Install backend dependencies (if a requirements file exists):

```powershell
pip install -r requirements.txt
```

3. Configure environment variables (see the Environment section below).

4. Run database migrations (example using Alembic):

```powershell
alembic upgrade head
```

5. Start the backend server (example using Uvicorn):

```powershell
uvicorn app.main:app --reload --port 8000
```

Note: The exact import path for Uvicorn may vary depending on how the backend is structured (e.g., `app.main:app`).

## Environment Variables
Create a `.env` file or provide env vars in your environment. Common variables used by this project may include:

- `DATABASE_URL` : database connection string (e.g., Postgres URI)
- `SECRET_KEY` : app secret for sessions or JWT
- `VITE_API_BASE_URL` : base URL used by the frontend to call the API (e.g., `http://localhost:8000`)

Adjust these to your deployment environment.

## Project Structure (high level)
```
.
├── alembic/                 # DB migration scripts
├── app/                     # Python backend (models, routers, services)
│   ├── core/
│   ├── db/
│   ├── models/
│   ├── routers/
│   └── services/
├── public/                  # Static assets for frontend
├── src/                     # Frontend source (React + TypeScript)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── ui/
│   ├── screens/
│   └── index.tsx
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Useful Commands
- Install frontend deps: `npm install`
- Run frontend dev server: `npm run dev`
- Build frontend: `npm run build`
- Activate Python venv: `python -m venv .venv` and activate
- Run backend (uvicorn): `uvicorn app.main:app --reload --port 8000`

## Deployment Notes
- Frontend: build with `npm run build` and serve the `dist/` directory using a static hosting provider.
- Backend: deploy the Python app to your preferred host (Docker, Kubernetes, cloud provider). Ensure env vars and DB are configured and migrations are run.

### Run full stack with Docker Compose (development)

The repository includes a `docker-compose.yml` that starts Postgres, the FastAPI backend, and the frontend (Vite) dev server together.

1. Copy the example env file:

```powershell
copy .env.example .env
```

2. Start the stack:

```powershell
docker compose up --build
```

3. Services:
- Frontend (Vite dev server): `http://localhost:5173`
- Backend (FastAPI): `http://localhost:8000` (API docs at `/docs`)
- Postgres: `localhost:5432`

After the port change, frontend will be available on `http://localhost:7000` (the Vite server continues to run on `5173` inside the container).

Notes:
- The frontend service uses a small Dockerfile at `docker/frontend.Dockerfile` to cache npm installs. Source is mounted into the container for live reloads.
- On Windows, file-watch issues may occur; `CHOKIDAR_USEPOLLING=true` is set for reliability.
- For production, build the frontend (`npm run build`) and serve statically; remove the dev server from Compose.

## Contributing
- Fork the repository, create a feature branch, and open a Pull Request.
- Follow existing code style (TypeScript + Tailwind patterns for frontend; follow backend conventions for Python).

## License
This project is licensed under the MIT License — see the `LICENSE` file for details.

## Contact
If you have questions, open an issue or contact the repository owner.

---
If you'd like, I can also:
- add a minimal `CONTRIBUTING.md`
- add a short `docker-compose.yml` to run both frontend and backend locally
- run the frontend dev server and verify it boots successfully on this machine
