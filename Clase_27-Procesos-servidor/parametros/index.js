console.log(process.argv);

// Como process me devuelve un array
let arguments = process.argv.splice(2);
console.log(arguments);

// sumar numeros pasados como argumentos
let sum = arguments.reduce((accumulator, current) => {
  return parseInt(accumulator) + parseInt(current);
});
console.log(sum);
