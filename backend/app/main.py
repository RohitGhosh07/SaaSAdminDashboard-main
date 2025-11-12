import os
from fastapi import FastAPI

from .db import engine, Base
from .routers import clients

app = FastAPI(title="SaaS Admin Dashboard - Backend")


@app.on_event("startup")
def on_startup():
    # Create database tables (for development/demo). In production, use migrations.
    Base.metadata.create_all(bind=engine)


app.include_router(clients.router)


@app.get("/healthz")
def health():
    return {"status": "ok"}
