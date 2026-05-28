const productoService = require("../services/productos.service");

function listar(req, res) {
    productoService.listarProductos((error, productos) => {

        if (error) {
            return res.send("Error al listar productos");
        }

        res.json(productos);
    });
}

function detalle(req, res) {
    const id = req.params.id;

    productoService.obtenerProductoPorId(id, (error, producto) => {

        if (error) {
            return res.send("Error al buscar producto");
        }

        if (!producto) {
            return res.send("Producto no encontrado");
        }

        res.json(producto);
    });
}

function crear(req, res) {
    const nombre = req.body.nombre;
    const precio = req.body.precio;

    if (!nombre || !precio) {
        return res.send("Debe completar nombre y precio");
    }

    productoService.crearProducto(nombre, precio, (error) => {

        if (error) {
            return res.send("Error al guardar producto");
        }

        res.send("Producto guardado correctamente");
    });
}

module.exports = {
    listar,
    detalle,
    crear
};