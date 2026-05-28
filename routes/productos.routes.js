const express = require("express");

const router = express.Router();

router.get("/productos", (req, res) => {
    res.send("Lista de productos");
});
router.get("/productos/:id", (req, res) => {

    const id = req.params.id;

    res.send("Producto ID: " + id);

});

module.exports = router;