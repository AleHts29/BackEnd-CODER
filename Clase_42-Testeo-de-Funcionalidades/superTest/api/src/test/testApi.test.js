const request = require("supertest")("http://localhost:8080");

const expect = require("chai").expect;

describe("API - GET - /api/users", () => {
  it("Deberia devolver un status 200", async () => {
    let response = await request.get("/api/users");

    // Usamos la funcion expect --> basicamente es yo espero
    expect(response.status).to.eql(200);
  });
});

// version
// chai 4.3.6
// mocha 9.2.0
// supertest 6.2.2
