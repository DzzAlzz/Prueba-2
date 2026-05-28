const express = require("express");

const router = express.Router();

router.get("/productos", (req, res) => {
    res.send("Lista de productos");
});
router.get("/productos/:id", (req, res) => {

    const id = req.params.id;

    res.send("Producto ID: " + id);

});
router.post("/productos", (req, res) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;

    if (!nombre || !precio) {
        return res.send("Error: debe ingresar nombre y precio");
    }

    res.send("Producto creado: " + nombre + " - $" + precio);
});

module.exports = router;