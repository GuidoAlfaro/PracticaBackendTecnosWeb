// categoryRoutes.js
const express = require("express");
const router = express.Router();
const db = require("./db"); // Importa la conexión a la base de datos

// Obtener todas las categorías
router.get("/categories", (req, res) => {
  db.query("SELECT * FROM category", (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error al obtener las categorías." });
      return;
    }
    res.json(results);
  });
});

// Obtener una categoría por ID
router.get("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  db.query(
    "SELECT * FROM category WHERE category_id = ?",
    [categoryId],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error al obtener la categoría." });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Categoría no encontrada." });
        return;
      }
      res.json(results[0]);
    }
  );
});

// Crear una nueva categoría
router.post("/categories", (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO category (name) VALUES (?)",
    [name],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error al crear la categoría." });
        return;
      }
      res.json({ message: "Categoría creada con éxito." });
    }
  );
});

// Actualizar una categoría por ID
router.put("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE category SET name = ? WHERE category_id = ?",
    [name, categoryId],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error al actualizar la categoría." });
        return;
      }
      res.json({ message: "Categoría actualizada con éxito." });
    }
  );
});

// Eliminar una categoría por ID
router.delete("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  db.query(
    "DELETE FROM category WHERE category_id = ?",
    [categoryId],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error al eliminar la categoría." });
        return;
      }
      res.json({ message: "Categoría eliminada con éxito." });
    }
  );
});

module.exports = router;
