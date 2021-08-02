// ********************** //
// ej_1 Funciones //
// ********************** //
//Funcion constructora
function test (name){
    this.nombre = name;
    
    this.ver = function(){
      console.log(this.nombre); // "coder"
    }
  }
  // Creamos una instancia de la funcion constructora
  let o = new test('coder');
  o.ver();


// ============ //


// ********************** //
// ej_2 Funciones flechas //
// ********************** //
var nombre = 'Estoy fuera de la func Constructora';

//Funcion constructora
function test (name){
  this.nombre = name;
  
  setTimeout(function(){
    console.log(this.nombre); // "Estoy fuera de la func Constructora"
  },1000)
  
  // El arrow func permite al this tomar el contexto donde se creo la función
  setTimeout(() => {
    console.log(this.nombre); // "coder"
  },1000) 
}
// Creamos una instancia de la funcion constructora
let o = new test('coder');




// ============ //


// ********************** //
// ej_3 Funciones flechas //
// ********************** //
//Funcion constructora
function test (name){
    this.nombre = name;
    
    this.verNombre = ()=> {
      console.log(this.nombre)
    }
  }
  
  // Creamos una instancia de la funcion constructora
  let persona1 = new test('Eliot');
  let persona2 = new test('Juan');
  
  persona1.verNombre();
  persona2.verNombre();


// ============ //


// ********************** //
// ej_4 Propiedades - prototype y estaticas //
// ********************** //
//Funcion constructora
function test (name){
    this.nombre = name;
    
    this.verNombre = ()=> {
      console.log(this.nombre)
    }
    //Estatica
    test.tipo = 'persona'
  }
  //Prototipo
  test.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre}`);
  }
  
  // Creamos una instancia de la funcion constructora
  let persona1 = new test('Eliot');
  let persona2 = new test('Juan');
  
  persona1.verNombre(); // "Eliot"
  persona2.verNombre(); // "Juan"
  
  persona1.saludar(); // "Hola soy Eliot"
  persona2.saludar(); // "Hola soy Juan"
  
  console.log(persona1.tipo); // undefined
  console.log(test.tipo); // "persona"
  


// ============ //


// ********************** //
// ej_5 Propiedades - prototype y estaticas //
// ********************** //
//Funcion constructora
function Persona (nombre, edad){
    //Propiedades instancia de Persona
    this.nombre = nombre;
    this.edad = edad;
    Persona.contador++
  }
  //propiedades prototipo de persona
  Persona.prototype.saludo = function() {
    console.log('Hola!')
  }
  //propiedades estaticas de persona (No pertenece a la instancia)
  Persona.contador = 0;
  
  let juan = new Persona('Juan', 35)
  
  console.log(Persona.contador) // 1
  juan.saludo(); // "Hola!"