const express = require("express");
const { createTransport } = require("nodemailer");
// createTransport -> es un metodo de configuracion para el transporte

const app = express();

const TEST_EMAIL = "braxton.nitzsche39@ethereal.email";
const TEST_PASSWORD = "RqtF9MpdEXDeWfdxGU";

const transporter = createTransport({
  host: "smtp.ethereal.email", // --> este host es la cuenta de origen
  port: 587,
  // Usuarios de autenticacion
  auth: {
    user: TEST_EMAIL,
    pass: TEST_PASSWORD,
  },
});

const cardTemplate = `
        <div class="card" style="width: 18rem;">
        <img src="https://pbs.twimg.com/media/EbepWNrX0AAwqNc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
`;

// VAMOS A CONSTRUIR LA ESTRUCTURA DE UN MAIL --> de que se compone un email??
/*
 - de donde viene?.. un from
 - A donde va?.. un To
 - subject
 - body
*/

// Estructura email
const mailOptions = {
  from: "Server NodeJS",
  to: TEST_EMAIL,
  subject: "Mail de prueba desde NodeJS",
  html: cardTemplate,
};

/* ------------------------- Vamos a enviar un emial usando Ethereal------------------------ */
/*
 - Utilidades
 - cada que se crea un carrito y se finaliza la compra --> enviar un mail al administrador. 
 - cada que se da alta/baja a determinados productos  
*/
app.post("/email-coder", async (req, res) => {
  //   let { asunto, contenido } = req.body;
  //   const mailOptions = {
  //     from: "Server NodeJS",
  //     to: TEST_EMAIL,
  //     subject: asunto,
  //     html: contenido,
  //   };

  // Configuiracion
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info);
    res.send("Email enviado a " + TEST_EMAIL);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  console.log("Server OK!");
});
