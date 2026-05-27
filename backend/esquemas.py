from pydantic import BaseModel
from datetime import date
from typing import Optional

class TareaBase(BaseModel):
    titulo: str
    descripcion: Optional[str] = None
    asignatura: str
    fecha_entrega: date
    prioridad: str
    estado: str

class TareaCrear(TareaBase):
    pass

class TareaActualizar(TareaBase):
    titulo: Optional[str] = None
    asignatura: Optional[str] = None
    fecha_entrega: Optional[date] = None
    prioridad: Optional[str] = None
    estado: Optional[str] = None

class Tarea(TareaBase):
    id: int

    class Config:
        from_attributes = True

class ResumenTareas(BaseModel):
    total: int
    pendientes: int
    finalizadas: int
    alta_prioridad: int
