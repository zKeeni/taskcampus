# Quickstart: TaskCampus

## Requisitos previos

- Python 3.11
- Node 20 LTS
- Angular CLI 18
- PostgreSQL 16

## Backend (FastAPI)

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

Configurar variables de entorno (ejemplo):

```bash
set DATABASE_URL=postgresql+psycopg://usuario:clave@localhost:5432/taskcampus
set ENTORNO=desarrollo
```

Ejecutar migraciones y servidor:

```bash
alembic upgrade head
uvicorn src.main:app --reload
```

## Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

Abrir en el navegador: http://localhost:4200

## Verificacion rapida

- Crear una tarea y verificar que aparece en la lista.
- Aplicar filtros y confirmar que el resumen se actualiza.
