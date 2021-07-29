// ********************** //
// ej_1 Clase uso de this //
// ********************** //
// let log = function(o){
//     console.log(o.constructor.name);
//   }
  
  
//   i = 45;
//   function test(){
//     log(this);
//     log(this.i)
//     console.log(this.i);
//   }
//   test();

// // CONSOLA //
// "Window"
// "Number"
// 45


// ============ //


// **************************************** //
// ej_2 Clase lamada con apply, call y bind //
// **************************************** //
// var name = 'Juan';
// function test(anio){
//   console.log("Nombre: " + this.name + 
//               " - Edad: " + this.apellido +
//               " y nacio en el año " + anio);
// }
// // contexto
// let o = {
//   name: 'Pedro',
//   apellido: 'Torres'
// }


// test(86);

// //call ejecuta una funcion con un contexto
// test.call(o, 76);

// //bind crea una funcion enlazada a un contexto
// let nuevafunc = test.bind(o, 96);
// nuevafunc();

// // CONSOLA //
// "Nombre: Juan - Edad: undefined y nacio en el año 86"
// "Nombre: Pedro - Edad: Torres y nacio en el año 76"
// "Nombre: Pedro - Edad: Torres y nacio en el año 96"


// ============ //


var nombre = 'Ale'
const miPerro = {
    nombre: 'Homero',
    especia: 'Perro',
    saludar(){
        console.log(`WuaaAAUU! Hola, me llamo ${this.nombre}`);
        console.log(this === miPerro);
    }
};

miPerro.saludar();

let saludar = miPerro.saludar;
saludar();