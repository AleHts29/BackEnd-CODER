const express = require("express");

const app = express();
const port = 8080;
let count = 0;

app.get("/hello", (req, res) => {
  res.send(`${count++} Hola CODER HOUSE!! - ${process.pid}`);
});

app.listen(port, () => {
  console.log(`server ${process.pid} - http://localhost:${port} `);
});
