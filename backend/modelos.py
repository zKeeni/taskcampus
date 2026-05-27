from sqlalchemy import Column, Integer, String, Date
from basedatos import Base

class Tarea(Base):
    __tablename__ = "tareas"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    descripcion = Column(String)
    asignatura = Column(String, index=True)
    fecha_entrega = Column(Date)
    prioridad = Column(String) # baja, media, alta
    estado = Column(String)    # pendiente, en proceso, finalizada
