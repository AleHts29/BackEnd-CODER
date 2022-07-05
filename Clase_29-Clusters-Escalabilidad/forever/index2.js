const express = require("express");

const app = express();
const port = 4003;
let count = 0;

app.get("/hello", (req, res) => {
  res.send(`${count++} Hola Mundo en index2 - ${process.pid}`);
});

app.listen(port, () => {
  console.log(`server ${process.pid} - http://localhost:${port} `);
});