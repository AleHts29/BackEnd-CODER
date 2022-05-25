const express = require("express");

const app = express();
const port = 4004;
let count = 0;

app.get("/hello", (req, res) => {
  res.send(`${count++} Hola Mundo en Process 3 - ${process.pid}`);
});

app.listen(port, () => {
  console.log(`server ${process.pid} - http://localhost:${port} `);
});
