    const express = require("express");
    const router = express.Router();
    const db = require("./db");

    // Ruta para obtener todos los actores
    router.get("/actors", (req, res) => {
        db.query("SELECT * FROM actor", (error, results) => {
            if (error) {
                res.status(500).json({ error: "Error al obtener los actores." });
                return;
            }
            res.json(results);
        });
    });

    // Ruta para obtener actores con paginación
    router.get("/actors/paginated", (req, res) => {
        const page = parseInt(req.query.page) || 1; // Página actual
        const limit = parseInt(req.query.limit) || 10; // Número de registros por página
        const offset = (page - 1) * limit; // Calcular el valor OFFSET para la consulta

        db.query(
            "SELECT * FROM actor LIMIT ? OFFSET ?",
            [limit, offset],
            (error, results) => {
                if (error) {
                    res.status(500).json({ error: "Error al obtener los actores paginados." });
                    return;
                }
                res.json(results);
            }
        );
    });

    // Ruta para obtener un actor por ID
    router.get("/actors/:id", (req, res) => {
        const actorId = req.params.id;
        db.query(
            "SELECT * FROM actor WHERE actor_id = ?",
            [actorId],
            (error, results) => {
                if (error) {
                    res.status(500).json({ error: "Error al obtener el actor." });
                    return;
                }
                if (results.length === 0) {
                    res.status(404).json({ error: "Actor no encontrado." });
                    return;
                }
                res.json(results[0]);
            }
        );
    });


    router.post("/actors", (req, res) => {
    const { first_name, last_name, usuario } = req.body;
    
    if (usuario !== "admin") {
        res.status(403).json({ error: "Acceso no autorizado." });
        return;
    }

    db.query(
        "INSERT INTO actor (first_name, last_name) VALUES (?, ?)",
        [first_name, last_name],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: "Error al crear el actor." });
                return;
            }
            res.json({ message: "Actor creado con éxito." });
        }
    );
    });

    router.put("/actors/:id", (req, res) => {
    const actorId = req.params.id;
    const { first_name, last_name, usuario } = req.body;

    if (usuario !== "admin") {
        res.status(403).json({ error: "Acceso no autorizado." });
        return;
    }

    db.query(
        "UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?",
        [first_name, last_name, actorId],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: "Error al actualizar el actor." });
                return;
            }
            res.json({ message: "Actor actualizado con éxito." });
        }
    );
    });

    router.delete("/actors/:id", (req, res) => {
    const actorId = req.params.id;
    const { usuario } = req.body;

    if (usuario !== "admin") {
        res.status(403).json({ error: "Acceso no autorizado." });
        return;
    }

    db.query(
        "DELETE FROM actor WHERE actor_id = ?",
        [actorId],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: "Error al eliminar el actor." });
                return;
            }
            res.json({ message: "Actor eliminado con éxito." });
        }
    );
    });


    module.exports = router;