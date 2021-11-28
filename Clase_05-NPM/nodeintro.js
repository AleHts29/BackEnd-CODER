let params = process.argv.slice(2)

console.log(params)

let suma = parseFloat(params[0]) + parseFloat(params[1])
let resta = parseFloat(params[0]) - parseFloat(params[1])
let multiplicacion = parseFloat(params[0]) * parseFloat(params[1])


console.log(suma)
console.log(resta)
console.log(multiplicacion)