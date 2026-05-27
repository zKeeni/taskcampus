# Research: TaskCampus

## Decisiones

### 1) Versiones base del stack
**Decision**: Python 3.11, Angular 18, TypeScript 5.x, Node 20 LTS, PostgreSQL 16.
**Rationale**: Versiones LTS actuales con soporte amplio y compatibilidad entre
herramientas.
**Alternatives considered**: Python 3.10, Angular 17, Node 18 LTS, PostgreSQL 15.

### 2) Librerias principales del backend
**Decision**: FastAPI + SQLAlchemy + Pydantic + Alembic.
**Rationale**: FastAPI para API REST moderna, SQLAlchemy para ORM, Pydantic para
validacion y Alembic para migraciones consistentes.
**Alternatives considered**: Django REST Framework, Tortoise ORM.

### 3) Testing del backend
**Decision**: pytest con httpx para pruebas de API.
**Rationale**: pytest es estandar de facto en Python y httpx facilita pruebas
asincronas contra FastAPI.
**Alternatives considered**: unittest, nose2.

### 4) Testing del frontend
**Decision**: Jest + Testing Library.
**Rationale**: Suite moderna con buen soporte para pruebas unitarias y de
componentes en Angular.
**Alternatives considered**: Karma/Jasmine.

### 5) Regla de fecha de entrega en el pasado
**Decision**: Permitir fechas pasadas, pero registrar la tarea sin bloqueo.
**Rationale**: Evita friccion para estudiantes que migran tareas atrasadas y
permite seguimiento historico.
**Alternatives considered**: Rechazar fechas pasadas con error de validacion.

### 6) Resumen estadistico
**Decision**: Calcular resumen con agregaciones SQL sobre el conjunto filtrado o
completo de tareas, segun el endpoint.
**Rationale**: Consistencia en una sola fuente de verdad y mejor rendimiento.
**Alternatives considered**: Calculo en el frontend.
