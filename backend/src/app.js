const express = require("express");
const cors = require("cors");

const llamadasRoutes = require("./routes/llamadas.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.use("/api/posts", llamadasRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejador de errores centralizado
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Error interno del servidor" });
});

module.exports = app;
