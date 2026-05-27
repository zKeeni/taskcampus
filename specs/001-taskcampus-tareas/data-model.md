# Data Model: TaskCampus

## Entidad: Tarea

**Descripcion**: Representa una tarea academica creada por un estudiante.

**Campos**:
- `id`: UUID, clave primaria.
- `titulo`: texto corto, obligatorio, max 120 caracteres.
- `descripcion`: texto largo, opcional.
- `asignatura`: texto corto, obligatorio, max 80 caracteres.
- `fecha_entrega`: fecha, obligatoria, permite fechas pasadas.
- `prioridad`: enum {`baja`, `media`, `alta`}.
- `estado`: enum {`pendiente`, `en_proceso`, `finalizada`}.
- `creado_en`: fecha-hora, automatico.
- `actualizado_en`: fecha-hora, automatico.

**Validaciones**:
- `titulo`, `asignatura`, `fecha_entrega`, `prioridad`, `estado` son obligatorios.
- `prioridad` y `estado` deben pertenecer a los valores definidos.
- Longitudes maximas aplican para `titulo` y `asignatura`.

**Indices sugeridos**:
- `estado`
- `prioridad`
- `asignatura`
- `fecha_entrega`

**Transiciones de estado**:
- `pendiente` -> `en_proceso` -> `finalizada`
- Se permite volver de `en_proceso` a `pendiente` si el usuario lo define.

## Entidad derivada: Resumen

**Descripcion**: Agregados de tareas para mostrar el estado general.

**Campos**:
- `total`: total de tareas.
- `pendientes`: total con estado `pendiente`.
- `en_proceso`: total con estado `en_proceso`.
- `finalizadas`: total con estado `finalizada`.
- `alta_prioridad`: total con prioridad `alta`.

**Fuente**: Calculado por agregacion en base de datos.
