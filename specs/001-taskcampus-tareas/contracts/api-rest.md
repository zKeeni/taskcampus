# Contratos API REST: TaskCampus

**Base URL**: `/api`

## Recursos

### Tareas

#### POST `/api/tareas`
Crea una nueva tarea.

**Request (JSON)**:

```json
{
  "titulo": "Parcial de algebra",
  "descripcion": "Estudiar unidades 1-3",
  "asignatura": "Algebra",
  "fecha_entrega": "2026-06-01",
  "prioridad": "alta",
  "estado": "pendiente"
}
```

**Response 201 (JSON)**:

```json
{
  "id": "uuid",
  "titulo": "Parcial de algebra",
  "descripcion": "Estudiar unidades 1-3",
  "asignatura": "Algebra",
  "fecha_entrega": "2026-06-01",
  "prioridad": "alta",
  "estado": "pendiente",
  "creado_en": "2026-05-26T10:00:00Z",
  "actualizado_en": "2026-05-26T10:00:00Z"
}
```

#### GET `/api/tareas`
Lista tareas con filtros opcionales.

**Query params**:
- `estado` (opcional): `pendiente` | `en_proceso` | `finalizada`
- `prioridad` (opcional): `baja` | `media` | `alta`
- `asignatura` (opcional): texto exacto o parcial

**Response 200 (JSON)**:

```json
[
  {
    "id": "uuid",
    "titulo": "Parcial de algebra",
    "descripcion": "Estudiar unidades 1-3",
    "asignatura": "Algebra",
    "fecha_entrega": "2026-06-01",
    "prioridad": "alta",
    "estado": "pendiente",
    "creado_en": "2026-05-26T10:00:00Z",
    "actualizado_en": "2026-05-26T10:00:00Z"
  }
]
```

#### PUT `/api/tareas/{tarea_id}`
Actualiza una tarea existente.

**Request (JSON)**: mismos campos que POST.

**Response 200 (JSON)**: tarea actualizada.

#### DELETE `/api/tareas/{tarea_id}`
Elimina una tarea.

**Response 204**: sin contenido.

### Resumen

#### GET `/api/resumen`
Devuelve el resumen estadistico de tareas.

**Response 200 (JSON)**:

```json
{
  "total": 12,
  "pendientes": 4,
  "en_proceso": 3,
  "finalizadas": 5,
  "alta_prioridad": 2
}
```

## Errores comunes

- **400**: datos invalidos o faltantes.
- **404**: tarea no encontrada.
- **422**: validacion de esquema.
