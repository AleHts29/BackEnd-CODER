// Definiremos una función llamada operación que reciba como parámetro dos valores y una función con la operación que va a realizar. Deberá retornar el resultado.

// Definiremos las siguientes funciones: suma, resta, multiplicación, división y módulo. Estas recibirán dos valores y devolverán el resultado. Serán pasadas como parámetro en la llamada a la función operación

// Todas las funciones tendrán que ser realizadas con sintaxis flecha.

const suma = (a, b) => `suma: ${a + b}`;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;

const operacion = (a, b, cb) => {
    return cb(a, b)
}
console.log(operacion(6, 3, suma))
console.log(operacion(6, 3, resta))
console.log(operacion(6, 3, multiplicacion))


// ************** //

setTimeout(() => {
    console.log("Hola soy un setTimeOut")
}, 2000)