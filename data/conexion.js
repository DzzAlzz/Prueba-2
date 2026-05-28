const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "evaa2"
});

conexion.connect((error) => {
    if (error) {
        console.log("Error al conectar con la base de datos");
        return;
    }

    console.log("Conectado a la base de datos evaa2");
});

module.exports = conexion;