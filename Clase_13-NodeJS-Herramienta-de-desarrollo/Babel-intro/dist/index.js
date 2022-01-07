"use strict";

var _colors = _interopRequireDefault(require("./colors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express");

var app = express();
var port = 8086;

var suma = function suma(a, b) {
  return "result: ".concat(a + b);
};

console.log(suma(3, 2));
console.log((0, _colors["default"])());
app.get("/", function (req, res) {
  res.send("Hi!!");
});
app.listen(port, function () {
  console.log("\uD83D\uDE80 Server run on port ".concat(port));
});