const { normalize, schema } = require("normalizr");
const { comments } = require("./data");
const originalData = require("./data");
const originalDataEmpresa = require("./dataEmpresa");

// Funcion para dar formato en consola
const util = require("util");

// NORMALIZACION - ejemplo
// {
//   entreties: {
//       autores:{
//           id: "123"
//       },
//       Comentarios:{
//         id: "123"
//     }
//   }
// }

// Normalizacion de data.js
const authorSchema = new schema.Entity("users");
const commentsSchema = new schema.Entity("comments", {
  commenter: authorSchema,
});

const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentsSchema],
});

const normalizeBlogs = normalize(originalData, postSchema);

let print = (objeto) => {
  console.log(util.inspect(objeto, false, 12, true));
};
print(normalizeBlogs);

// Normalizacion de dataEmpresa.js
const gerenteSchema = new schema.Entity("gerente");
const encargadoSchema = new schema.Entity("encargado");
const empleadosSchema = new schema.Entity("empleados", {
  gerente: gerenteSchema,
  encargado: encargadoSchema,
});

const empresaSchema = new schema.Entity("empresa", {
  gerente: empleadosSchema,
  encargado: empleadosSchema,
  empleados: [empleadosSchema],
});

const normalizeEmpresa = normalize(originalDataEmpresa, empresaSchema);

let print2 = (objeto) => {
  console.log(util.inspect(objeto, false, 12, true));
};
print2(normalizeEmpresa);

console.log(Object.keys(originalDataEmpresa).length);
console.log(Object.keys(normalizeEmpresa).length);
