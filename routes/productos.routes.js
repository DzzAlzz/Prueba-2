const express = require("express");

const router = express.Router();

const productosController = require("../controllers/productos.controller");

router.get("/productos", productosController.listar);

router.get("/productos/:id", productosController.detalle);

router.post("/productos", productosController.crear);

module.exports = router;