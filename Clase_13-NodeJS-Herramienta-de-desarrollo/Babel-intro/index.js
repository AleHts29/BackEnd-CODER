const express = require("express");
import RGB from "./colors.js";

const app = express();

const port = 8086;

const suma = (a, b) => {
  return `result: ${a + b}`;
};

console.log(suma(3, 2));
console.log(RGB());

app.get("/", (req, res) => {
  res.send("Hi!!");
});

app.listen(port, () => {
  console.log(`🚀 Server run on port ${port}`);
});
