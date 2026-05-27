---

description: "Task list for TaskCampus"

---

# Tasks: TaskCampus

**Input**: Design documents from `/specs/001-taskcampus-tareas/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No se solicitaron pruebas en la especificacion.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/`

**TaskCampus Constraints**:
- Nombres de archivos/carpetas internos en espanol.
- Backend en FastAPI y frontend en Angular; reflejar esto en rutas y tareas.
- Persistencia solo en PostgreSQL; no usar JSON como almacenamiento.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Crear estructura base con archivos de marcador en backend/src/.gitkeep y frontend/src/app/.gitkeep
- [x] T002 Inicializar backend FastAPI con dependencias en backend/requirements.txt y base en backend/src/main.py
- [x] T003 Inicializar frontend Angular en frontend/angular.json, frontend/package.json y frontend/src/main.ts
- [x] T004 [P] Configurar formateo/linting en backend/pyproject.toml y frontend/.eslintrc.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Configurar variables de entorno y settings en backend/src/configuracion.py
- [x] T006 Configurar conexion PostgreSQL y sesion en backend/src/db/conexion.py
- [x] T007 Configurar migraciones Alembic en backend/alembic.ini y backend/alembic/env.py
- [x] T008 [P] Definir enums de prioridad/estado en backend/src/modelos/enum_tarea.py
- [x] T009 [P] Crear modelo ORM de tarea en backend/src/modelos/tarea.py
- [x] T010 [P] Crear esquemas Pydantic en backend/src/esquemas/tarea_esquemas.py
- [x] T011 Crear servicio base con CRUD en backend/src/servicios/tareas_servicio.py
- [x] T012 Configurar manejo de errores y respuestas en backend/src/errores/manejadores.py
- [x] T013 Configurar CORS y registrar rutas en backend/src/main.py
- [x] T014 [P] Crear modelo frontend en frontend/src/app/funcionalidades/tareas/modelos/tarea.model.ts
- [x] T015 [P] Crear cliente API base en frontend/src/app/compartido/servicios/api.service.ts
- [x] T016 Crear rutas y shell de tareas en frontend/src/app/funcionalidades/tareas/tareas.routes.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Crear y listar tareas (Priority: P1) 🎯 MVP

**Goal**: Permitir crear tareas y ver la lista general con sus datos.

**Independent Test**: Crear una tarea y confirmar que aparece en la lista con sus campos.

### Implementation for User Story 1

- [x] T017 [P] [US1] Crear migracion de tabla tareas en backend/alembic/versions/0001_crear_tabla_tareas.py
- [x] T018 [P] [US1] Implementar crear/listar en backend/src/servicios/tareas_servicio.py
- [x] T019 [US1] Implementar POST y GET /api/tareas en backend/src/rutas/tareas.py
- [x] T020 [US1] Registrar rutas de tareas en backend/src/main.py
- [x] T021 [P] [US1] Crear servicio de tareas en frontend/src/app/funcionalidades/tareas/servicios/tareas-api.service.ts
- [x] T022 [P] [US1] Crear formulario en frontend/src/app/funcionalidades/tareas/componentes/formulario-tarea.component.ts
- [x] T023 [P] [US1] Crear plantilla de formulario en frontend/src/app/funcionalidades/tareas/componentes/formulario-tarea.component.html
- [x] T024 [P] [US1] Crear pagina lista en frontend/src/app/funcionalidades/tareas/paginas/lista-tareas.page.ts
- [x] T025 [P] [US1] Crear plantilla lista en frontend/src/app/funcionalidades/tareas/paginas/lista-tareas.page.html
- [x] T026 [US1] Conectar formulario y lista a la API en frontend/src/app/funcionalidades/tareas/paginas/lista-tareas.page.ts

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Editar y eliminar tareas (Priority: P2)

**Goal**: Actualizar y eliminar tareas existentes desde la lista.

**Independent Test**: Editar una tarea y eliminar otra, verificando cambios en la lista.

### Implementation for User Story 2

- [ ] T027 [P] [US2] Implementar actualizar/eliminar en backend/src/servicios/tareas_servicio.py
- [ ] T028 [US2] Implementar PUT y DELETE /api/tareas/{tarea_id} en backend/src/rutas/tareas.py
- [ ] T029 [US2] Manejar 404 de tarea inexistente en backend/src/errores/manejadores.py
- [ ] T030 [P] [US2] Crear componente item de tarea en frontend/src/app/funcionalidades/tareas/componentes/item-tarea.component.ts
- [ ] T031 [P] [US2] Crear plantilla item de tarea en frontend/src/app/funcionalidades/tareas/componentes/item-tarea.component.html
- [ ] T032 [US2] Conectar acciones editar/eliminar en frontend/src/app/funcionalidades/tareas/paginas/lista-tareas.page.ts

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Filtrar tareas y ver resumen (Priority: P3)

**Goal**: Filtrar tareas por estado, prioridad y asignatura, y mostrar resumen estadistico.

**Independent Test**: Aplicar filtros y verificar que el resumen refleja el estado actual.

### Implementation for User Story 3

- [ ] T033 [P] [US3] Implementar filtros en backend/src/servicios/tareas_servicio.py
- [ ] T034 [US3] Implementar filtros en GET /api/tareas en backend/src/rutas/tareas.py
- [ ] T035 [P] [US3] Implementar resumen en backend/src/servicios/tareas_servicio.py
- [ ] T036 [US3] Implementar GET /api/resumen en backend/src/rutas/resumen.py
- [ ] T037 [P] [US3] Crear componente filtros en frontend/src/app/funcionalidades/tareas/componentes/filtros-tareas.component.ts
- [ ] T038 [P] [US3] Crear plantilla filtros en frontend/src/app/funcionalidades/tareas/componentes/filtros-tareas.component.html
- [ ] T039 [P] [US3] Crear componente resumen en frontend/src/app/funcionalidades/tareas/componentes/resumen-tareas.component.ts
- [ ] T040 [P] [US3] Crear plantilla resumen en frontend/src/app/funcionalidades/tareas/componentes/resumen-tareas.component.html
- [ ] T041 [US3] Integrar filtros y resumen en frontend/src/app/funcionalidades/tareas/paginas/lista-tareas.page.ts

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T042 [P] Actualizar quickstart con comandos reales en specs/001-taskcampus-tareas/quickstart.md
- [ ] T043 Revisar consistencia de nombres en espanol en backend/src/ y frontend/src/

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Models/esquemas before servicios
- Servicios before rutas
- Backend before frontend integracion
- Story complete before moving to next priority

### Parallel Opportunities

- Setup: T003 and T004 can run in parallel
- Foundational: T008, T009, T010, T014, T015 can run in parallel
- US1: T017, T018, T021, T022, T023, T024, T025 can run in parallel
- US2: T027, T030, T031 can run in parallel
- US3: T033, T035, T037, T038, T039, T040 can run in parallel

---

## Parallel Example: User Story 1

```bash
Task: "Crear migracion de tabla tareas en backend/alembic/versions/0001_crear_tabla_tareas.py"
Task: "Implementar crear/listar en backend/src/servicios/tareas_servicio.py"
Task: "Crear servicio de tareas en frontend/src/app/funcionalidades/tareas/servicios/tareas-api.service.ts"
Task: "Crear formulario en frontend/src/app/funcionalidades/tareas/componentes/formulario-tarea.component.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories
