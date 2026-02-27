import request from "supertest";
import app from "../app";

let token;

beforeAll(async () => {
  const response = await request(app)
    .post("/v1/auth/login")
    .send({
      email: "admin@sps.com",
      password: "1234"
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("token");

  token = response.body.token;
});

describe("User CRUD", () => {
  it("Deve criar um usuário novo", async () => {
    const response = await request(app)
      .post("/v1/users")
      .set("Authorization", `Bearer ${token}`)
      .send({
        email: "test@sps.com",
        name: "Test User",
        type: "user",
        password: "123456"
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("email", "test@sps.com");
  });

  it("Deve parar a crição do user, por conta do mesmo email", async () => {
    const response = await request(app)
      .post("/v1/users")
      .set("Authorization", `Bearer ${token}`)
      .send({
        email: "test@sps.com",
        name: "Another User",
        type: "user",
        password: "123456"
      });

    expect(response.status).toBe(400);
  });
});