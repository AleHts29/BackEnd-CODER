const parseArg = require("minimist");
const yargs = require("yargs/yargs")(process.argv.slice(2));

// console.log(parseArg(process.argv.slice(2)));

/*
Ejemplo

>_ node index.js 12 Hola 2 --name=Ale -x23 -abc

me devuelve el objeto
{ _: [ 12, 'Hola', 2 ], name: 'Ale', x: 23, a: true, b: true, c: true }
*/

// opciones por default
const optionDefault = { default: { name: "Homero", apellido: "Huertas" } };
// console.log(parseArg(process.argv.slice(2), optionDefault));

// opciones por alias
const optionAlias = { alias: { a: "nombre", b: "apellido" } };
// console.log(parseArg(process.argv.slice(2), optionAlias));
/*
>_ node index.js 12 Hola 2 --name=Ale -a Camilo
con optionDefault 
--> { _: [ 12, 'Hola', 2 ], name: 'Ale', a: 'Camilo', apellido: 'Huertas' }

con optionAlias
--> { _: [ 12, 'Hola', 2 ], name: 'Ale', a: 'Camilo', nombre: 'Camilo' }
*/

// ============ //

/* EJE_2
Realizar una aplicación en Javascript ejecutada a través de Node.JS que al ejecutarse de la siguiente manera: node main.js 1 2 3 -m dev -p 8080 -d
Construya y muestre por pantalla el siguiente objeto:
{ modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }

Y con el siguiente llamado: node main.js 1 2 3
Construya y muestre por pantalla el siguiente objeto:
{ modo: 'prod', puerto: 0, debug: false, otros: [ 1, 2, 3 ] }
*/
const optionsAlias2 = {
  alias: { m: "modo", p: "puerto", d: "debug", _: "otros" },
  default: { modo: "prod", puerto: 0, debug: false },
};
let newObj = parseArg(process.argv.slice(2), optionsAlias2);

// ajusto el objeto a lo que me pide la consigna
delete newObj.m;
delete newObj.p;
delete newObj.d;
newObj.otros = newObj._;
delete newObj._;
// console.log(newObj);

// ============ //
// ============ //

// USANDO YARGS
const args = yargs
  .default({
    nombre: "Alejandro",
    apellido: "Huertas",
  })
  .alias({
    n: "Nombre",
    a: "Apellido",
  }).argv;

console.log(args);
