const express = require("express");
const cors = require("cors"); 
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000; // Usando el puerto detectado por Render

// Configuración de CORS para permitir solicitudes desde GitHub Pages
app.use(cors({
    origin: "https://darkworld03.github.io",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json()); 
app.use(express.static(path.join(__dirname, "public")));

// Ruta para guardar los datos y permitir la descarga
app.post("/guardar", (req, res) => {
    const { nickname, nombre, email, rol, medalla, edad } = req.body;

    if (!nickname || !nombre || !email || !rol || !medalla || !edad) {
        return res.status(400).json({ mensaje: "Faltan datos en el formulario." });
    }

    const contenido = `Nickname: ${nickname}, Nombre: ${nombre}, Email: ${email}, Rol: ${rol}, Medalla: ${medalla}, Edad: ${edad}\n`;
    const archivo = path.join(__dirname, "registros.txt");

    fs.appendFile(archivo, contenido, (err) => {
        if (err) {
            console.error("Error al escribir:", err);
            return res.status(500).json({ mensaje: "Error al guardar los datos." });
        }

        // Enviar el archivo `.txt` al cliente para descargarlo
        res.setHeader("Content-Disposition", "attachment; filename=registros.txt");
        res.setHeader("Content-Type", "text/plain");
        res.send(contenido);
    });
});

app.get("/", (req, res) => {
    res.send("🚀 Servidor en Render funcionando correctamente");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});





