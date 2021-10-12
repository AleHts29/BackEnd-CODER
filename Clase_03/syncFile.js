const fs = require('fs')


let libros = [
    {
        Libro: 'The Hitchhiker´s Guide To The Galaxy',
        Autor: 'Dooglas Adams'
    },
    {
        Libro: 'Poder sin limites',
        Autor: 'Tony Robbins'
    },
    {
        Libro: 'El diario de Ana Frank',
        Autor: 'Ana Frank'
    },
    {
        Libro: 'Cien años de soledad',
        Autor: 'Gabriel garcia Marquez'
    },
    {
        Libro: 'Crimen y Castigo',
        Autor: 'Fiodor Dostoievski'
    }
];


// Leer un archivo txt
let readFileOne = fs.readFileSync('./test.txt', {encoding:'utf-8'})
console.log(readFileOne);

// Escribir
fs.writeFileSync('./test.txt','Escribo un contenido nuevo', {encoding:'utf-8'})

// Escribir, si no existe lo crea
fs.writeFileSync('./test2.json', JSON.stringify(libros, null, 2), {encoding:'utf-8'})

// Añadir
fs.appendFileSync('./test.txt','\nEscribo una linea de texto adicional', {encoding:'utf-8'})

// Eliminar
// fs.unlinkSync('./test2.txt')


// Usando Try Catch
try{
    let readFileTry = fs.readFileSync('./test.txt', {encoding:'utf-8'})
console.log(readFileTry);
}catch (err){
    throw new Error('Error al leer')
}

// Ejercicio
// Realizar un programa que:
// A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
// B) Lea nuestro propio archivo de programa y lo muestre por consola.
// C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).

// Aclaración: utilizar las funciones sincrónicas de lectura y escritura de archivos del módulo fs de node.js


function DATE() {
    let date = new Date()
    let fecha =  date.getDate()
    let hora = date.getHours()
    return `fecha: ${fecha} - Hora ${hora}`
}

try{
    // Escribir
    fs.writeFileSync('./fyh.txt', DATE(), {encoding:'utf-8'})

    // Leo
    let readFileTry = fs.readFileSync('./fyh.txt', {encoding:'utf-8'})
    console.log(readFileTry);
    }catch (err){
        throw new Error('Error al leer')
}