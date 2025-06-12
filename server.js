const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Definir el puerto dinámico para Render
const PORT = process.env.PORT || 3000;

// Permite recibir JSON en los request
app.use(express.json());

// Sirve los archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para guardar los datos
app.post('/guardar', (req, res) => {
  const { nickname, nombre, email, rol, medalla, edad } = req.body;

  // Verifica que estén todos los campos
  if (!nickname || !nombre || !email || !rol || !medalla || !edad) {
    return res.status(400).json({ mensaje: 'Faltan datos en el formulario.' });
  }
  
  const contenido = `Nickname: ${nickname}, Nombre: ${nombre}, Email: ${email}, Rol: ${rol}, Medalla: ${medalla}, Edad: ${edad}\n`;
  const archivo = path.join(__dirname, 'registros.txt');

  fs.appendFile(archivo, contenido, (err) => {
    if (err) {
      console.error('Error al escribir:', err);
      return res.status(500).json({ mensaje: 'Error al guardar los datos.' });
    }
    res.json({ mensaje: 'Datos guardados correctamente.' });
  });
});

// Ruta de prueba para confirmar que el servidor está activo
app.get("/", (req, res) => {
  res.send("🚀 Servidor en Render funcionando correctamente");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});



