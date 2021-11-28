const fs = require('fs')

// Leer
fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        throw 'ERROR al leer'
    }
    console.log(data)
});


// Escribir
fs.writeFile('./testAsync.txt', 'Hola soy un contenido Async', {encoding: 'utf-8'}, (err) => {
    if(err){
        throw 'ERROR al escribir'
    }
    console.log('Se escribe/crea el archivo testAsync de forma correcta')
});


// Añadir
fs.appendFile('./testAsync.txt', '\nHola soy un contenido Async agregado con appendFile', {encoding: 'utf-8'}, (err) => {
    if(err){
        throw 'ERROR al añadir'
    }
    console.log('Se añade contenido al archivo testAsync de forma correcta')
});


// Borrar
fs.unlink('./testAsync.txt', (err) => {
    if(err){
        throw 'ERROR al añadir'
    }
    console.log('Se borra el archivo testAsync de forma correcta')
});