// const express = require("express");

// const app = express();
// const AWS = require("aws-sdk");

// const PORT = process.env.PORT || 4002;

// AWS.config.update({
//   region: "us-east-1",
// });
// app.use(express.json());

// const sns = new AWS.SNS();

// const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:009848363809:notificationCoder";

// let arr = [];

// app.get("/", (req, res) => {
//   res.send("Test API");
// });

// app.post("/user/", (req, res) => {
//   let { username, password } = req.body;

//   let obj = {
//     id: Math.random(),
//     username,
//     password,
//   };

//   arr.push(obj);
//   let user = JSON.stringify(obj);

//   return sns
//     .publish({
//       Message: `nuevo usuario ${user}`,
//       Subject: "Nuevo usuario",
//       TopicArn: SNS_TOPIC_ARN,
//     })
//     .promise()
//     .then((data) => {
//       console.log("se envio el mail");
//       res.json({
//         Operation: "SAVE",
//         Message: "SUCESS",
//         Item: req.body,
//       });
//     })
//     .catch((err) => {
//       console.log("Error");
//       res.send("Falla al enviar");
//     });

//   //   res.send("Test API");
// });

// app.listen(PORT, () => {
//   console.log("server OK");
// });

const express = require("express");

const app = express();
const AWS = require("aws-sdk");

const PORT = process.env.PORT || 4002;

AWS.config.update({
  region: "us-east-1",
});

app.use(express.json());

const sns = new AWS.SNS();

const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:009848363809:notificationCoder";

let arr = [];

app.get("/", (req, res) => {
  res.send("TEST API");
});

app.post("/api", (req, res) => {
  let { username, password } = req.body;

  let obj = {
    id: Math.random(),
    username,
    password,
  };
  arr.push(obj);
  let user = JSON.stringify(obj);

  return sns
    .publish({
      Message: `nuevo Usuario Agregado ${user}`,
      Subject: "Nuevo Usuario",
      TopicArn: SNS_TOPIC_ARN,
    })
    .promise()
    .then((data) => {
      console.log(data);
      console.log("Se notifico");
      res.json({
        Operation: "SAVE",
        Message: "SUCESS",
        Item: req.body,
      });
    })
    .catch((err) => {
      console.log("Error al enviar correo ", err);
      res.send("Falla al enviar correo");
    });
});

app.listen(PORT, () => {
  console.log("Sever ok!");
});
