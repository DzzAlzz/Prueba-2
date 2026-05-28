const express = require("express");

const router = express.Router();

router.get("/productos", (req, res) => {
    res.send("Lista de productos");
});

module.exports = router;