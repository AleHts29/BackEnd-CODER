require("./db");

const Product = require("./models/colegio");

const alumnos = [
  {
    nombre: "Pedro",
    apellido: "Mei",
    edad: 21,
    dni: "31155898",
    curso: "1A",
    nota: 7,
  },
  {
    nombre: "Ana",
    apellido: "Gonzalez",
    edad: 32,
    dni: "27651878",
    curso: "1A",
    nota: 8,
  },
  {
    nombre: "José",
    apellido: "Picos",
    edad: 29,
    dni: "34554398",
    curso: "2A",
    nota: 6,
  },
  {
    nombre: "Lucas",
    apellido: "Blanco",
    edad: 22,
    dni: "30355874",
    curso: "3A",
    nota: 10,
  },
  {
    nombre: "María",
    apellido: "García",
    edad: 36,
    dni: "29575148",
    curso: "1A",
    nota: 9,
  },
  {
    nombre: "Federico",
    apellido: "Perez",
    edad: 41,
    dni: "320118321",
    curso: "2A",
    nota: 5,
  },
  {
    nombre: "Tomas",
    apellido: "Sierra",
    edad: 19,
    dni: "38654790",
    curso: "2B",
    nota: 4,
  },
  {
    nombre: "Carlos",
    apellido: "Fernández",
    edad: 33,
    dni: "26935670",
    curso: "3B",
    nota: 2,
  },
  {
    nombre: "Fabio",
    apellido: "Pieres",
    edad: 39,
    dni: "4315388",
    curso: "1B",
    nota: 9,
  },
  {
    nombre: "Daniel",
    apellido: "Gallo",
    edad: 25,
    dni: "37923460",
    curso: "3B",
    nota: 2,
  },
];

// SAVE
const productSave = async (alumnos) => {
  let newProductSave;
  await alumnos.map((alumno) => {
    let addAlumno = new Product({
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad,
      dni: alumno.dni,
      curso: alumno.curso,
      nota: alumno.nota,
    });
    console.log(addAlumno);
    newProductSave = addAlumno.save();
  });

  return newProductSave;
};
// como la funcion productSave() devuelve una promesa la trato como tal
// productSave(alumnos)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// READ
const getAllItems = async () => {
  const product = await Product.find();
  return product;
};
getAllItems()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const getOneItems = async () => {
  const product = await Product.findOne({ _id: "61f83f1a5a9ecc655d788191" });
  return product;
};
// getOneItems()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// UPDATE
const updateProduct = async () => {
  const productUpdate = await Product.findByIdAndUpdate(
    { _id: "61f83f1a5a9ecc655d788191" },
    {
      description: "This is the new iPhone",
    }
  );
  return productUpdate;
};
// updateProduct()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DELETE
const deleteProduct = async () => {
  const product = await Product.findOneAndDelete({
    _id: "61f8664ba97fea0a6e2ca578",
  });
  return product;
};
// deleteProduct()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteAllProducts = async () => {
  const productDelete = await Product.deleteMany({});
  return productDelete;
};
// deleteAllProducts()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
