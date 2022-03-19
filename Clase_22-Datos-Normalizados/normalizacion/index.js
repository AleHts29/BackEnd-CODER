const { normalize, schema } = require("normalizr");
const { comments } = require("./data");
const originalData = require("./data");

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

const authorSchema = new schema.Entity("usuarios");
const commentsSchema = new schema.Entity("commentsUsers", {
  commenter: authorSchema,
});

const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentsSchema],
});

const normalizeBlogs = normalize(originalData, postSchema);

let print = (obj) => {
  console.log(util.inspect(obj, false, 12, true));
};

print(normalizeBlogs);
