class Persona{
    constructor(nombre, edad){
        //propiedades instacia de Persona
        this.nombre = nombre;
        this.edad = edad;
        Persona.contador++
    }
    //Propiedad estatica ES6 (no pertenece a la instancia)
    static contador = 0;

    //Propiedad prototipo de persona
    saludo(){
        console.log('Hola');
    }
}
let juan = new Persona('Juan', 35);

