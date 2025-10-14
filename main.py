# main.py
from fastapi import FastAPI

# Crear la aplicación
app = FastAPI(title="API de Nombres", version="1.0")

# Lista simulada de nombres
nombres = ["Jonathan", "Luis", "María", "Ana", "Carlos"]

# Endpoint raíz (opcional)
@app.get("/")
def inicio():
    return {"mensaje": "Bienvenido a la API de nombres"}

# Endpoint para obtener la lista de nombres
@app.get("/nombres")
def obtener_nombres():
    return {"nombres": nombres}
