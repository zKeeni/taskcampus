from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List, Optional

import crud, modelos, esquemas, basedatos

# Crear las tablas en la base de datos
modelos.Base.metadata.create_all(bind=basedatos.motor)

app = FastAPI(title="TaskCampus API")

# Configuración de CORS para permitir peticiones desde el frontend Angular
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # En producción, especificar el dominio del frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/tareas", response_model=List[esquemas.Tarea])
def listar_tareas(
    estado: Optional[str] = None, 
    prioridad: Optional[str] = None, 
    asignatura: Optional[str] = None, 
    bd: Session = Depends(basedatos.obtener_bd)
):
    return crud.obtener_tareas(bd, estado=estado, prioridad=prioridad, asignatura=asignatura)

@app.get("/tareas/resumen", response_model=esquemas.ResumenTareas)
def obtener_resumen_tareas(bd: Session = Depends(basedatos.obtener_bd)):
    return crud.obtener_resumen(bd)

@app.get("/tareas/{tarea_id}", response_model=esquemas.Tarea)
def consultar_tarea(tarea_id: int, bd: Session = Depends(basedatos.obtener_bd)):
    tarea = crud.obtener_tarea(bd, tarea_id=tarea_id)
    if tarea is None:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")
    return tarea

@app.post("/tareas", response_model=esquemas.Tarea)
def crear_nueva_tarea(tarea: esquemas.TareaCrear, bd: Session = Depends(basedatos.obtener_bd)):
    return crud.crear_tarea(bd=bd, tarea=tarea)

@app.put("/tareas/{tarea_id}", response_model=esquemas.Tarea)
def actualizar_tarea_existente(tarea_id: int, tarea: esquemas.TareaActualizar, bd: Session = Depends(basedatos.obtener_bd)):
    db_tarea = crud.actualizar_tarea(bd=bd, tarea_id=tarea_id, tarea_actualizada=tarea)
    if db_tarea is None:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")
    return db_tarea

@app.delete("/tareas/{tarea_id}")
def eliminar_tarea_existente(tarea_id: int, bd: Session = Depends(basedatos.obtener_bd)):
    exito = crud.eliminar_tarea(bd=bd, tarea_id=tarea_id)
    if not exito:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")
    return {"mensaje": "Tarea eliminada exitosamente"}
