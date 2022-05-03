const originalData = require("./data.js");
const util = require("util");
const { normalize, schema } = require("normalizr");

// SCHEMA
const userSchema = new schema.Entity("users");
const comentsSchema = new schema.Entity("comments", {
  commenter: userSchema,
});
const articleSchema = new schema.Entity("articles", {
  author: userSchema,
  comments: [comentsSchema],
});

const postSchema = new schema.Entity("posts", {
  posts: [articleSchema],
});

const normalizePost = normalize(originalData, postSchema);

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true));
}
print(normalizePost);

// para ver optimizacion
console.log("Data Normalizada: ", JSON.stringify(normalizePost).length);
console.log("Data OriginaData: ", JSON.stringify(originalData).length);
