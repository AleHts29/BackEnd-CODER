const express = require("express");
const compresion = require("compression");
require("dotenv").config();

const app = express();
app.use(compresion());

app.get("/", (req, res) => {
  if (process.env.NODE_ENV === "prod") {
    return res.send("Hola Mundo".repeat(1000));
  }

  res.send("Hola Mundo");
});

app.listen(8080, () => {
  console.log("Server ok!");
});
