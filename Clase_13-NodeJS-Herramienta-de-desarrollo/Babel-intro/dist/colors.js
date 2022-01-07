"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var colorRGB = function colorRGB() {
  var R = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var G = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var B = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var RGB = "(".concat(R, ", ").concat(G, ", ").concat(B, ")");
  return "Color RGB: ".concat(RGB, " - Random");
};

var _default = colorRGB;
exports["default"] = _default;