"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = __importDefault(require("./calculator"));
var suma = function (a, b) {
    return a + b;
};
console.log(suma(2, 4));
console.log(calculator_1.default.resta(2, 4));
