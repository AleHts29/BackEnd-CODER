/*
Realizar una aplicación en Node.js que permita recibir como parámetros una cantidad
ilimitada de números, con los cuales debe confeccionar el siguiente objeto (se
imprimirá por consola):

 {
     datos:{
         numeros:[],
         promedios: (el promedio entre ellos),
         max: (valor maiximo),
         min: (valor minimo),
         ejecutable: (nombre del ejecutable),
         pid: (process id)
     }
 }
*/

const argumentos = process.argv.slice(2);

const num = argumentos.map((x) => {
  return parseInt(x);
});

const suma = num.reduce((acc, curr) => {
  return acc + curr;
});

let promedio = suma / num.length;

/*
Metodo de ordenamiento sort

Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia.

const numeros = [3, 23, 12];
numeros.sort(function(a, b){return a - b}); // --> 3, 12, 23
ó
const numeros = [3, 23, 12];
numeros.sort(function(a, b){return b - a}); // --> 23, 12, 3
*/

const orderAsc = num.sort((a, b) => {
  return a - b;
});

const max = orderAsc[orderAsc.length - 1];
const min = orderAsc[0];

const path = process.cwd();

const datos = {
  numeros: num,
  promedios: promedio,
  max: max,
  min: min,
  ejecutable: process.cwd(),
  pid: process.pid,
};

console.log({ datos: datos });
