# 🌊 Aquatic Project

Un proyecto full-stack moderno diseñado para la gestión y visualización de especies acuáticas. Construido con una arquitectura desacoplada utilizando **Django REST Framework** en el backend y **React (Vite) + Tailwind CSS** en el frontend, totalmente dockerizado y preparado para producción.

---

## 🚀 Demo en Vivo

- **Frontend (Vercel):** [https://aquatic-omega.vercel.app/](https://aquatic-omega.vercel.app/) 
- **Backend (Render):** [https://aquatic-w42p.onrender.com](https://aquatic-w42p.onrender.com) 

---

## 🛠️ Tecnologías Utilizadas

### **Backend**
- **Python 3.12**
- **Django** & **Django REST Framework (DRF)**
- **WhiteNoise** (Gestión de archivos estáticos en producción)
- **Gunicorn** (Servidor HTTP WSGI)

### **Frontend**
- **React** (con Vite)
- **Tailwind CSS**
- **Axios** (para consumir la API REST)

### **Infraestructura y Despliegue**
- **Docker** & **Docker Compose**
- **Render** (Despliegue de Backend)
- **Vercel** (Despliegue de Frontend)

---

## 📁 Estructura del Proyecto

```text
aquatic-project/
├── backend/                # Proyecto Django REST
│   ├── api/                # Aplicación principal de la API
│   ├── core/               # Configuración global del proyecto
│   ├── Dockerfile          # Configuración Docker para Backend (Python 3.12)
│   └── requirements.txt    # Dependencias de Python
├── frontend/               # Aplicación React
│   ├── src/                # Componentes y vistas de React
│   ├── Dockerfile          # Configuración Docker para Frontend (Node 20 + Nginx)
│   └── package.json        # Dependencias de Node.js
├── docker-compose.yml      # Orquestación de contenedores para entorno local
└── README.md
```

---

## 💻 Ejecución en Entorno Local

Gracias a Docker Compose, puedes ejecutar todo el entorno de desarrollo con un solo comando.

### **Requisitos previos**
- Tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/).
- Tener instalado [Git](https://git-scm.com/).

### **Pasos para iniciar**

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Aquatic.git
   cd Aquatic/aquatic-project
   ```

2. Levantar la aplicación con Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Acceder a las aplicaciones en tu navegador:
   - **Frontend:** `http://localhost:3000`
   - **Backend API:** `http://localhost:8000/api/`

---

## ☁️ Configuración de Despliegue

### **1. Backend en Render**
- Se despliega utilizando el **Dockerfile** dentro de la carpeta `/backend`.
- **Root Directory:** `backend`
- **Runtime:** Docker

### **2. Frontend en Vercel**
- Se despliega como una SPA (Single Page Application) apuntando a la carpeta `/frontend`.
- **Root Directory:** `frontend`
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 👤 Autor

Creado por **Valentina Blandón** - [GitHub](https://github.com/ValenBV1013)
