# Especificación del sistema TaskCampus

## Problema
Los estudiantes necesitan organizar sus tareas académicas, fechas de entrega y estado de avance de manera eficiente.

## Objetivo
Desarrollar una aplicación web para registrar, consultar, actualizar y eliminar tareas académicas utilizando tecnologías modernas y una metodología basada en especificaciones.

## Usuarios
Estudiantes universitarios de noveno semestre y comunidad académica en general.

## Historias de Usuario
- **Como estudiante**, quiero registrar tareas para organizar mis actividades académicas.
- **Como estudiante**, quiero filtrar tareas por estado, prioridad o asignatura para identificar mis pendientes rápidamente.
- **Como estudiante**, quiero marcar tareas como finalizadas para controlar mi avance en el semestre.
- **Como estudiante**, quiero ver un resumen estadístico de mis tareas para tener una visión general de mi carga académica.

## Requisitos Funcionales
- **RF01. Registrar tareas**: El sistema debe permitir capturar título, descripción, asignatura, fecha de entrega, prioridad (baja, media, alta) y estado (pendiente, en proceso, finalizada).
- **RF02. Listar tareas**: El sistema debe mostrar todas las tareas registradas en una interfaz clara.
- **RF03. Editar tareas**: El sistema debe permitir modificar los datos de una tarea ya existente.
- **RF04. Eliminar tareas**: El sistema debe permitir borrar tareas que ya no sean necesarias.
- **RF05. Filtrar tareas**: El sistema debe permitir filtrar el listado por estado, prioridad y asignatura.
- **RF06. Mostrar resumen estadístico**: El sistema debe calcular y mostrar el total de tareas, tareas pendientes, finalizadas y de alta prioridad.

## Requisitos No Funcionales
- **RNF01. Interfaz de usuario**: La interfaz debe ser clara, sencilla y responsiva, utilizando Tailwind CSS.
- **RNF02. API REST**: El backend debe exponer una API REST utilizando Python (FastAPI).
- **RNF03. Persistencia**: Los datos deben almacenarse en una base de datos PostgreSQL.
- **RNF04. Idioma**: Todo el código, nombres de variables, archivos y la interfaz deben estar en español.
- **RNF05. Control de Versiones**: El proyecto debe estar versionado en GitHub siguiendo un flujo de ramas.
- **RNF06. Documentación**: El proyecto debe incluir instrucciones detalladas de instalación y uso.

## Diseño de la API (Endpoints)
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/tareas` | Listar todas las tareas |
| GET | `/tareas/{id}` | Consultar una tarea específica |
| POST | `/tareas` | Crear una nueva tarea |
| PUT | `/tareas/{id}` | Actualizar una tarea existente |
| DELETE | `/tareas/{id}` | Eliminar una tarea |
| GET | `/tareas/resumen` | Obtener resumen estadístico |
