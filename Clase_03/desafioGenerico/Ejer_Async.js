const fs = require('fs')

// Leer
let prueba = fs.readFile('./package.json', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        throw 'ERROR al leer'
    }
    const info = {
        contenidoStr: (data),
        contenidoObje: JSON.parse(data),
        }
    console.log(info)

    // Escribir
    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), {encoding: 'utf-8'}, (err) => {
    if(err){
        throw 'ERROR al escribir'
    }
    console.log('Se escribe el archivo de forma correcta')
});
});

// con fs.staf






