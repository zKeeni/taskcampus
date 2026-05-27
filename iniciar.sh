#!/bin/bash

# Script de inicio unificado para TaskCampus
# Ejecuta el Backend (FastAPI) y el Frontend (Angular) en paralelo

echo "🚀 Iniciando TaskCampus..."

# Función para limpiar procesos al salir
trap "kill 0" EXIT

# 1. Iniciar el Backend en segundo plano
echo "📂 Iniciando Backend (puerto 8000)..."
(
    cd backend
    if [ ! -d "venv" ]; then
        echo "📦 Creando entorno virtual de Python..."
        python3 -m venv venv
    fi
    source venv/bin/activate
    pip install -r requirements.txt --quiet
    PYTHONPATH=.. uvicorn principal:app --reload --port 8000
) &

# 2. Iniciar el Frontend en segundo plano
echo "🌐 Iniciando Frontend (puerto 4200)..."
(
    cd frontend
    if [ ! -d "node_modules" ]; then
        echo "📦 Instalando dependencias de Node.js..."
        npm install --silent
    fi
    npm start -- --port 4200
) &

echo "✅ Ambos servidores están arrancando."
echo "🔗 Backend: http://localhost:8000"
echo "🔗 Frontend: http://localhost:4200"
echo "⌨️  Presiona Ctrl+C para detener ambos servidores."

# Esperar a que los procesos terminen
wait
