# Registro Dota 2 Pro Players  
Proyecto web que permite a los jugadores de Dota 2 registrar sus datos y descargar un archivo `.txt` con la información ingresada.  

##  Estructura del Proyecto  
📌 **Frontend (`GitHub Pages`)**  
- `index.html` ➝ **Página de login** que solicita correo y contraseña (mínimo 8 caracteres).  
- `proplayers.html` ➝ **Página principal**, muestra una tabla con los jugadores registrados y un botón para ir a la página de registro.  
- `guardar.html` ➝ **Formulario para registrar jugadores** y descargar `registros.txt`.  
- `style.css` ➝ Estilos del proyecto.  
- `imagenes/` ➝ Contiene imágenes utilizadas en la interfaz.  

📌 **Backend (`Render con Node.js & Express`)**  
- `server.js` ➝ Servidor que recibe los datos, los guarda en `registros.txt` y permite descargarlo.  
- `package.json` ➝ Configuración de dependencias como `express` y `cors`.  
- `package-lock.json` ➝ Archivo de configuración automática de dependencias.  
- `registros.txt` ➝ Archivo donde se almacenan los datos registrados por los usuarios.  

## 🔄 Flujo de Navegación  
1️⃣ **El usuario ingresa a `index.html` (Login)** y debe ingresar su correo y contraseña con mínimo 8 caracteres.  
2️⃣ **Si el login es válido**, es redirigido a `proplayers.html`, donde verá la lista de jugadores.  
3️⃣ **En `proplayers.html` hay un botón "Guardar Datos"**, que lo lleva a `guardar.html`.  
4️⃣ **En `guardar.html`, el usuario ingresa los datos y presiona "Guardar"**, lo que:  
   ✅ Envía la información al servidor en Render.  
   ✅ Genera automáticamente el archivo `registros.txt`.  
   ✅ **Descarga el archivo `registros.txt`** con los datos ingresados.  

## ⚙️ Tecnologías Usadas  
- **HTML, CSS y JavaScript** para la interfaz.  
- **Node.js y Express** para el servidor backend.  
- **Render** como plataforma de despliegue del servidor.  
- **GitHub Pages** para alojar el frontend.  

## 🚀 Cómo Ejecutarlo Localmente  
```sh
git clone https://github.com/DarkWorld03/DarkWorld03.github.io
cd DarkWorld03.github.io
npm install
node server.js
