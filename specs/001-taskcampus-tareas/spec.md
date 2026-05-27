# Feature Specification: TaskCampus

**Feature Branch**: `sin-rama`

**Created**: 2026-05-26

**Status**: Draft

**Input**: User description: "Define la especificacion funcional del sistema TaskCampus."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Crear y listar tareas (Priority: P1)

Como estudiante universitario, quiero crear tareas academicas y verlas en una
lista para organizar mi trabajo diario.

**Why this priority**: Es el flujo minimo viable para capturar tareas y ver el
pendiente.

**Independent Test**: Se prueba creando una tarea y verificando que aparezca en
la lista general con sus datos.

**Acceptance Scenarios**:

1. **Given** que no existen tareas, **When** creo una tarea con titulo,
   descripcion, asignatura, fecha de entrega, prioridad y estado, **Then** la
   tarea aparece en la lista con esos datos.
2. **Given** que existen tareas, **When** consulto la lista, **Then** se muestran
   todas las tareas registradas.

---

### User Story 2 - Editar y eliminar tareas (Priority: P2)

Como estudiante, quiero actualizar o eliminar tareas para mantener mi lista
al dia.

**Why this priority**: Permite corregir informacion y remover tareas ya resueltas
sin perder control del listado.

**Independent Test**: Se prueba editando una tarea existente y luego eliminando
otra, verificando los cambios en la lista.

**Acceptance Scenarios**:

1. **Given** una tarea existente, **When** edito sus campos, **Then** la tarea
   se actualiza y los cambios aparecen en la lista.
2. **Given** una tarea existente, **When** la elimino, **Then** la tarea ya no
   aparece en la lista.

---

### User Story 3 - Filtrar tareas y ver resumen (Priority: P3)

Como estudiante, quiero filtrar tareas por estado, prioridad y asignatura, y ver
un resumen estadistico para evaluar mi carga academica.

**Why this priority**: Agrega valor de organizacion y seguimiento por categorias.

**Independent Test**: Se prueba aplicando filtros y verificando que el resumen
refleje correctamente el resultado actual.

**Acceptance Scenarios**:

1. **Given** tareas con distintos estados, prioridades y asignaturas, **When**
   aplico filtros por estado, prioridad y asignatura, **Then** la lista muestra
   solo las tareas que cumplen los criterios.
2. **Given** tareas registradas, **When** consulto el resumen, **Then** se
   muestran totales para tareas pendientes, en proceso, finalizadas y de alta
   prioridad.

---

### Edge Cases

- Que ocurre cuando se crea una tarea con fecha de entrega en el pasado?
- Como se comporta el filtro cuando no hay resultados?
- Que ocurre si se intenta editar o eliminar una tarea inexistente?

## Requirements *(mandatory)*

**Constitution Constraints (TaskCampus)**:
- Todo el codigo, nombres y comentarios en espanol.
- La solucion respeta arquitectura cliente-servidor y expone una API REST.
- Persistencia solo en base de datos; prohibido JSON como almacenamiento.

### Functional Requirements

- **FR-001**: El sistema MUST permitir crear tareas con titulo, descripcion,
  asignatura, fecha de entrega, prioridad y estado.
- **FR-002**: El sistema MUST listar todas las tareas registradas.
- **FR-003**: El sistema MUST permitir editar tareas existentes.
- **FR-004**: El sistema MUST permitir eliminar tareas existentes.
- **FR-005**: El sistema MUST permitir filtrar tareas por estado, prioridad y
  asignatura.
- **FR-006**: El sistema MUST mostrar un resumen con total de tareas, pendientes,
  en proceso, finalizadas y de alta prioridad.
- **FR-007**: El sistema MUST validar la presencia de los campos requeridos al
  crear y editar tareas.
- **FR-008**: El sistema MUST mantener los valores de prioridad y estado dentro
  de un conjunto definido por el negocio.
- **FR-009**: El sistema MUST persistir tareas y cambios entre sesiones.
- **FR-010**: El sistema MUST exponer las operaciones CRUD y filtros a traves de
  una API REST consumida por el frontend.

### Key Entities *(include if feature involves data)*

- **Tarea**: Representa una actividad academica con titulo, descripcion,
  asignatura, fecha de entrega, prioridad y estado.
- **Resumen**: Conteo agregado de tareas por estado, total general y alta
  prioridad.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un estudiante puede crear una tarea y verla en la lista en menos
  de 2 minutos desde el inicio del flujo.
- **SC-002**: Los filtros y el resumen muestran resultados en menos de 2 segundos
  con hasta 1,000 tareas registradas.
- **SC-003**: Al menos 90% de los estudiantes completan el flujo crear + filtrar
  en el primer intento durante pruebas de aceptacion.
- **SC-004**: El resumen refleja correctamente los cambios de estado en menos de
  5 segundos despues de editar una tarea.

## Assumptions

- Solo existe el rol de estudiante universitario en esta version.
- La aplicacion es web y no incluye soporte movil nativo en v1.
- Los estudiantes cuentan con conectividad estable para usar la aplicacion.
- El volumen esperado es de hasta 1,000 tareas por estudiante.
