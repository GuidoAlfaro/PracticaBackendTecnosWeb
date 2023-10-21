// app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const categoryRoutes = require("./categoryRoutes");
const actorRoutes = require("./actorRoutes");

// Middleware para el análisis de solicitudes JSON
app.use(bodyParser.json());

// Rutas de la categoría
app.use("/api", categoryRoutes);
app.use("/api", actorRoutes);


const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor en ejecución en http://localhost:${puerto}`);
});
