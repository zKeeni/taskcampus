from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

# Configuración de la URL de la base de datos PostgreSQL
# Ejemplo: postgresql://usuario:contraseña@localhost:5432/nombre_bd
URL_BASE_DATOS = os.getenv("DATABASE_URL", "postgresql://postgres:pipo123@localhost:5432/taskcampus")

motor = create_engine(URL_BASE_DATOS)
SesionLocal = sessionmaker(autocommit=False, autoflush=False, bind=motor)

Base = declarative_base()

def obtener_bd():
    bd = SesionLocal()
    try:
        yield bd
    finally:
        bd.close()
