const express = require("express");
const conexion = require("./data/conexion");

const app = express();
const productosRoutes = require("./routes/productos.routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("index");
});

app.use(productosRoutes);
app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});