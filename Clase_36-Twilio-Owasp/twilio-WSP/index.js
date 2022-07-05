const express = require("express");
const twilio = require("twilio");

const app = express();
app.use(express.json());
// Credenciales
const accountId = "ACcd27ef502fd73b5aa2c3778372c50955";
const authToken = "46e9f13f7c0706843b01ae208ac6872d";

const client = twilio(accountId, authToken);

const options = {
  // cuerpo del mensaje
  body: "Hola soy un WSP desde nodeJS",
  mediaUrl: ["https://pbs.twimg.com/media/D4uQCqNW4AA4s0I.jpg"],
  from: "whatsapp:+14155238886",
  to: "whatsapp:+5491153267449",
};

// ruta POST para envio de mensajes
/*
Que quiero hacer en esta ruta??
    - Que se conecte con el servicio de SMS de Twilio
    - y crear el flujo de envio de mensajeria
*/
app.post("/twilio-coder", async (req, res) => {
  //   const options = {
  //     // cuerpo del mensaje
  //     body: req.body.message,
  //     mediaUrl: req.body.img,
  //     from: "whatsapp:+14155238886",
  //     to: "whatsapp:+5491153267449",
  //   };
  try {
    const message = await client.messages.create(options);
    res.send({ data: message });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  console.log("Server OK!");
});
