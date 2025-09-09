// Importamos el módulo 'http' de Node.js
const http = require('http');

// Creamos el servidor
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Cabecera HTTP
  res.end('¡Hola mundo desde Node.js!'); // Respuesta al cliente
});

// Definimos el puerto
const puerto = 3000;

// Hacemos que el servidor escuche en el puerto
servidor.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
