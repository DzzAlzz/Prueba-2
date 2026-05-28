const conexion = require("../data/conexion");

function listarProductos(callback) {
    const sql = "SELECT * FROM productos";

    conexion.query(sql, (error, resultados) => {
        callback(error, resultados);
    });
}

function obtenerProductoPorId(id, callback) {
    const sql = "SELECT * FROM productos WHERE id = ?";

    conexion.query(sql, [id], (error, resultados) => {
        callback(error, resultados[0]);
    });
}

function crearProducto(nombre, precio, callback) {
    const sql = "INSERT INTO productos (nombre, precio) VALUES (?, ?)";

    conexion.query(sql, [nombre, precio], (error, resultado) => {
        callback(error, resultado);
    });
}

module.exports = {
    listarProductos,
    obtenerProductoPorId,
    crearProducto
};