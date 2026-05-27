<!--
Sync Impact Report
- Version change: none -> 1.0.0
- Modified principles: none
- Added sections: Core Principles, Restricciones y Stack, Flujo de Desarrollo y Calidad, Governance
- Removed sections: none
- Templates requiring updates: ✅ .specify/templates/plan-template.md, ✅ .specify/templates/spec-template.md, ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: none
-->
# TaskCampus Constitution

## Core Principles

### I. Espanol obligatorio en el codigo
Todo el codigo, nombres de variables, funciones, clases, rutas de API, archivos
internos y comentarios MUST estar en espanol. Esta regla aplica a frontend y
backend sin excepciones.
Racional: unifica el lenguaje del equipo y reduce ambiguedad en el dominio.

### II. Arquitectura cliente-servidor y API REST
El sistema MUST seguir una arquitectura cliente-servidor. El backend MUST ser
una API REST construida con FastAPI. El frontend MUST consumir exclusivamente
la API REST.
Racional: separa responsabilidades y habilita evolucion independiente.

### III. Stack tecnologico obligatorio
El frontend MUST usar Angular con TypeScript. El backend MUST usar Python con
FastAPI. La base de datos MUST ser PostgreSQL.
Racional: consistencia tecnica y soporte a largo plazo.

### IV. Persistencia solo en base de datos
No se permite usar JSON como almacenamiento persistente. Toda persistencia MUST
residir en PostgreSQL mediante modelos y migraciones.
Racional: garantiza integridad, consultas y trazabilidad.

### V. Modularidad y organizacion por funcionalidad
Los componentes del frontend MUST ser modulares y organizados por funcionalidad.
Las capas del backend (rutas, servicios, modelos) MUST mantener limites claros.
Racional: facilita mantenimiento, pruebas y escalabilidad.

## Restricciones y Stack Tecnologico

- CRUD, filtros y resumen estadistico son parte obligatoria del sistema TaskCampus.
- El frontend NO debe acceder directamente a la base de datos ni a recursos fuera
	de la API REST.
- El backend MUST exponer contratos REST claros y versionables si cambian.

## Flujo de Desarrollo y Calidad

- Uso obligatorio de Git con ramas por funcionalidad (una rama por feature).
- Commits descriptivos en espanol, con alcance y proposito claros.
- El codigo MUST ser limpio, legible y mantenible; complejidad innecesaria se
	rechaza en revision.

## Governance

- La constitucion prevalece sobre cualquier otra guia del proyecto.
- Cualquier PR o revision MUST verificar cumplimiento de los principios.
- Enmiendas requieren: propuesta documentada, impacto, y actualizacion de version
	siguiendo SemVer (MAJOR: cambio incompatible; MINOR: nuevas reglas; PATCH:
	aclaraciones).
- La revision de cumplimiento es obligatoria en cada entrega o incremento.

**Version**: 1.0.0 | **Ratified**: 2026-05-26 | **Last Amended**: 2026-05-26
