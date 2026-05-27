# Registro de Pull Requests - TaskCampus

Este documento sirve como evidencia del flujo de trabajo basado en ramas y revisión de código aplicado durante el desarrollo del proyecto TaskCampus, siguiendo la metodología Spec Kit.

## PR #1: Configuración Inicial y Especificación
- **Rama Origen**: `configuracion-inicial`
- **Descripción**: Creación de la especificación funcional `taskcampus-spec.md`, README base y configuración de Git.
- **Estado**: Aprobado y Fusionado.

## PR #2: Infraestructura del Backend
- **Rama Origen**: `backend-base-datos`
- **Descripción**: Implementación de la conexión a PostgreSQL con SQLAlchemy y definición de modelos en español.
- **Estado**: Aprobado y Fusionado.

## PR #3: Servicios REST (CRUD)
- **Rama Origen**: `backend-crud`
- **Descripción**: Creación de esquemas Pydantic, funciones CRUD y endpoints de la API FastAPI.
- **Estado**: Aprobado y Fusionado.

## PR #4: Esqueleto del Frontend
- **Rama Origen**: `frontend-configuracion`
- **Descripción**: Inicialización del proyecto Angular 17+ e integración con Tailwind CSS.
- **Estado**: Aprobado y Fusionado.

## PR #5: Desarrollo de Componentes e Integración
- **Rama Origen**: `frontend-componentes`
- **Descripción**: Creación de servicios de consumo de API y componentes base (Lista, Formulario, Resumen).
- **Estado**: Aprobado y Fusionado.

## PR #6: Rediseño Modular y UX Premium
- **Rama Origen**: `frontend-rediseño-modular`
- **Descripción**: 
  - Separación de lógica (.ts) y plantillas (.html).
  - Implementación de modales para gestión de tareas.
  - Filtrado 100% reactivo sin necesidad de clics manuales.
  - Checkbox de finalización rápida con actualización inmediata.
  - Identidad visual institucional (UTMACH).
- **Estado**: Aprobado y Fusionado.
