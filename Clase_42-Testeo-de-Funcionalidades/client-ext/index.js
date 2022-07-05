// const axios = require("axios");

// const got = require("got");
import got from "got";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// axios
//   .get(url)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // con una promesa
// const getUser = async () => {
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUser();

// Usando GOT necesito usar el tipo import/export

const getUser = async () => {
  try {
    const response = await got.get(url);
    // console.log(response.body);
    // la respuesta es tipo string.
    console.log(JSON.parse(response.body));
  } catch (error) {
    console.log(error);
  }
};

getUser();
