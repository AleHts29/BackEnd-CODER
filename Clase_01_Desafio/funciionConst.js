function usuario (nombre, apellido, libros, mascotas){
    // Propiedad instancia
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}

// Propiedades prototipo
usuario.prototype.getFullName = function(){
    console.log( `Nombre Completo: ${Ale.nombre} ${Ale.apellido}`)
}
usuario.prototype.addMascota = function(mascota){
    misMascotas = [...mascotas, mascota];
    // console.log( `Mascotas: ${[misMascotas]}`)
    // return misMascotas;
}
usuario.prototype.getMascotas = function(misMascotas){
    console.log( `${Ale.nombre} tiene: ${misMascotas.length} mascotas`)
}
usuario.prototype.addBook = function(book, autor){
    const newBook = {
        Libro: book,
        Autor: autor
    }
    misLibros = [...libros, newBook]
    // console.log(misLibros);
}
usuario.prototype.getBooks = function(misLibros){
    console.log('\nLista de libros actualizada: ')
   return misLibros.map(milibro => (
        console.log('- '+milibro.Libro)
    ))
}


const mascotas = ['perro', 'gato']

let libros = [
    {
        Libro: 'The Hitchhiker´s Guide To The Galaxy',
        Autor: 'Dooglas Adams'
    },
    {
        Libro: '1984',
        Autor: 'George Orwell'
    },
    {
        Libro: 'Fahrenheit 451',
        Autor: 'Ray Bradbury'
    },
    {
        Libro: 'El Alquimista',
        Autor: 'Paulo Coelho'
    },
    {
        Libro: 'El señor de las Moscas',
        Autor: 'William Golding'
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

let Ale = new usuario ('Alejandro', 'Huertas', libros, mascotas)

Ale.getFullName();
Ale.addMascota('hormiga');
Ale.getMascotas(misMascotas);
Ale.addBook('new Libro', 'new Autor')
Ale.getBooks(misLibros);