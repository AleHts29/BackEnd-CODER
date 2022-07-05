// let clase1 = new personalbar("Alejandro");
// let clase2 = new personalbar("Juan");
// let clase3 = new personalbar("Andrea");
// let clase4 = new personalbar("Carla");

// La idea es que con el patron de diseño singleton esa clase solo se pueda instanciar una unica vez

const SingletonClass = require("./singleton");

let clase1 = SingletonClass.getInstance();
let clase2 = SingletonClass.getInstance();
let clase3 = SingletonClass.getInstance();
let clase4 = SingletonClass.getInstance();

console.log(clase1);
console.log(clase2);
console.log(clase3);
console.log(clase4);
