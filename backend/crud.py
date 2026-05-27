from sqlalchemy.orm import Session
from . import modelos, esquemas

def obtener_tarea(bd: Session, tarea_id: int):
    return bd.query(modelos.Tarea).filter(modelos.Tarea.id == tarea_id).first()

def obtener_tareas(bd: Session, estado: str = None, prioridad: str = None, asignatura: str = None):
    consulta = bd.query(modelos.Tarea)
    if estado:
        consulta = consulta.filter(modelos.Tarea.estado == estado)
    if prioridad:
        consulta = consulta.filter(modelos.Tarea.prioridad == prioridad)
    if asignatura:
        consulta = consulta.filter(modelos.Tarea.asignatura == asignatura)
    return consulta.all()

def crear_tarea(bd: Session, tarea: esquemas.TareaCrear):
    db_tarea = modelos.Tarea(**tarea.model_dump())
    bd.add(db_tarea)
    bd.commit()
    bd.refresh(db_tarea)
    return db_tarea

def actualizar_tarea(bd: Session, tarea_id: int, tarea_actualizada: esquemas.TareaActualizar):
    db_tarea = bd.query(modelos.Tarea).filter(modelos.Tarea.id == tarea_id).first()
    if db_tarea:
        datos_actualizados = tarea_actualizada.model_dump(exclude_unset=True)
        for llave, valor in datos_actualizados.items():
            setattr(db_tarea, llave, valor)
        bd.commit()
        bd.refresh(db_tarea)
    return db_tarea

def eliminar_tarea(bd: Session, tarea_id: int):
    db_tarea = bd.query(modelos.Tarea).filter(modelos.Tarea.id == tarea_id).first()
    if db_tarea:
        bd.delete(db_tarea)
        bd.commit()
        return True
    return False

def obtener_resumen(bd: Session):
    total = bd.query(modelos.Tarea).count()
    pendientes = bd.query(modelos.Tarea).filter(modelos.Tarea.estado == "pendiente").count()
    finalizadas = bd.query(modelos.Tarea).filter(modelos.Tarea.estado == "finalizada").count()
    alta_prioridad = bd.query(modelos.Tarea).filter(modelos.Tarea.prioridad == "alta").count()
    
    return {
        "total": total,
        "pendientes": pendientes,
        "finalizadas": finalizadas,
        "alta_prioridad": alta_prioridad
    }
