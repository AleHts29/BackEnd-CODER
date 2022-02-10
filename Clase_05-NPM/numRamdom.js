// A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados

let obj = {};
for (let i = 0; i < 10000; i++) {
  let random = Math.floor(Math.random() * 20 + 1);
  if (obj[random]) {
    obj[random]++;
  } else {
    obj[random] = 1;
  }
}

console.log(obj);
let sum = Object.values(obj).reduce(
  (acculumator, current) => acculumator + current
);

console.log(sum);

const products = [
  { id: 1, name: "Escuadra", price: 323.45 },
  { id: 2, name: "Calculadora", price: 234.56 },
  { id: 3, name: "Globo Terráqueo", price: 45.67 },
  { id: 4, name: "Paleta Pintura", price: 456.78 },
  { id: 5, name: "Reloj", price: 67.89 },
  { id: 6, name: "Agenda", price: 78.9 },
];
let names = products.map((obj) => obj.name).join(",");
let total = products.reduce(
  (accumulator, newObject) => accumulator + newObject.price,
  0
);
let avg = total / products.length;

let min = products[0].price; //234
let max = products[0].price; //323

products.forEach((product) => {
  if (product.price < min) {
    min = product.price;
  }
  if (product.price > max) {
    //456
    max = product.price;
  }
});
let sendObject = {
  names: names,
  total: total,
  avg: avg,
  min: min,
  max: max,
};
console.log(sendObject);
