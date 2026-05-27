# TaskCampus

Aplicación web para la gestión de tareas estudiantiles desarrollada con **Angular**, **FastAPI** y **PostgreSQL**. El proyecto sigue la metodología **Spec Driven Development** (SDD).

## Estructura del Proyecto
- `specs/`: Contiene `taskcampus-spec.md` con la especificación funcional detallada.
- `frontend/`: Aplicación cliente en Angular 17+ con Tailwind CSS.
- `backend/`: API REST en Python 3.9+ utilizando FastAPI y SQLAlchemy.

## Requisitos Previos
- Node.js (v18+) y npm
- Python (3.9+)
- PostgreSQL (Instalado y en ejecución)

## Configuración del Backend (Python)
1. Navegar a la carpeta backend:
   ```bash
   cd backend
   ```
2. **Importante**: Si usas Linux (Ubuntu/Debian) y recibes errores de entorno externo o falta de pip/venv, instala primero:
   ```bash
   sudo apt update
   ```
   *Nota: Si no tienes `pip` o `venv` instalados, el sistema te pedirá instalarlos.*
3. Crear un entorno virtual (Recomendado):
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```
4. Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```
   *Si no usas venv y tienes errores de PEP 668, puedes usar: `pip install -r requirements.txt --break-system-packages` (no recomendado).*
5. Configurar la base de datos:
   - Crear una base de datos en PostgreSQL llamada `taskcampus`.
   - Copiar `.env.ejemplo` a `.env` y ajustar la `DATABASE_URL` si es necesario.
6. Iniciar el servidor:
   ```bash
   # Desde la carpeta backend
   PYTHONPATH=.. uvicorn principal:app --reload
   ```

## Configuración del Frontend (Angular)
1. Navegar a la carpeta frontend:
   ```bash
   cd frontend
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar la aplicación:
   ```bash
   npm start
   ```
4. Abrir en el navegador: `http://localhost:4200`

## Endpoints de la API
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/tareas` | Listar tareas (soporta filtros: estado, prioridad, asignatura) |
| GET | `/tareas/{id}` | Consultar una tarea específica |
| POST | `/tareas` | Crear una nueva tarea |
| PUT | `/tareas/{id}` | Actualizar una tarea existente |
| DELETE | `/tareas/{id}` | Eliminar una tarea |
| GET | `/tareas/resumen` | Obtener resumen estadístico |

## Metodología y Nomenclatura
- **Spec Driven Development**: El desarrollo se basó en la especificación previa ubicada en `specs/`.
- **Idioma**: Todo el código fuente (variables, funciones, componentes) y la interfaz de usuario están en **español**.
- **Control de Versiones**: Uso de ramas por funcionalidad (`feature branches`) y fusiones ordenadas en `main`.

## Integrantes
- [Tu Nombre/Usuario]
