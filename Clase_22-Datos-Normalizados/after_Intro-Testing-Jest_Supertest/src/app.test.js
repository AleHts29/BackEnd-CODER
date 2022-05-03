import app from "./app.js";
import request from "supertest";
import mongoose from "mongoose";

describe("TEST AFTER CODER", () => {
  // como son pruebas, elimino la data de la coleccion cuando me conecto
  beforeEach(async () => {
    await mongoose.connection.collections["messages"].drop();
  });

  // le pasamos un titulo del primer test y le pasamos el objeto del mensaje
  // simula una prueba de postman por ejemplo.
  // POST
  it("probando crear mensaje", async () => {
    const message = {
      sender: "sender1",
      message: "message1",
    };
    const response = await request(app).post("/messages").send(message);

    // tenemos que evaluar que devueva lo que estamos pasando
    expect(response.body.sender).toBe(message.sender);
    expect(response.body.message).toBe(message.message);
    expect(response.statusCode).toBe(200);
  });

  // GET
  it("Probando obtener todos los mensajes", async () => {
    const message = {
      sender: "Sender1",
      message: "Message1",
    };
    await mongoose.models.Messages.create(message);
    const response = await request(app).get("/messages");
    expect(response.statusCode).toBe(200);
    expect(response.body[0].sender).toBe(message.sender);
    expect(response.body[0].message).toBe(message.message);
  });

  // PUT
  it("probando Update", async () => {
    const message = {
      sender: "sender1",
      message: "message1",
    };
    const responseMessage = await mongoose.models.Messages.create(message);

    const newMessage = {
      sender: "sender2",
      message: "message2",
    };

    const response = await request(app)
      .put(`/messages/${responseMessage._id}`)
      .send(newMessage);
    expect(response.statusCode).toBe(200);
    expect(response.body.modifiedCount).toBe(1);
  });

  // DELETE
  it("probando Delete", async () => {
    const message = {
      sender: "sender1",
      message: "message1",
    };
    const responseMessage = await mongoose.models.Messages.create(message);

    const response = await request(app).delete(
      `/messages/${responseMessage._id}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.deletedCount).toBe(1);
  });
});
