const express = require("express");
const cookieParser = require("cookie-parser");
const conexion = require("./data/conexion");


const app = express();
const productosRoutes = require("./routes/productos.routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.render("index");
});

app.use(productosRoutes);
app.get("/login", (req, res) => {
    res.cookie("usuario", "Denzel");
    res.send("Cookie creada correctamente");
});
app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});