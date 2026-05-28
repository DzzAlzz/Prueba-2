# Proyecto Evaa 2

Proyecto de backend básico desarrollado con Node.js, Express, EJS y MySQL.

## Alumno

Denzel Álvarez

## Instalación

```bash
npm install
Ejecución
node app.js

El servidor funciona en:

http://localhost:3000
Base de datos

Base de datos: evaa2

Tabla: productos

Campos:

id
nombre
precio
Endpoints
Página principal
GET /

Muestra el formulario de productos.

Listar productos
GET /productos

Lista todos los productos guardados en MySQL.

Buscar producto por ID
GET /productos/:id

Ejemplo:

GET /productos/1
Crear producto
POST /productos

Se usa desde el formulario principal.

Seguridad básica

Se implementó una cookie simple en:

GET /login

Esta cookie guarda un valor básico de usuario como ejemplo de sesión.

HTTPS

En este proyecto se trabaja de forma local con localhost.
En un ambiente que fuese real se recomienda usar HTTPS para proteger los datos enviados entre el cliente y el servidor.
HTTPS ayuda a evitar que terceros puedan leer información sensible durante la comunicación.

Arquitectura

El proyecto está separado por capas:

routes: rutas del sistema
controllers: controla las respuestas
services: lógica del sistema
data: conexión con MySQL
views: interfaz EJS