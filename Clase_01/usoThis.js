// ********************** //
// ej_1 Clase uso de this - el this siempre apunta al contexto global //
// ********************** //
let log = function(o){
    console.log(o.constructor.name);
  }
  i = 45;
  function test(){
    log(this); // "Window"
    log(this.i) // "Number"
    console.log(this.i); // 45
  }
  test();


// ============ //


// **************************************** //
// ej_2 Clase llamada con apply, call y bind //
// **************************************** //
var name = 'Juan';
function test(anio){
  console.log("Nombre: " + this.name + 
              " - Edad: " + this.apellido +
              " y nacio en el año " + anio);
}
// Contexto - Objeto
let o = {
  name: 'Pedro',
  apellido: 'Torres'
}

test(86); // "Nombre: Juan - Edad: undefined y nacio en el año 86"

//call ejecuta una funcion con un contexto
test.call(o, 76); // "Nombre: Pedro - Edad: Torres y nacio en el año 76"

//bind crea una funcion enlazada a un contexto
let nuevafunc = test.bind(o, 96);
nuevafunc(); // "Nombre: Pedro - Edad: Torres y nacio en el año 96"


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
// "WuaaAAUU! Hola, me llamo Homero"
// true

let saludar = miPerro.saludar;
saludar();
// "WuaaAAUU! Hola, me llamo Ale"
// false