const express = require("express");
const cluster = require("cluster");
const numCPUS = require("os").cpus().length; // 4 nucleos

const app = express();
const port = 8080;
let count = 0;

// Recientemente, se cambio .isMaster por isPrimary
if (cluster.isMaster) {
  // Se crean los Workers
  for (let i = 0; i < numCPUS; i++) {
    cluster.fork();
  }

  // si se mueren todos los procesos, mediante este evento los puedo reiniciar
  cluster.on("exit", () => {
    console.log(`Process ${process.pid} died`);
  });
} else {
  // Se ejecuta el server
  app.get("/", (req, res) => {
    for (let i = 0; i <= 5e9; i++) {}

    res.send(`Hola Mundo - ${process.pid}`);
  });

  app.get("/hello", (req, res) => {
    res.send(`${count++} Hola Mundo - ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`server ${process.pid} - http://localhost:${port} `);
  });
}
