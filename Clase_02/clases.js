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



class Persona2{
    constructor(name, lastName){
        this.name = name;
        this.age = age; 
    }
    obtenerResponsable() {
        console.log(`El responsable es ${this.name} ${this.lastName}`)
    }
}

