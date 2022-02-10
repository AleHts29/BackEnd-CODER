const express = require("express");

// Me genera id random
const { v4: uuidv4 } = require("uuid");

// confi Firebase
var admin = require("firebase-admin");
var serviceAccount = require("./db/coderclase20-firebase-adminsdk-ptdvy-4b44df0d00.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "http://coderclase20.firebaseio.com",
});

const db = admin.firestore();
const query = db.collection("users");

const saveUsers = async () => {
  // le paso uuid como parametro, este me devuelve un string
  let doc = query.doc(uuidv4());
  await doc.create({
    name: "Alejandro",
    lastName: "huertas",
    age: 35,
  });
};
saveUsers();

const app = express();

app.listen(8080, () => {
  console.log("Server OK");
});
