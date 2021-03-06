function Usuario(nombre, apellido, libros, mascotas) {
  // Propiedad instancia
  this.nombre = nombre;
  this.apellido = apellido;
  this.libros = libros;
  this.mascotas = mascotas;

  // Las propiedades prototipo pueden ir dentro o fuera de la funcion
  // Propiedades prototipo
  this.getFullName = function () {
    console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);
  };

  this.addMascota = function (mascota) {
    this.mascotas.push(mascota);
    // console.log( `Mascotas: ${[misMascotas]}`)
    // return misMascotas;
  };

  this.getMascotas = function () {
    console.log(`${this.nombre} tiene: ${this.mascotas.length} mascotas`);
    return this.mascotas.length;
  };
}

// Las propiedades prototipo pueden ir dentro o fuera de la funcion
// Propiedades prototipo
Usuario.prototype.addBook = function (book, autor) {
  const newBook = {
    Libro: book,
    Autor: autor,
  };
  this.libros.push(newBook);
};

Usuario.prototype.getBooks = function () {
  console.log("\nLista de libros actualizada: ");
  return this.libros.map((milibro) => console.log("- " + milibro.Libro));
};

const mascotas = ["perro", "gato"];

let libros = [
  {
    Libro: "The Hitchhiker´s Guide To The Galaxy",
    Autor: "Dooglas Adams",
  },
  {
    Libro: "1984",
    Autor: "George Orwell",
  },
  {
    Libro: "Fahrenheit 451",
    Autor: "Ray Bradbury",
  },
  {
    Libro: "El Alquimista",
    Autor: "Paulo Coelho",
  },
  {
    Libro: "El señor de las Moscas",
    Autor: "William Golding",
  },
  {
    Libro: "Poder sin limites",
    Autor: "Tony Robbins",
  },
  {
    Libro: "El diario de Ana Frank",
    Autor: "Ana Frank",
  },
  {
    Libro: "Cien años de soledad",
    Autor: "Gabriel garcia Marquez",
  },
  {
    Libro: "Crimen y Castigo",
    Autor: "Fiodor Dostoievski",
  },
];

let Ale = new Usuario("Alejandro", "Huertas", libros, mascotas);

Ale.getFullName();
Ale.addMascota("hormiga");
Ale.addMascota("pez");
Ale.getMascotas();
Ale.addBook("new Libro", "new Autor");
Ale.getBooks();
