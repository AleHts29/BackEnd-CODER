const express = require("express");
const twilio = require("twilio");
const app = express();

// Credenciales
const accountId = "ACcd27ef502fd73b5aa2c3778372c50955";
const authToken = "46e9f13f7c0706843b01ae208ac6872d";

const client = twilio(accountId, authToken);
// ruta POST para envio de mensajes
/*
Que quiero hacer en esta ruta??
    - Que se conecte con el servicio de SMS de Twilio
    - y crear el flujo de envio de mensajeria
*/
app.post("/twilio-coder", async (req, res) => {
  try {
    const message = await client.messages.create({
      // cuerpo del mensaje
      body: "Hola soy un SMS desde nodeJS",
      from: "+19206956800",
      to: "+5491153267449",
    });
    console.log(message);
    res.send({ data: message });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  console.log("Server OK!");
});
